#!/usr/bin/env node
// Pulls real Google Search Console data for bal-harbour.com via the
// Search Analytics API, authenticated as a service account. Zero
// third-party dependencies on purpose — only Node's built-in `crypto`
// and `https` — so the growth-agent routine can run it with nothing
// more than `node scripts/gsc-report.mjs`.
//
// Auth: reads the service account key from GSC_SERVICE_ACCOUNT_JSON
// (the raw JSON string) or GSC_SERVICE_ACCOUNT_KEY_FILE (a path to the
// JSON key file). The service account must be added as a user
// (Restricted is enough — this only reads) on the GSC property in
// Settings → Users and permissions.
//
// Usage:
//   node scripts/gsc-report.mjs                  # last 7 vs prior 7 days
//   node scripts/gsc-report.mjs --days 28         # last 28 vs prior 28
//   node scripts/gsc-report.mjs --json            # machine-readable output
//
// Output: a compact report to stdout — totals (clicks/impressions/ctr/
// position) this period vs the prior period, top queries, top pages,
// and queries sitting at "striking distance" (position 8–20 — the ones
// closest to a page-1 push).

import { createSign } from "node:crypto";
import { readFileSync } from "node:fs";

const SITE_URL = process.env.GSC_SITE_URL || "https://bal-harbour.com/";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function loadServiceAccount() {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (raw) return JSON.parse(raw);
  const path = process.env.GSC_SERVICE_ACCOUNT_KEY_FILE;
  if (path) return JSON.parse(readFileSync(path, "utf8"));
  throw new Error(
    "Set GSC_SERVICE_ACCOUNT_JSON (the key file's contents) or " +
      "GSC_SERVICE_ACCOUNT_KEY_FILE (a path to it).",
  );
}

async function getAccessToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    }),
  );
  const signInput = `${header}.${claims}`;
  const signature = createSign("RSA-SHA256")
    .update(signInput)
    .sign(sa.private_key, "base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
  const assertion = `${signInput}.${signature}`;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(
      `Token exchange failed (${res.status}): ${JSON.stringify(data)}`,
    );
  }
  return data.access_token;
}

async function queryAnalytics(token, { startDate, endDate, dimensions, rowLimit = 25 }) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    SITE_URL,
  )}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ startDate, endDate, dimensions, rowLimit }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(
      `Search Analytics query failed (${res.status}): ${JSON.stringify(data)}`,
    );
  }
  return data.rows || [];
}

function isoDaysAgo(n) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
}

function sumTotals(rows) {
  return rows.reduce(
    (acc, r) => {
      acc.clicks += r.clicks;
      acc.impressions += r.impressions;
      acc.posWeighted += r.position * r.impressions;
      return acc;
    },
    { clicks: 0, impressions: 0, posWeighted: 0 },
  );
}

function fmtPct(n) {
  return `${(n * 100).toFixed(2)}%`;
}

async function main() {
  const args = process.argv.slice(2);
  const days = Number(args[args.indexOf("--days") + 1]) || 7;
  const asJson = args.includes("--json");

  const sa = loadServiceAccount();
  const token = await getAccessToken(sa);

  // GSC data typically lags 2-3 days, so end the "current" window there
  // rather than today (today/yesterday would just show zeros).
  const end = isoDaysAgo(3);
  const currentStart = isoDaysAgo(3 + days - 1);
  const priorEnd = isoDaysAgo(3 + days);
  const priorStart = isoDaysAgo(3 + days * 2 - 1);

  const [currentQueries, priorQueries, currentPages, currentQueryPageRows] =
    await Promise.all([
      queryAnalytics(token, {
        startDate: currentStart,
        endDate: end,
        dimensions: ["query"],
        rowLimit: 25,
      }),
      queryAnalytics(token, {
        startDate: priorStart,
        endDate: priorEnd,
        dimensions: ["query"],
        rowLimit: 1000,
      }),
      queryAnalytics(token, {
        startDate: currentStart,
        endDate: end,
        dimensions: ["page"],
        rowLimit: 25,
      }),
      queryAnalytics(token, {
        startDate: currentStart,
        endDate: end,
        dimensions: ["query", "page"],
        rowLimit: 1000,
      }),
    ]);

  const currentTotals = sumTotals(currentQueries);
  const priorTotals = sumTotals(priorQueries);
  const currentAvgPos = currentTotals.impressions
    ? currentTotals.posWeighted / currentTotals.impressions
    : null;
  const priorAvgPos = priorTotals.impressions
    ? priorTotals.posWeighted / priorTotals.impressions
    : null;

  // Striking distance: real impressions, decent position, but not page 1 —
  // these are the cheapest wins (a title/content tweak, not a new page).
  const strikingDistance = currentQueryPageRows
    .filter((r) => r.position >= 8 && r.position <= 20 && r.impressions >= 5)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15);

  const report = {
    site: SITE_URL,
    window: { currentStart, end, priorStart, priorEnd, days },
    totals: {
      current: { ...currentTotals, avgPosition: currentAvgPos },
      prior: { ...priorTotals, avgPosition: priorAvgPos },
      clicksDelta: currentTotals.clicks - priorTotals.clicks,
      impressionsDelta: currentTotals.impressions - priorTotals.impressions,
    },
    topQueries: currentQueries.slice(0, 15).map((r) => ({
      query: r.keys[0],
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: r.ctr,
      position: r.position,
    })),
    topPages: currentPages.slice(0, 15).map((r) => ({
      page: r.keys[0],
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: r.ctr,
      position: r.position,
    })),
    strikingDistance: strikingDistance.map((r) => ({
      query: r.keys[0],
      page: r.keys[1],
      impressions: r.impressions,
      clicks: r.clicks,
      position: Number(r.position.toFixed(1)),
    })),
  };

  if (asJson) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  console.log(`GSC report for ${SITE_URL}`);
  console.log(
    `Window: ${currentStart} → ${end} (${days}d) vs ${priorStart} → ${priorEnd}\n`,
  );
  console.log(
    `Clicks:       ${currentTotals.clicks} (${report.totals.clicksDelta >= 0 ? "+" : ""}${report.totals.clicksDelta} vs prior)`,
  );
  console.log(
    `Impressions:  ${currentTotals.impressions} (${report.totals.impressionsDelta >= 0 ? "+" : ""}${report.totals.impressionsDelta} vs prior)`,
  );
  console.log(
    `Avg position: ${currentAvgPos ? currentAvgPos.toFixed(1) : "n/a"} (prior: ${priorAvgPos ? priorAvgPos.toFixed(1) : "n/a"})`,
  );
  console.log(
    `Avg CTR:      ${currentTotals.impressions ? fmtPct(currentTotals.clicks / currentTotals.impressions) : "n/a"}\n`,
  );

  console.log("Top queries:");
  for (const q of report.topQueries) {
    console.log(
      `  ${q.clicks}c / ${q.impressions}i / pos ${q.position.toFixed(1)} / ${fmtPct(q.ctr)}  — ${q.query}`,
    );
  }

  console.log("\nTop pages:");
  for (const p of report.topPages) {
    console.log(
      `  ${p.clicks}c / ${p.impressions}i / pos ${p.position.toFixed(1)}  — ${p.page}`,
    );
  }

  console.log("\nStriking distance (position 8–20, real impressions):");
  if (report.strikingDistance.length === 0) {
    console.log("  none this window");
  }
  for (const s of report.strikingDistance) {
    console.log(
      `  pos ${s.position} / ${s.impressions}i / ${s.clicks}c  — "${s.query}" → ${s.page}`,
    );
  }
}

main().catch((err) => {
  console.error("[gsc-report] failed:", err.message);
  process.exit(1);
});

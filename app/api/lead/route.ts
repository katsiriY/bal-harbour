import { NextResponse } from "next/server";

const LOOKING_TO = ["Buy", "Rent", "Sell", "Just curious"] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, email, lookingTo, budget, timeline, dream } = body as Record<string, unknown>;

  if (typeof firstName !== "string" || firstName.trim().length === 0) {
    return NextResponse.json({ ok: false, error: "First name is required." }, { status: 400 });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
  }
  if (typeof lookingTo !== "string" || !LOOKING_TO.includes(lookingTo as (typeof LOOKING_TO)[number])) {
    return NextResponse.json({ ok: false, error: "Please choose what you're looking to do." }, { status: 400 });
  }

  // In production this would forward the lead to a CRM / email pipeline.
  console.log("[real-estate lead]", {
    firstName,
    email,
    lookingTo,
    budget,
    timeline,
    dream,
  });

  return NextResponse.json({ ok: true });
}

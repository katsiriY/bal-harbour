"use client";

import { useState, type FormEvent } from "react";

const LOOKING_TO = ["Buy", "Rent", "Sell", "Just curious"] as const;
type Intent = (typeof LOOKING_TO)[number];

// Budget options follow the intent — renting asks monthly, selling asks the
// home's value. Purchase prices would make no sense on a rental inquiry.
const BUDGET_CONFIG: Record<
  Intent,
  { label: string; options: string[]; defaultIndex: number }
> = {
  Buy: {
    label: "Budget",
    options: ["Under $1M", "$1M – $2M", "$2M – $5M", "$5M+"],
    defaultIndex: 2,
  },
  Rent: {
    label: "Monthly budget",
    options: ["Under $5K/mo", "$5K – $10K/mo", "$10K – $20K/mo", "$20K+/mo"],
    defaultIndex: 1,
  },
  Sell: {
    label: "Estimated value",
    options: [
      "Under $1M",
      "$1M – $2M",
      "$2M – $5M",
      "$5M+",
      "No idea — that's why I'm here",
    ],
    defaultIndex: 2,
  },
  "Just curious": {
    label: "Budget (dreaming is free)",
    options: ["Not sure yet", "Under $1M", "$1M – $2M", "$2M – $5M", "$5M+"],
    defaultIndex: 0,
  },
};

const TIMELINES = ["Just browsing", "Within a year", "Within 6 months", "ASAP"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lookingTo, setLookingTo] = useState<Intent>("Buy");
  const [budget, setBudget] = useState(
    BUDGET_CONFIG.Buy.options[BUDGET_CONFIG.Buy.defaultIndex],
  );
  const [timeline, setTimeline] = useState(TIMELINES[1]);
  const [dream, setDream] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const firstNameError = touched && firstName.trim().length === 0;
  const emailError = touched && !EMAIL_RE.test(email);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);

    if (firstName.trim().length === 0 || !EMAIL_RE.test(email)) {
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, lookingTo, budget, timeline, dream }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    // This is the site's one conversion moment — worth a deliberate fade
    // rather than the instant snap of one subtree replacing another.
    // Blur-during-transition masks the fact that the incoming content has
    // a different shape/height than the form it replaced.
    return (
      <div className="flex flex-col gap-4 rounded-[28px] bg-white p-8 text-center shadow-elevated transition-[opacity,filter] duration-500 ease-out starting:opacity-0 starting:blur-sm md:p-10">
        <div className="text-2xl font-bold text-ink">You&apos;re all set, {firstName}.</div>
        <p className="text-[15px] leading-relaxed text-ink-4">
          We&apos;re matching you with a Bal Harbour agent now — expect a call
          or email within one business day. No spam, no list.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-[28px] bg-white p-6 shadow-elevated md:p-10"
    >
      <div className="text-xl font-bold text-ink md:text-[22px]">Get your intro</div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="firstName" className="text-[13px] font-semibold text-ink-2">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Grace"
            className={[
              "rounded-[14px] border-[1.5px] px-4 py-3.5 text-[14.5px] text-ink placeholder:text-muted-2 focus:outline-none",
              firstNameError ? "border-red-400" : "border-ink/18 focus:border-ink/40",
            ].join(" ")}
          />
          {firstNameError && <span className="text-xs text-red-500">First name is required.</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-[13px] font-semibold text-ink-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="grace@…"
            className={[
              "rounded-[14px] border-[1.5px] px-4 py-3.5 text-[14.5px] text-ink placeholder:text-muted-2 focus:outline-none",
              emailError ? "border-red-400" : "border-ink/18 focus:border-ink/40",
            ].join(" ")}
          />
          {emailError && <span className="text-xs text-red-500">Enter a valid email.</span>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-[13px] font-semibold text-ink-2">I&apos;m looking to</div>
        <div className="flex flex-wrap gap-2 text-[13.5px] font-semibold">
          {LOOKING_TO.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                setLookingTo(opt);
                // Swap the budget scale with the intent so a rental inquiry
                // never carries a stale purchase price (and vice versa).
                const cfg = BUDGET_CONFIG[opt];
                setBudget(cfg.options[cfg.defaultIndex]);
              }}
              aria-pressed={lookingTo === opt}
              className={[
                "rounded-full px-5 py-2.5 transition-colors",
                lookingTo === opt
                  ? "bg-ink text-ivory"
                  : "border-[1.5px] border-ink/20 text-ink hover:bg-ink/5",
              ].join(" ")}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="budget" className="text-[13px] font-semibold text-ink-2">
            {BUDGET_CONFIG[lookingTo].label}
          </label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="rounded-[14px] border-[1.5px] border-ink/18 px-4 py-3.5 text-[14.5px] text-ink focus:border-ink/40 focus:outline-none"
          >
            {BUDGET_CONFIG[lookingTo].options.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="timeline" className="text-[13px] font-semibold text-ink-2">
            Timeline
          </label>
          <select
            id="timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="rounded-[14px] border-[1.5px] border-ink/18 px-4 py-3.5 text-[14.5px] text-ink focus:border-ink/40 focus:outline-none"
          >
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="dream" className="text-[13px] font-semibold text-ink-2">
          The dream, in a sentence <span className="font-normal text-muted-2">(optional)</span>
        </label>
        <textarea
          id="dream"
          value={dream}
          onChange={(e) => setDream(e.target.value)}
          placeholder="Ocean view, morning light, room for the dog…"
          rows={2}
          className="min-h-16 resize-y rounded-[14px] border-[1.5px] border-ink/18 px-4 py-3.5 text-[14.5px] text-ink placeholder:text-muted-2 focus:border-ink/40 focus:outline-none"
        />
      </div>

      {status === "error" && error && (
        <div className="rounded-[14px] bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gold rounded-full py-3.5 text-[15px] font-bold text-ink disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Introduce me to my agent"}
      </button>
      <div className="text-center text-xs leading-relaxed text-muted-2">
        We&apos;re paid a referral fee by the agent if you transact — never
        by you. Your details go to one agent, once, and nowhere else.
      </div>
    </form>
  );
}

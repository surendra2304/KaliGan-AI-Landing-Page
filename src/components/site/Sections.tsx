import { Reveal } from "./Reveal";
import { AGENTS, AgentGlassCard, Waveform } from "./AgentGlassCard";
import { MagneticButton } from "./MagneticButton";
import { motion } from "framer-motion";

function SectionHeading({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-[2.7rem]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-[1rem] leading-relaxed text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

const Shell = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`relative px-5 py-24 sm:px-8 sm:py-28 ${className}`}>
    <div className="mx-auto w-full max-w-7xl">{children}</div>
  </section>
);

export function TrustedBy() {
  const logos = ["Northwind", "Lumen Health", "Verdant", "Atlas Realty", "Orbit Labs", "Cedarline"];
  return (
    <Shell className="py-16 sm:py-20">
      <Reveal className="text-center">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Trusted by teams shipping faster with AI employees
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-8">
        <div className="glass-panel flex flex-wrap items-center justify-center gap-x-10 gap-y-5 rounded-3xl px-8 py-6">
          {logos.map((l) => (
            <span
              key={l}
              className="text-lg font-bold tracking-tight text-forest/45 transition-colors duration-500 hover:text-forest"
            >
              {l}
            </span>
          ))}
        </div>
      </Reveal>
    </Shell>
  );
}

export function Employees() {
  return (
    <Shell id="employees">
      <SectionHeading
        eyebrow="AI Employees"
        title="Meet the team that never clocks out"
        sub="Each KaliGan employee is trained on your business, speaks like your best rep, and works around the clock."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {AGENTS.map((a, i) => (
          <Reveal key={a.name} delay={i * 0.07}>
            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              <article className="glass-card h-full rounded-3xl p-6">
                <AgentGlassCard agent={a} />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {DESCRIPTIONS[a.name]}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/60 pt-4">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    Deploy in 4 min
                  </span>
                  <Waveform bars={4} />
                </div>
              </article>
            </motion.div>
          </Reveal>
        ))}
        <Reveal delay={0.35}>
          <div className="glass-panel flex h-full flex-col justify-between rounded-3xl bg-[var(--gradient-emerald)] p-6 text-primary-foreground">
            <h3 className="text-2xl font-bold leading-tight">Need a custom employee?</h3>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
              Describe the role in plain language. We train, test and deploy it for you.
            </p>
            <MagneticButton variant="glass" className="mt-6 self-start">
              Design your agent
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

const DESCRIPTIONS: Record<string, string> = {
  Maya: "Qualifies inbound leads, handles objections and routes hot prospects straight to your calendar.",
  Millie: "Resolves tier-1 tickets across chat, email and voice with your tone of voice and policies.",
  Penn: "Writes landing pages, follow-up sequences and product copy that stays perfectly on-brand.",
  Alex: "Books, confirms and reschedules meetings automatically — including reminders and no-show recovery.",
  Emma: "Answers every call in under one ring, greets callers by name and never puts anyone on hold.",
};

export function Solutions() {
  const items = [
    { t: "Revenue Operations", d: "Lead capture, qualification, pipeline hygiene and instant follow-up.", i: "◎" },
    { t: "Customer Experience", d: "24/7 support that resolves, escalates and learns from every conversation.", i: "◈" },
    { t: "Front Desk", d: "Never miss a call. Every caller greeted, routed and logged automatically.", i: "◐" },
    { t: "Back Office", d: "Data entry, CRM updates, invoicing and reporting on autopilot.", i: "◇" },
  ];
  const industries = ["Healthcare", "Real Estate", "Legal", "Home Services", "Finance", "Hospitality", "Automotive", "Education"];
  return (
    <Shell id="solutions">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <SectionHeading
          center={false}
          eyebrow="Business Solutions"
          title="One platform. Every department covered."
          sub="KaliGan plugs into the tools you already use and quietly removes the work nobody wants to do."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.08}>
              <div className="glass-card h-full rounded-3xl p-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--gradient-emerald)] text-lg text-primary-foreground">
                  {it.i}
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div id="industries" className="mt-20">
        <Reveal>
          <div className="glass-panel flex flex-wrap items-center justify-center gap-3 rounded-full px-6 py-5">
            {industries.map((x) => (
              <span
                key={x}
                className="rounded-full border border-white/70 bg-white/60 px-4 py-1.5 text-[0.78rem] font-semibold text-forest/80"
              >
                {x}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

export function HowItWorks() {
  const steps = [
    { n: "01", t: "Describe the role", d: "Tell KaliGan what the employee should do, in plain language." },
    { n: "02", t: "Connect your stack", d: "CRM, calendar, helpdesk, telephony — connected in a couple of clicks." },
    { n: "03", t: "Train on your voice", d: "Upload docs and past calls. Your agent adopts your tone and rules." },
    { n: "04", t: "Go live 24/7", d: "Launch, monitor and improve from one calm, quiet dashboard." },
  ];
  return (
    <Shell id="how">
      <SectionHeading
        eyebrow="How It Works"
        title="Live in an afternoon, not a quarter"
        sub="No engineers, no prompt spaghetti, no six-week onboarding."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.09}>
            <div className="glass-card relative h-full overflow-hidden rounded-3xl p-6">
              <span className="text-4xl font-black tracking-tighter text-accent/25">{s.n}</span>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

export function VoiceAndChat() {
  return (
    <Shell>
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass-card h-full rounded-[2rem] p-8">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-accent">Voice AI</span>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
              Conversations indistinguishable from your best hire
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sub-400ms latency, natural interruptions, accents and 32 languages. Every call
              transcribed, summarised and pushed to your CRM.
            </p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/70 bg-white/60 p-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--gradient-emerald)] text-primary-foreground">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15a3 3 0 003-3V6a3 3 0 10-6 0v6a3 3 0 003 3z"/><path d="M19 11a7 7 0 01-14 0H3a9 9 0 008 8.94V23h2v-3.06A9 9 0 0021 11h-2z"/></svg>
              </span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">Live call — Maya</p>
                <p className="text-[0.72rem] text-muted-foreground">"Happy to book that for Thursday at 2…"</p>
              </div>
              <Waveform bars={7} />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass-card h-full rounded-[2rem] p-8">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-accent">Chat AI</span>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
              Support that resolves instead of deflecting
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Grounded in your knowledge base, with real actions: refunds, bookings, order
              lookups and escalation with full context.
            </p>
            <div className="mt-8 space-y-3">
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-[var(--gradient-emerald)] px-4 py-3 text-sm text-primary-foreground">
                Can I move my appointment to next week?
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-bl-sm border border-white/70 bg-white/70 px-4 py-3 text-sm text-foreground">
                Done — you're rescheduled for Tuesday 10:30. Confirmation is on its way.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

export function Integrations() {
  const tools = ["Salesforce", "HubSpot", "Slack", "Zendesk", "Notion", "Twilio", "Stripe", "Google Calendar", "Zapier", "Intercom"];
  return (
    <Shell>
      <SectionHeading
        eyebrow="Integrations"
        title="Fits into the stack you already trust"
        sub="Two-way sync with 120+ tools, plus a clean API for everything else."
      />
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {tools.map((t, i) => (
          <Reveal key={t} delay={i * 0.04}>
            <div className="glass-panel grid h-24 place-items-center rounded-3xl text-sm font-semibold text-forest/75 transition-transform duration-500 hover:-translate-y-1">
              {t}
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

export function Testimonials() {
  const items = [
    { q: "We replaced an entire after-hours call center in nine days. Bookings are up 41%.", n: "Dana Whitfield", r: "COO, Cedarline Dental" },
    { q: "Maya qualifies better than most SDRs I've hired. And she never forgets a follow-up.", n: "Ibrahim Kalu", r: "VP Sales, Orbit Labs" },
    { q: "Support CSAT went from 4.1 to 4.8 in a month. Our team finally works on hard problems.", n: "Sofia Marchetti", r: "Head of CX, Lumen Health" },
  ];
  return (
    <Shell>
      <SectionHeading eyebrow="Customers" title="Quiet software. Loud results." />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.n} delay={i * 0.08}>
            <figure className="glass-card h-full rounded-3xl p-7">
              <div className="text-3xl leading-none text-accent/40">"</div>
              <blockquote className="mt-3 text-[1.02rem] font-medium leading-relaxed text-foreground">
                {t.q}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/60 pt-4">
                <p className="text-sm font-bold text-foreground">{t.n}</p>
                <p className="text-[0.75rem] text-muted-foreground">{t.r}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

export function Pricing() {
  const plans = [
    { n: "Starter", p: "$149", d: "One AI employee, 500 conversations / mo.", f: ["1 AI employee", "500 conversations", "Email + chat channels", "Standard integrations"], hi: false },
    { n: "Growth", p: "$549", d: "For teams scaling revenue and support.", f: ["5 AI employees", "5,000 conversations", "Voice + chat + SMS", "CRM two-way sync", "Priority support"], hi: true },
    { n: "Enterprise", p: "Custom", d: "Unlimited scale, bespoke training, SLAs.", f: ["Unlimited employees", "Dedicated infrastructure", "Custom voice cloning", "SOC 2 + HIPAA", "Named success lead"], hi: false },
  ];
  return (
    <Shell id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title="Salaries without the overhead"
        sub="Flat monthly pricing. Cancel anytime. No per-seat penalties for growing."
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {plans.map((pl, i) => (
          <Reveal key={pl.n} delay={i * 0.08}>
            <div
              className={`h-full rounded-[2rem] p-8 ${
                pl.hi ? "glass-card ring-2 ring-accent/30 lg:-translate-y-4" : "glass-panel"
              }`}
            >
              {pl.hi && (
                <span className="mb-4 inline-block rounded-full bg-[var(--gradient-emerald)] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold tracking-tight text-foreground">{pl.n}</h3>
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-foreground">
                {pl.p}
                {pl.p !== "Custom" && (
                  <span className="text-sm font-medium text-muted-foreground"> /mo</span>
                )}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{pl.d}</p>
              <ul className="mt-6 space-y-2.5">
                {pl.f.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/85">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-accent/15 text-accent">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <MagneticButton
                variant={pl.hi ? "primary" : "glass"}
                className="mt-8 w-full"
              >
                {pl.p === "Custom" ? "Talk to sales" : "Start free trial"}
              </MagneticButton>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

export function FAQ() {
  const qs = [
    { q: "How long does setup actually take?", a: "Most teams are live the same afternoon. Connect your tools, upload a few documents, run a test call and launch." },
    { q: "Will callers know they're speaking to AI?", a: "You choose. KaliGan can disclose it upfront or simply sound like a warm, capable teammate — latency and phrasing are natural either way." },
    { q: "What happens when an agent doesn't know something?", a: "It escalates to a human with the full transcript, context and suggested next step. Nothing is silently guessed." },
    { q: "Is my data used to train shared models?", a: "Never. Your data stays isolated to your workspace, encrypted at rest and in transit." },
    { q: "Can I keep my existing phone number?", a: "Yes. Port your number or forward calls — KaliGan works alongside your current telephony." },
  ];
  return (
    <Shell>
      <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {qs.map((item, i) => (
          <Reveal key={item.q} delay={i * 0.06}>
            <details className="glass-panel group rounded-2xl px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[0.98rem] font-semibold text-foreground">
                {item.q}
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/70 bg-white/70 text-accent transition-transform duration-500 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

export function FinalCTA() {
  return (
    <Shell id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--gradient-emerald)] px-8 py-20 text-center">
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[oklch(0.79_0.09_85/0.18)] blur-3xl" />
          <h2 className="relative text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
            Hire your first AI employee today
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-[1rem] leading-relaxed text-primary-foreground/80">
            Fourteen days free. No card required. Cancel with one click — though nobody has yet.
          </p>
          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <MagneticButton size="lg" variant="glass">Get Started</MagneticButton>
            <MagneticButton size="lg" variant="glass">Book a demo</MagneticButton>
          </div>
        </div>
      </Reveal>
    </Shell>
  );
}

export function Footer() {
  const cols = [
    { t: "Product", l: ["AI Employees", "Voice AI", "Chat AI", "Integrations", "Pricing"] },
    { t: "Industries", l: ["Healthcare", "Real Estate", "Legal", "Home Services", "Finance"] },
    { t: "Company", l: ["About", "Careers", "Blog", "Contact", "Security"] },
  ];
  return (
    <footer className="relative px-5 pb-10 sm:px-8">
      <div className="glass-panel mx-auto w-full max-w-7xl rounded-[2rem] px-8 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-[var(--gradient-emerald)] text-xs font-black text-primary-foreground">
                K
              </span>
              <span className="text-[0.95rem] font-extrabold tracking-tight text-foreground">
                KaliGan<span className="text-accent"> AI</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI employees for businesses that refuse to miss another call, lead or customer.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent">{c.t}</p>
              <ul className="mt-4 space-y-2.5">
                {c.l.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-muted-foreground transition-colors hover:text-forest">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/60 pt-6">
          <p className="text-[0.75rem] text-muted-foreground">
            © {new Date().getFullYear()} KaliGan AI. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-muted-foreground">Built for teams that never sleep.</p>
        </div>
      </div>
    </footer>
  );
}

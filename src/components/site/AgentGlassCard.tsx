import { motion } from "framer-motion";

export type Agent = {
  name: string;
  role: string;
  initials: string;
  tint: string;
};

export function AgentGlassCard({
  agent,
  compact = false,
}: {
  agent: Agent;
  compact?: boolean;
}) {
  return (
    <div
      className={`glass-card flex items-center gap-3 rounded-2xl ${
        compact ? "px-3.5 py-3" : "px-4 py-3.5"
      }`}
    >
      <div
        className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full text-[0.7rem] font-bold text-primary-foreground"
        style={{ background: agent.tint }}
      >
        {agent.initials}
        <span className="animate-pulse-dot absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-accent" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold leading-tight text-foreground">{agent.name}</p>
        <p className="truncate text-[0.7rem] font-medium leading-tight text-muted-foreground">
          {agent.role}
        </p>
      </div>
      <Waveform />
    </div>
  );
}

export function Waveform({ bars = 5 }: { bars?: number }) {
  return (
    <div className="ml-1 flex h-6 items-center gap-[3px]">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-accent/80"
          style={{ height: 18 }}
          animate={{ scaleY: [0.3, 1, 0.45, 0.85, 0.3] }}
          transition={{
            duration: 1.6 + i * 0.18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.12,
          }}
        />
      ))}
    </div>
  );
}

export const AGENTS: Agent[] = [
  {
    name: "Maya",
    role: "AI Sales Agent",
    initials: "MA",
    tint: "linear-gradient(135deg, oklch(0.396 0.075 168), oklch(0.556 0.11 160))",
  },
  {
    name: "Millie",
    role: "Customer Support",
    initials: "MI",
    tint: "linear-gradient(135deg, oklch(0.48 0.09 150), oklch(0.62 0.1 145))",
  },
  {
    name: "Penn",
    role: "Content Writer",
    initials: "PE",
    tint: "linear-gradient(135deg, oklch(0.55 0.08 110), oklch(0.72 0.09 95))",
  },
  {
    name: "Alex",
    role: "Appointment Setter",
    initials: "AL",
    tint: "linear-gradient(135deg, oklch(0.42 0.07 175), oklch(0.6 0.1 170))",
  },
  {
    name: "Emma",
    role: "Receptionist",
    initials: "EM",
    tint: "linear-gradient(135deg, oklch(0.5 0.06 140), oklch(0.68 0.08 120))",
  },
];

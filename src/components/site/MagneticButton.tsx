import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

type Ripple = { id: number; x: number; y: number };

export function MagneticButton({
  children,
  variant = "primary",
  className = "",
  size = "md",
}: {
  children: ReactNode;
  variant?: "primary" | "glass";
  className?: string;
  size?: "md" | "lg";
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (r.left + r.width / 2)) * 0.25,
      y: (e.clientY - (r.top + r.height / 2)) * 0.35,
    });
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const id = Date.now();
    setRipples((p) => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRipples((p) => p.filter((v) => v.id !== id)), 700);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      onClick={onClick}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      whileTap={{ scale: 0.96 }}
      className={`relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight ${
        size === "lg" ? "px-8 py-4 text-[0.98rem]" : "px-6 py-3 text-sm"
      } ${variant === "primary" ? "btn-primary" : "btn-ghost-glass"} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          className="pointer-events-none absolute -z-0 rounded-full bg-white/40"
          style={{ left: r.x, top: r.y }}
          initial={{ width: 0, height: 0, opacity: 0.7, x: "-50%", y: "-50%" }}
          animate={{ width: 420, height: 420, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      ))}
    </motion.button>
  );
}

export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* soft olive/emerald blooms */}
      <div className="animate-drift absolute -left-40 top-[-10%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,oklch(0.556_0.11_160/0.20),transparent_65%)] blur-3xl" />
      <div className="animate-float-slower absolute right-[-18%] top-[8%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,oklch(0.79_0.09_85/0.18),transparent_65%)] blur-3xl" />
      <div className="animate-drift absolute bottom-[-25%] left-[25%] h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,oklch(0.396_0.075_168/0.14),transparent_65%)] blur-3xl [animation-duration:32s]" />

      {/* light rays */}
      <div className="animate-ray absolute -top-1/3 left-1/4 h-[160%] w-40 bg-[linear-gradient(to_bottom,transparent,oklch(1_0_0/0.75),transparent)] blur-2xl" />
      <div className="animate-ray absolute -top-1/3 left-2/3 h-[160%] w-24 bg-[linear-gradient(to_bottom,transparent,oklch(1_0_0/0.6),transparent)] blur-2xl [animation-delay:-4s]" />

      {/* geometry */}
      <div className="animate-float-slow absolute left-[8%] top-[62%] h-24 w-24 rotate-12 rounded-3xl border border-white/70 bg-white/25 backdrop-blur-sm" />
      <div className="animate-float-slower absolute right-[6%] top-[22%] h-16 w-16 rounded-full border border-white/70 bg-white/20 backdrop-blur-sm" />

      {/* glowing dots */}
      {DOTS.map((d, i) => (
        <span
          key={i}
          className="animate-float-slow absolute rounded-full bg-[oklch(0.556_0.11_160/0.55)]"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.dur}s`,
            boxShadow: "0 0 12px oklch(0.556 0.11 160 / 0.6)",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(oklch(0.396_0.075_168/0.055)_1px,transparent_1px)] [background-size:26px_26px] opacity-60" />
    </div>
  );
}

const DOTS = [
  { left: "12%", top: "18%", size: 5, delay: 0, dur: 8 },
  { left: "28%", top: "78%", size: 4, delay: 1.4, dur: 10 },
  { left: "46%", top: "12%", size: 3, delay: 2.2, dur: 9 },
  { left: "62%", top: "68%", size: 5, delay: 0.8, dur: 11 },
  { left: "78%", top: "34%", size: 3, delay: 3, dur: 8.5 },
  { left: "88%", top: "72%", size: 4, delay: 1.9, dur: 12 },
  { left: "36%", top: "44%", size: 3, delay: 2.6, dur: 9.5 },
  { left: "70%", top: "8%", size: 4, delay: 0.4, dur: 10.5 },
];

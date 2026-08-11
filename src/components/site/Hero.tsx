import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { AmbientBackground } from "./AmbientBackground";

import { MagneticButton } from "./MagneticButton";

const TRUST = [
  "No Coding Required",
  "Setup in Minutes",
  "Works 24/7",
  "Human-like Conversations",
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.5 });

  const videoX = useTransform(sx, [-1, 1], [-18, 18]);
  const videoY = useTransform(sy, [-1, 1], [-14, 14]);
  const videoRotY = useTransform(sx, [-1, 1], [6, -6]);
  const videoRotX = useTransform(sy, [-1, 1], [-4, 4]);



  const bgX = useTransform(sx, [-1, 1], [12, -12]);
  const bgY = useTransform(sy, [-1, 1], [10, -10]);
  const lightX = useTransform(sx, [-1, 1], ["25%", "75%"]);
  const lightY = useTransform(sy, [-1, 1], ["25%", "75%"]);

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
        my.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pb-20 lg:pb-0 lg:pt-24"
    >
      {/* CINEMATIC HERO BACKGROUND VIDEO */}
      <motion.div
        aria-hidden
        style={{ x: bgX, y: bgY }}
        className="pointer-events-none absolute inset-[-4%] z-0 will-change-transform"
      >
        <video
          className="h-full w-full object-cover"
          src="/videos/hero-animation.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          tabIndex={-1}
        />
      </motion.div>

      {/* premium brand overlay — keeps everything readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(100deg,oklch(0.972_0.012_95)_0%,oklch(0.972_0.012_95)_40%,oklch(0.972_0.012_95/0.72)_50%,oklch(0.972_0.012_95/0.3)_64%,oklch(0.972_0.012_95/0.12)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_70%_45%,transparent_22%,oklch(0.983_0.008_95/0.3)_66%,oklch(0.972_0.012_95/0.8)_100%)]"

      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_20%_20%,oklch(0.556_0.11_160/0.10),transparent_55%)]"
      />

      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-[-6%] z-[2] opacity-70">
        <AmbientBackground />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute z-[2] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(1_0_0/0.55),transparent_62%)] blur-2xl"
        style={{ left: lightX, top: lightY }}
      />


      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[45%_55%] lg:gap-0 lg:px-8">
        {/* LEFT — always visible, always clickable */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 max-w-xl"
        >
          <div className="glass-panel inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4">
            <span className="rounded-full bg-[var(--gradient-emerald)] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-primary-foreground">
              New
            </span>
            <span className="text-[0.78rem] font-medium text-muted-foreground">
              KaliGan Voice v3 — now live in 32 languages
            </span>
          </div>

          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.06] tracking-[-0.04em] text-foreground sm:text-6xl xl:text-[4.35rem]">
            AI Employees
            <span className="block pb-[0.09em] text-gradient-emerald">Your Digital Team</span>
            <span className="block text-forest/85">That Never Sleeps</span>
          </h1>


          <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-muted-foreground">
            Deploy AI employees that answer calls, qualify leads, book meetings, support
            customers and automate business operations 24/7.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton size="lg">
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </MagneticButton>
            <MagneticButton size="lg" variant="glass">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--gradient-emerald)]">
                <svg width="9" height="9" viewBox="0 0 12 12" fill="white">
                  <path d="M3 1.5v9l7-4.5-7-4.5z" />
                </svg>
              </span>
              Watch Demo
            </MagneticButton>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
            {TRUST.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.09, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 text-[0.8rem] font-medium text-muted-foreground"
              >
                <span className="grid h-4 w-4 place-items-center rounded-full bg-accent/15 text-accent">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                {t}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT — cinematic blended hero scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 [perspective:1600px]"
        >
          <motion.div
            style={{ x: videoX, y: videoY, rotateX: videoRotX, rotateY: videoRotY }}
            className="animate-float-slow relative will-change-transform"
          >
            {/* volumetric light around the subject already rendered by the background video */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-24 rounded-full bg-[radial-gradient(circle_at_55%_45%,oklch(0.556_0.11_160/0.18),transparent_68%)] blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-16 rounded-full bg-[radial-gradient(circle_at_45%_25%,oklch(0.79_0.09_85/0.14),transparent_65%)] blur-3xl"
            />

            {/* spacer preserving the original hero scene footprint */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] max-h-[82svh] lg:max-w-none">
              <div
                aria-hidden
                className="animate-ray pointer-events-none absolute -top-1/4 left-[38%] h-[150%] w-28 rotate-12 bg-[linear-gradient(to_bottom,transparent,oklch(1_0_0/0.4),transparent)] blur-2xl"
              />
            </div>
          </motion.div>




          {/* blurred foreground dust for depth */}
          <div aria-hidden className="pointer-events-none absolute inset-0 z-30">
            {[
              { l: "18%", t: "22%", s: 10, d: 0 },
              { l: "72%", t: "14%", s: 7, d: 1.6 },
              { l: "58%", t: "78%", s: 12, d: 2.4 },
              { l: "30%", t: "62%", s: 8, d: 0.9 },
            ].map((p, i) => (
              <span
                key={i}
                className="animate-float-slow absolute rounded-full bg-white/60 blur-[3px]"
                style={{
                  left: p.l,
                  top: p.t,
                  width: p.s,
                  height: p.s,
                  animationDelay: `${p.d}s`,
                  animationDuration: `${8 + i}s`,
                }}
              />
            ))}
          </div>
        </motion.div>

      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,oklch(0.972_0.012_95),transparent)]" />
    </section>
  );
}

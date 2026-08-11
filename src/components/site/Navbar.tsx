import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

const LINKS = [
  "Home",
  "Solutions",
  "AI Employees",
  "Industries",
  "Pricing",
  "About",
  "Contact",
];

const HREFS: Record<string, string> = {
  Home: "#top",
  Solutions: "#solutions",
  "AI Employees": "#employees",
  Industries: "#industries",
  Pricing: "#pricing",
  About: "#how",
  Contact: "#contact",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6"
    >
      <nav
        className={`glass-panel mx-auto flex max-w-6xl items-center gap-4 rounded-full py-2.5 pl-4 pr-2.5 transition-all duration-500 sm:pl-6 ${
          scrolled ? "shadow-float" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[var(--gradient-emerald)] text-xs font-black text-primary-foreground">
            K
          </span>
          <span className="text-[0.95rem] font-extrabold tracking-tight text-foreground">
            KaliGan<span className="text-accent"> AI</span>
          </span>
        </a>

        <ul className="mx-auto hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l}>
              <a
                href={HREFS[l]}
                className="relative rounded-full px-3.5 py-2 text-[0.82rem] font-medium text-muted-foreground transition-colors duration-300 hover:bg-white/70 hover:text-forest"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            href="#contact"
            className="hidden rounded-full px-4 py-2 text-[0.82rem] font-semibold text-forest transition-colors hover:bg-white/70 sm:block"
          >
            Login
          </a>
          <MagneticButton className="!px-5 !py-2.5 text-[0.82rem]">Get Started</MagneticButton>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/70 bg-white/60 lg:hidden"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-[1.5px] w-4 bg-forest" />
              <span className="block h-[1.5px] w-4 bg-forest" />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel mx-auto mt-2 grid max-w-6xl gap-1 rounded-3xl p-3 lg:hidden"
        >
          {LINKS.map((l) => (
            <li key={l}>
              <a
                href={HREFS[l]}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-2.5 text-sm font-medium text-forest hover:bg-white/70"
              >
                {l}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}

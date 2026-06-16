import { motion } from "framer-motion";
import { SectionHeader, fade } from "./SectionHeader";

export function About() {
  return (
    <motion.div {...fade} className="space-y-6">
      <SectionHeader kicker="About Me" title="Hello, I'm Jayant." />
      <p className="font-serif text-lg leading-relaxed text-[var(--theme-text)] opacity-95 italic">
        A Computer Science Engineering student passionate about AI, Full Stack Development,
        Problem Solving and Software Engineering. I build polished interfaces and ship resilient
        systems — currently sharpening my craft at Chitkara University.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-5">
          <h3 className="font-display text-sm tracking-[0.2em] text-[var(--theme-accent)] mb-3">CURRENT FOCUS</h3>
          <ul className="space-y-2 text-sm">
            {["Data Structures & Algorithms", "AI & Machine Learning", "Full Stack Development", "System Design"].map(
              (f) => (
                <li key={f} className="flex items-center gap-2 text-[var(--theme-text)]">
                  <span className="w-1.5 h-1.5 bg-gold rotate-45" />
                  {f}
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="rounded-lg border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-5">
          <h3 className="font-display text-sm tracking-[0.2em] text-[var(--theme-accent)] mb-3">EDUCATION</h3>
          <p className="text-sm text-[var(--theme-text)] font-semibold">
            B.Tech, Computer Science Engineering
          </p>
          <p className="text-xs text-[var(--theme-text-muted)] mt-1">Chitkara University · 2024 – 2028 · CGPA 8.78</p>
          <p className="text-xs text-[var(--theme-accent)] mt-3 font-semibold">Relevant Coursework</p>
          <p className="text-xs text-[var(--theme-text)] opacity-90 mt-1">
            OOPs · DBMS · Operating Systems · Data Structures · Computer Networks · AI/ML
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { v: "110+", l: "LeetCode" },
          { v: "8.78", l: "CGPA" },
          { v: "3rd", l: "IGNITE Hack" },
        ].map((s) => (
          <div key={s.l} className="text-center rounded-lg border border-gold/40 bg-gradient-to-br from-[#800020] to-[#4a0010] text-parchment p-4 glow-gold">
            <div className="font-display text-2xl text-gold">{s.v}</div>
            <div className="text-[0.65rem] tracking-[0.2em] uppercase mt-1 opacity-80">{s.l}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

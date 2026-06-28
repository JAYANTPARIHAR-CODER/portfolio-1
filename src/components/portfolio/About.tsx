import { motion } from "framer-motion";
import { Github } from "lucide-react";
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

      {/* Education & Core Focus */}
      <div className="rounded-lg border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-6 space-y-4">
        <h3 className="font-display text-sm tracking-[0.2em] text-[var(--theme-accent)] uppercase border-b border-gold/25 pb-2">
          EDUCATION & CORE FOCUS
        </h3>
        <ul className="space-y-3 text-sm text-[var(--theme-text)]">
          <li className="flex items-start gap-2.5">
            <span className="text-[var(--theme-accent)] mt-0.5">✿</span>
            <div>
              <span className="font-bold">Degree:</span> B.Tech in Computer Science Engineering (2024 – 2028) | CGPA: 8.78
              <div className="text-xs text-[var(--theme-text-muted)] mt-0.5">Chitkara University</div>
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[var(--theme-accent)] mt-0.5">✿</span>
            <div>
              <span className="font-bold">Relevant Coursework:</span> OOPs, DBMS, Operating Systems, Data Structures, Computer Networks, AI/ML
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[var(--theme-accent)] mt-0.5">✿</span>
            <div>
              <span className="font-bold">Core Focus:</span> Data Structures & Algorithms, AI & Machine Learning, Full Stack Development, System Design
            </div>
          </li>
        </ul>
      </div>

      {/* Coding Metrics & Hubs */}
      <div className="rounded-lg border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-6 space-y-4">
        <h3 className="font-display text-sm tracking-[0.2em] text-[var(--theme-accent)] uppercase border-b border-gold/25 pb-2">
          CODING METRICS & HUBS
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 rounded-lg border border-gold/20 bg-[var(--theme-bg)]/40">
            <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-[var(--theme-accent)]">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--theme-text-muted)] font-display">GITHUB REPOSITORY</div>
              <a href="https://github.com/JAYANTPARIHAR-CODER" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:text-[var(--theme-accent)] underline decoration-gold/40 decoration-dotted underline-offset-4 transition-colors">
                github.com/JAYANTPARIHAR-CODER
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg border border-gold/20 bg-[var(--theme-bg)]/40">
            <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-[var(--theme-accent)] font-display font-semibold text-sm">
              LC
            </div>
            <div>
              <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--theme-text-muted)] font-display">LEETCODE ALGORITHMS</div>
              <a href="https://leetcode.com/Jayant" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:text-[var(--theme-accent)] underline decoration-gold/40 decoration-dotted underline-offset-4 transition-colors">
                leetcode.com/Jayant
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="rounded-lg border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-6 space-y-4">
        <h3 className="font-display text-sm tracking-[0.2em] text-[var(--theme-accent)] uppercase border-b border-gold/25 pb-2">
          TECHNICAL SKILLS
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--theme-text-muted)] mb-2 font-display font-semibold">Languages</h4>
              <div className="flex flex-wrap gap-1.5">
                {["Java", "C++", "SQL", "JavaScript", "HTML", "CSS"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded border border-gold/20 bg-[var(--theme-bg)]/50 text-[var(--theme-text)]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--theme-text-muted)] mb-2 font-display font-semibold">Linux & Systems</h4>
              <div className="flex flex-wrap gap-1.5">
                {["LVM", "Network Security", "User Management"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded border border-gold/20 bg-[var(--theme-bg)]/50 text-[var(--theme-text)]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--theme-text-muted)] mb-2 font-display font-semibold">Tools & Frameworks</h4>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Node.js", "Git", "GitHub", "Postman", "MySQL", "Linux CLI"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded border border-gold/20 bg-[var(--theme-bg)]/50 text-[var(--theme-text)]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-[var(--theme-text-muted)] mb-2 font-display font-semibold">Core CS</h4>
              <div className="flex flex-wrap gap-1.5">
                {["Data Structures", "Algorithms", "OOPs", "Operating Systems", "DBMS"].map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded border border-gold/20 bg-[var(--theme-bg)]/50 text-[var(--theme-text)]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
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

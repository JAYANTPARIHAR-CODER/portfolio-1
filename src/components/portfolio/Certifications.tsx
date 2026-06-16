import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeader, fade } from "./SectionHeader";

const certs = [
  { name: "Red Hat System Administration II (RH134)", issuer: "Red Hat", date: "2026", desc: "LVM storage, firewall-cmd, SELinux protocols." },
  { name: "Red Hat System Administration I (RH124)", issuer: "Red Hat", date: "2026", desc: "Command-line automation, system boot, Vim workflows." },
  { name: "Deloitte Australia — Data Analytics Job Simulation", issuer: "Forage / Deloitte", date: "2025", desc: "EDA, dashboards, business intelligence client work." },
  { name: "Web Development & DSA", issuer: "Self-led + Coursework", date: "Ongoing", desc: "React, Node, MySQL · 110+ LeetCode solutions." },
];

export function Certifications() {
  return (
    <motion.div {...fade} className="space-y-6">
      <SectionHeader kicker="Credentials" title="Certifications & Medallions" />
      <ol className="relative border-l-2 border-[var(--theme-border)]/40 ml-3 space-y-6 pl-6">
        {certs.map((c, i) => (
          <motion.li
            key={c.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[34px] top-1 w-6 h-6 rounded-full bg-[var(--theme-accent)] border-2 border-gold flex items-center justify-center glow-gold">
              <Award className="w-3 h-3 text-gold" />
            </span>
            <div className="rounded-lg border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-4">
              <h3 className="font-display text-base text-[var(--theme-accent)]">{c.name}</h3>
              <p className="text-xs text-[var(--theme-text-muted)] mt-0.5">
                {c.issuer} · {c.date}
              </p>
              <p className="text-sm text-[var(--theme-text)] opacity-95 mt-2 font-serif italic">{c.desc}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}

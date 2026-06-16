import { motion } from "framer-motion";
import { SectionHeader, fade } from "./SectionHeader";

const skillGroups: Record<string, string[]> = {
  Languages: ["Java", "C++", "SQL", "JavaScript", "HTML", "CSS"],
  "Linux & Systems": ["LVM", "Network Security", "User Management"],
  "Tools & Frameworks": ["React", "Node.js", "Git", "GitHub", "Postman", "MySQL", "Linux CLI"],
  "Core CS": ["Data Structures", "Algorithms", "OOPs", "Operating Systems", "DBMS"],
};

export function Skills() {
  return (
    <motion.div {...fade} className="space-y-6">
      <SectionHeader kicker="Toolkit" title="Technical Skills" />
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(skillGroups).map(([group, items], gi) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: gi * 0.08 }}
            className="rounded-lg border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-4"
          >
            <h3 className="font-display text-xs tracking-[0.25em] text-[var(--theme-accent)] mb-3">{group.toUpperCase()}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: gi * 0.08 + i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3 py-1 text-xs rounded-full border border-[var(--theme-border)]/60 bg-gradient-to-br from-[var(--theme-bg)] to-gold/5 text-[var(--theme-text)] shadow-sm hover:shadow-[0_0_15px_var(--color-gold)] transition"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

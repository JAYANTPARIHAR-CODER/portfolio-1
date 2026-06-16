import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeader, fade } from "./SectionHeader";

const projects = [
  {
    name: "SupplyAI",
    desc: "AI-powered B2B supplier discovery platform with intelligent search and recommendation systems.",
    features: ["AI chatbot", "Supplier recommendation", "Smart search", "Responsive UI"],
    tech: ["React", "Node.js", "AI/ML", "Tailwind"],
    stats: { users: "Top 20/50", build: "2025" },
    demo: "#",
    github: "https://github.com/JAYANTPARIHAR-CODER/Suraksalink-project",
  },
  {
    name: "IndiWealth — IGNITE Hackathon",
    desc: "Financial dashboard built at Panjab University IGNITE Hackathon — interactive data visualization and responsive UI. Finalist, 3rd Rank / 100+ teams.",
    features: ["Financial dashboards", "Data visualization", "Responsive UI", "Team-led frontend"],
    tech: ["React", "JavaScript", "Charting", "CSS"],
    stats: { users: "3rd / 100+", build: "2026" },
    demo: "#",
    github: "https://github.com/JayantParihar",
  },
  {
    name: "F1 Web Platform",
    desc: "Responsive F1-themed frontend with modern UI/UX, interactive components and optimized performance.",
    features: ["Modern UI/UX", "Interactive components", "Perf optimized", "Vercel deploy"],
    tech: ["React", "JavaScript", "Vercel"],
    stats: { users: "Live", build: "2025" },
    demo: "https://original-f1-new.vercel.app/",
    github: "https://github.com/JAYANTPARIHAR-CODER/original-f1-new",
  },
  {
    name: "Saini Sweets",
    desc: "A premium e-commerce website for a traditional Indian sweet shop in Hisar, featuring online ordering, menu browsing, and product showcase.",
    features: ["Online ordering", "Menu showcase", "Responsive design", "Product gallery"],
    tech: ["React", "Tailwind CSS", "Vercel"],
    stats: { users: "Live", build: "2025" },
    demo: "https://saini-sweets-u17h.vercel.app/",
    github: "https://github.com/JAYANTPARIHAR-CODER/saini-sweets",
  },
  {
    name: "E-Commerce Platform",
    desc: "A high-performance online shopping platform featuring real-time state management and optimized rendering workflows.",
    features: ["React Hooks optimization", "Context API state manager", "15% faster page load speed", "Component modularity"],
    tech: ["React", "JavaScript", "Tailwind CSS"],
    stats: { users: "Core Engine", build: "2024" },
    demo: "#",
    github: "https://github.com/JayantParihar",
  },
];

export function Projects() {
  return (
    <motion.div {...fade} className="space-y-6">
      <SectionHeader kicker="Featured Work" title="Selected Projects" />
      <div className="space-y-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-xl border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-5 transition-all hover:border-[var(--theme-accent)] hover:shadow-[0_0_30px_oklch(0.78_0.13_85/0.35)]"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/0 via-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition" />
            <div className="relative flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl text-[var(--theme-accent)]">{p.name}</h3>
                <p className="text-xs text-[var(--theme-text-muted)] mt-0.5">
                  {p.stats.users} · {p.stats.build}
                </p>
              </div>
              <div className="flex gap-2">
                <a href={p.demo} className="text-xs flex items-center gap-1 px-3 py-1.5 rounded-md bg-[var(--theme-accent)] text-[var(--theme-bg)] hover:bg-[var(--theme-accent-hover)] font-semibold transition">
                  <ExternalLink className="w-3 h-3" /> Live Demo
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className="text-xs flex items-center gap-1 px-3 py-1.5 rounded-md border border-[var(--theme-accent)] text-[var(--theme-accent)] hover:bg-[var(--theme-accent)] hover:text-[var(--theme-bg)] transition">
                  <Github className="w-3 h-3" /> GitHub
                </a>
              </div>
            </div>
            <p className="relative mt-3 text-sm text-[var(--theme-text)] opacity-95 font-serif">{p.desc}</p>
            <ul className="relative mt-3 grid grid-cols-2 gap-1 text-xs text-[var(--theme-text)] opacity-90">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gold rotate-45" /> {f}
                </li>
              ))}
            </ul>
            <div className="relative mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="text-[0.65rem] tracking-wider px-2 py-1 rounded border border-[var(--theme-border)]/60 text-[var(--theme-accent)] bg-gold/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

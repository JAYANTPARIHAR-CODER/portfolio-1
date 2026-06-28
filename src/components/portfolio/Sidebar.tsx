import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Code2, Download } from "lucide-react";
import profile from "@/assets/jayant-profile.asset.json";
import resume from "@/assets/resume.asset.json";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:jayantparihar170@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jayant-parihar-079158322/" },
  { icon: Github, label: "GitHub", href: "https://github.com/JAYANTPARIHAR-CODER" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/Jayant" },
];

export function Sidebar({ theme = "dark" }: { theme?: "light" | "dark" }) {
  return (
    <aside className="flex flex-col items-center text-center gap-6 p-8 lg:border-r border-gold/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold via-gold-soft to-gold blur-md opacity-60" />
        <div className="relative w-48 h-56 rounded-t-full overflow-hidden ornate-frame bg-maroon">
          <img src={profile.url} alt="Jayant Parihar" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gold glow-gold" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 className={`font-display text-3xl leading-tight uppercase transition-all duration-300 ${
          theme === "dark" ? "text-gold-gradient" : "text-[var(--theme-accent)]"
        }`}>
          JAYANT<br />PARIHAR.
        </h1>
        <p className="mt-2 text-xs tracking-[0.25em] uppercase text-[var(--theme-text-muted)]">
          Computer Science Engineer
        </p>
      </motion.div>

      {/* Ornate wax seal Resume button */}
      <motion.a
        href={resume.url}
        download="Jayant_Parihar_Resume.pdf"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="group relative flex flex-col items-center gap-1.5 mt-2 cursor-pointer"
      >
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#800020] to-[#4a0010] border-2 border-gold flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.5)] glow-gold transition-all group-hover:shadow-[0_0_30px_var(--color-gold)]">
          {/* Inner ornate ring for wax seal feel */}
          <div className="absolute inset-1.5 rounded-full border border-gold/40 flex items-center justify-center">
            <Download className="w-6 h-6 text-gold" />
          </div>
        </div>
        <span className="text-[0.7rem] tracking-[0.3em] text-[var(--theme-accent)] font-display font-semibold transition-all">RESUME</span>
      </motion.a>

      <div className="w-full mt-6 pt-6 border-t border-gold/30">
        <h3 className="text-xs tracking-[0.3em] text-[var(--theme-accent)] font-display mb-4">CONTACT</h3>
        <ul className="space-y-3 text-sm text-[var(--theme-text)]">
          <li className="flex items-center gap-3 justify-center lg:justify-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" />
            <a href="mailto:jayantparihar170@gmail.com" className="hover:text-[var(--theme-accent-hover)] transition-colors">
              jayantparihar170@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-3 justify-center lg:justify-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" />
            <a href="https://www.linkedin.com/in/jayant-parihar-079158322/" target="_blank" rel="noreferrer" className="hover:text-[var(--theme-accent-hover)] transition-colors text-[11px] xl:text-xs">
              linkedin.com/in/jayant-parihar-079158322
            </a>
          </li>
          <li className="flex items-center gap-3 justify-center lg:justify-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" />
            <a href="https://github.com/JAYANTPARIHAR-CODER" target="_blank" rel="noreferrer" className="hover:text-[var(--theme-accent-hover)] transition-colors">
              github.com/JAYANTPARIHAR-CODER
            </a>
          </li>
        </ul>

        <div className="flex justify-center gap-3 mt-6">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full border border-[var(--theme-border)]/50 flex items-center justify-center text-[var(--theme-accent)] hover:bg-[var(--theme-accent)] hover:text-[var(--theme-bg)] transition-all hover:shadow-[0_0_20px_var(--color-gold)]"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { Particles } from "@/components/portfolio/Particles";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { About, Projects, Skills, Certifications, Contact } from "@/components/portfolio/sections";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jayant Parihar — Computer Science Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Jayant Parihar — Computer Science Engineering student building AI, full-stack and systems projects.",
      },
      { property: "og:title", content: "Jayant Parihar — Computer Science Engineer" },
      {
        property: "og:description",
        content: "Royal-themed portfolio: projects, skills, certifications and contact.",
      },
    ],
  }),
  component: Portfolio,
});

const tabs = [
  { id: "about", label: "About", Component: About },
  { id: "projects", label: "Projects", Component: Projects },
  { id: "skills", label: "Skills", Component: Skills },
  { id: "certifications", label: "Certifications", Component: Certifications },
  { id: "contact", label: "Contact", Component: Contact },
] as const;

import { Sun, Moon } from "lucide-react";

const ornateBorderH = "data:image/svg+xml;utf8," + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24">
    <path d="M 4 24 C 4 12, 10 8, 16 4 C 22 8, 28 12, 28 24 Z" fill="#2b4c7e" stroke="#d4af37" stroke-width="1.5"/>
    <circle cx="16" cy="4" r="2.5" fill="#f59e0b"/>
    <circle cx="16" cy="4" r="1" fill="#fff"/>
    <path d="M 0 16 L 2 18 L 0 20 L -2 18 Z" fill="#d4af37"/>
    <path d="M 32 16 L 34 18 L 32 20 L 30 18 Z" fill="#d4af37"/>
    <circle cx="16" cy="18" r="1.5" fill="#d4af37"/>
  </svg>
`);

const ornateBorderV = "data:image/svg+xml;utf8," + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32">
    <path d="M 24 4 C 12 4, 8 10, 4 16 C 8 22, 12 28, 24 28 Z" fill="#2b4c7e" stroke="#d4af37" stroke-width="1.5"/>
    <circle cx="4" cy="16" r="2.5" fill="#f59e0b"/>
    <circle cx="4" cy="16" r="1" fill="#fff"/>
    <path d="M 16 0 L 18 2 L 20 0 L 18 -2 Z" fill="#d4af37"/>
    <path d="M 16 32 L 18 34 L 20 32 L 18 30 Z" fill="#d4af37"/>
    <circle cx="18" cy="16" r="1.5" fill="#d4af37"/>
  </svg>
`);

const ornateCorner = "data:image/svg+xml;utf8," + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <rect x="0" y="0" width="24" height="24" fill="none"/>
    <circle cx="12" cy="12" r="8" fill="#2b4c7e" stroke="#d4af37" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="3" fill="#f59e0b"/>
    <circle cx="12" cy="12" r="1" fill="#fff"/>
    <line x1="0" y1="0" x2="6" y2="6" stroke="#d4af37" stroke-width="1"/>
    <line x1="24" y1="0" x2="18" y2="6" stroke="#d4af37" stroke-width="1"/>
    <line x1="0" y1="24" x2="6" y2="18" stroke="#d4af37" stroke-width="1"/>
    <line x1="24" y1="24" x2="18" y2="18" stroke="#d4af37" stroke-width="1"/>
  </svg>
`);

function Portfolio() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("about");
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const Active = tabs.find((t) => t.id === active)!.Component;

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-maroon-deep">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      <Toaster theme="dark" position="top-center" />
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-gold) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <Particles />

      <main className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 min-h-screen">
        {/* Ornate outer frame */}
        <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-gold via-gold-soft to-gold/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
          <div className="rounded-2xl bg-maroon-deep p-3 md:p-5">
            {/* New Ornate Border Container */}
            <div className={`relative p-6 rounded-xl overflow-hidden border border-gold/40 theme-transition ${theme === 'dark' ? 'theme-dark bg-[#120404]' : 'theme-light bg-[#F4EFE6]'}`}>
              {/* Ornate Border Strips */}
              {/* Top border */}
              <div className="absolute top-0 left-6 right-6 h-6 bg-repeat-x pointer-events-none" style={{ backgroundImage: `url(${ornateBorderH})` }} />
              {/* Bottom border */}
              <div className="absolute bottom-0 left-6 right-6 h-6 bg-repeat-x scale-y-[-1] pointer-events-none" style={{ backgroundImage: `url(${ornateBorderH})` }} />
              {/* Left border */}
              <div className="absolute left-0 top-6 bottom-6 w-6 bg-repeat-y pointer-events-none" style={{ backgroundImage: `url(${ornateBorderV})` }} />
              {/* Right border */}
              <div className="absolute right-0 top-6 bottom-6 w-6 bg-repeat-y scale-x-[-1] pointer-events-none" style={{ backgroundImage: `url(${ornateBorderV})` }} />
              
              {/* Corners */}
              <div className="absolute top-0 left-0 w-6 h-6 pointer-events-none" style={{ backgroundImage: `url(${ornateCorner})` }} />
              <div className="absolute top-0 right-0 w-6 h-6 pointer-events-none" style={{ backgroundImage: `url(${ornateCorner})` }} />
              <div className="absolute bottom-0 left-0 w-6 h-6 pointer-events-none" style={{ backgroundImage: `url(${ornateCorner})` }} />
              <div className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none" style={{ backgroundImage: `url(${ornateCorner})` }} />

              {/* Inner card layout */}
              <div className="grid lg:grid-cols-[320px_1fr] rounded-lg overflow-hidden border border-gold/30 bg-[var(--theme-bg)] text-[var(--theme-text)]">
                {/* Sidebar */}
                <div className="bg-[var(--theme-sidebar-bg)] border-r border-gold/30">
                  <Sidebar theme={theme} />
                </div>

                {/* Right panel */}
                <section className="p-6 md:p-10 bg-[var(--theme-bg)] text-[var(--theme-text)] min-h-[700px]">
                  {/* Tabs & Theme Toggle wrapper */}
                  <nav className="flex items-center justify-between border-b border-gold/40 mb-8 pb-1">
                    <div className="flex flex-wrap gap-1">
                      {tabs.map((t) => {
                        const isActive = active === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => setActive(t.id)}
                            className={`relative px-4 py-3 text-xs md:text-sm tracking-[0.25em] font-display uppercase transition ${
                              isActive ? "text-[var(--theme-tab-active)] font-semibold" : "text-[var(--theme-tab-text)] hover:text-[var(--theme-tab-active)]"
                            }`}
                          >
                            {t.label}
                            {isActive && (
                              <motion.span
                                layoutId="tab-underline"
                                className="absolute left-2 right-2 -bottom-2 h-0.5 bg-gold"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Theme Toggle Button */}
                    <button
                      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      className="p-2 rounded-full border border-gold/40 hover:border-gold transition-all duration-300 ml-4 shadow-sm hover:shadow-[0_0_15px_var(--color-gold)] flex items-center justify-center bg-transparent cursor-pointer"
                      title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                      {theme === 'dark' ? (
                        <Sun className="w-5 h-5 text-gold animate-[spin_10s_linear_infinite]" />
                      ) : (
                        <Moon className="w-5 h-5 text-maroon" />
                      )}
                    </button>
                  </nav>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <Active />
                    </motion.div>
                  </AnimatePresence>
                </section>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center text-parchment/40 text-xs mt-6 font-display tracking-[0.3em]">
          © {new Date().getFullYear()} JAYANT PARIHAR
        </footer>
      </main>
    </div>
  );
}

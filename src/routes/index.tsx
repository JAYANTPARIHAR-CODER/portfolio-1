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

// Ornate border SVGs removed as requested

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
            {/* Content Container */}
            <div className={`relative p-4 md:p-6 rounded-xl overflow-hidden border border-gold/20 theme-transition ${theme === 'dark' ? 'theme-dark bg-[#120404]' : 'theme-light bg-[#F4EFE6]'}`}>
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

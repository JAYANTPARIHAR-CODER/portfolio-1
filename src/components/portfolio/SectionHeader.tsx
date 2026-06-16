import { Sparkles } from "lucide-react";

export const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 text-[var(--theme-accent)]">
        <Sparkles className="w-4 h-4 text-gold" />
        <span className="font-display text-xs tracking-[0.3em] uppercase">{kicker}</span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl text-[var(--theme-accent)] mt-1">{title}</h2>
      <div className="mt-3 h-px bg-gradient-to-r from-gold via-gold/50 to-transparent" />
    </div>
  );
}

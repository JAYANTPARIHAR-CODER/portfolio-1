import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeader, fade } from "./SectionHeader";

export function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    if (!name || !email || !message) {
      toast.error("Please fill in every field.");
      return;
    }
    setSending(true);
    const mailto = `mailto:jayantparihar170@gmail.com?subject=${encodeURIComponent(
      `Portfolio inquiry from ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
      form.reset();
    }, 600);
  };

  return (
    <motion.div {...fade} className="space-y-6">
      <SectionHeader kicker="Send an Inquiry" title="Let's Build Something." />
      <p className="font-serif italic text-[var(--theme-text)] opacity-95">For inquiries, stamp your details below.</p>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-xs tracking-[0.25em] text-[var(--theme-accent)] font-display">FULL NAME</span>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-2 text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]"
              placeholder="Jayant Parihar"
            />
          </label>
          <label className="block">
            <span className="text-xs tracking-[0.25em] text-[var(--theme-accent)] font-display">EMAIL ADDRESS</span>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-2 text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]"
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label className="block">
          <span className="text-xs tracking-[0.25em] text-[var(--theme-accent)] font-display">MESSAGE</span>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-2 text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)] resize-none"
            placeholder="Tell me about your project, role or idea…"
          />
        </label>
        <div className="flex justify-end pr-4 mt-6">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            disabled={sending}
            className="group relative flex flex-col items-center gap-1.5 cursor-pointer disabled:opacity-70"
          >
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#800020] to-[#4a0010] border-2 border-gold flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.5)] glow-gold transition-all group-hover:shadow-[0_0_30px_var(--color-gold)]">
              {/* Inner ornate ring for wax seal feel */}
              <div className="absolute inset-1.5 rounded-full border border-gold/40 flex items-center justify-center">
                {sending ? (
                  <span className="w-5 h-5 rounded-full border-2 border-gold border-t-transparent animate-spin" />
                ) : (
                  <Send className="w-6 h-6 text-gold" />
                )}
              </div>
            </div>
            <span className="text-[0.7rem] tracking-[0.3em] text-[var(--theme-accent)] font-display font-semibold transition-all">
              {sending ? "SENDING..." : "STAMP SEND"}
            </span>
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}

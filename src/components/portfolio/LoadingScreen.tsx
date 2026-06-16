import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-maroon-deep"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* top dot */}
      <motion.span
        className="absolute rounded-full bg-gold"
        style={{ width: 8, height: 8, top: "22%", boxShadow: "0 0 12px var(--color-gold)" }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />

      <div className="flex flex-col items-center gap-8">
        <motion.svg
          width="120"
          height="140"
          viewBox="0 0 120 140"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ filter: "drop-shadow(0 0 14px rgba(212,175,55,0.55))" }}
        >
          {/* Ornate lotus / diamond emblem */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "60px 70px" }}
          >
            <ellipse cx="60" cy="70" rx="38" ry="18" />
            <ellipse cx="60" cy="70" rx="38" ry="18" transform="rotate(60 60 70)" />
            <ellipse cx="60" cy="70" rx="38" ry="18" transform="rotate(120 60 70)" />
          </motion.g>
          {/* Top spire */}
          <path d="M60 10 L70 50 L60 70 L50 50 Z" fill="var(--color-gold)" fillOpacity="0.15" />
          <path d="M60 10 L70 50 L60 70 L50 50 Z" />
          <circle cx="60" cy="70" r="4" fill="var(--color-gold)" />
          {/* Bottom curve */}
          <path d="M30 120 Q60 135 90 120" />
          <path d="M20 128 Q60 148 100 128" opacity="0.5" />
        </motion.svg>

        <motion.div
          className="h-px bg-gold/60"
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

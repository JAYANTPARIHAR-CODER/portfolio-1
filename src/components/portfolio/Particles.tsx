import { useMemo } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 6,
        duration: Math.random() * 6 + 6,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px var(--color-gold)",
            animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
}

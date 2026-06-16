import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast, Toaster } from "sonner";
import { Download, Mail, Linkedin, Github, Code2, Sparkles, ExternalLink, Award, Send, Sun, Moon } from "lucide-react";
function Particles({ count = 40 }) {
  const particles = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 6,
      duration: Math.random() * 6 + 6
    })),
    [count]
  );
  return /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-0 overflow-hidden z-0", children: particles.map((p) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "absolute rounded-full bg-gold",
      style: {
        left: `${p.left}%`,
        top: `${p.top}%`,
        width: p.size,
        height: p.size,
        boxShadow: "0 0 8px var(--color-gold)",
        animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
        opacity: 0.5
      }
    },
    p.id
  )) });
}
const url$1 = "/jayant-profile.jpeg";
const profile = {
  url: url$1
};
const url = "/Jayant_Parihar_Resume.pdf";
const resume = {
  url
};
const socials = [
  { icon: Mail, label: "Email", href: "mailto:jayantparihar170@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jayant-parihar-079158322/" },
  { icon: Github, label: "GitHub", href: "https://github.com/JayantParihar" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/Jayant" }
];
function Sidebar({ theme = "dark" }) {
  return /* @__PURE__ */ jsxs("aside", { className: "flex flex-col items-center text-center gap-6 p-8 lg:border-r border-gold/30", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: "relative",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold via-gold-soft to-gold blur-md opacity-60" }),
          /* @__PURE__ */ jsx("div", { className: "relative w-48 h-56 rounded-t-full overflow-hidden ornate-frame bg-maroon", children: /* @__PURE__ */ jsx("img", { src: profile.url, alt: "Jayant Parihar", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gold glow-gold" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.3, duration: 0.8 },
        children: [
          /* @__PURE__ */ jsxs("h1", { className: `font-display text-3xl leading-tight uppercase transition-all duration-300 ${theme === "dark" ? "text-gold-gradient" : "text-[var(--theme-accent)]"}`, children: [
            "JAYANT",
            /* @__PURE__ */ jsx("br", {}),
            "PARIHAR."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs tracking-[0.25em] uppercase text-[var(--theme-text-muted)]", children: "Computer Science Engineer" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.a,
      {
        href: resume.url,
        download: "Jayant_Parihar_Resume.pdf",
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.97 },
        className: "group relative flex flex-col items-center gap-1.5 mt-2 cursor-pointer",
        children: [
          /* @__PURE__ */ jsx("div", { className: "relative w-20 h-20 rounded-full bg-gradient-to-br from-[#800020] to-[#4a0010] border-2 border-gold flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.5)] glow-gold transition-all group-hover:shadow-[0_0_30px_var(--color-gold)]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-1.5 rounded-full border border-gold/40 flex items-center justify-center", children: /* @__PURE__ */ jsx(Download, { className: "w-6 h-6 text-gold" }) }) }),
          /* @__PURE__ */ jsx("span", { className: "text-[0.7rem] tracking-[0.3em] text-[var(--theme-accent)] font-display font-semibold transition-all", children: "RESUME" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "w-full mt-6 pt-6 border-t border-gold/30", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xs tracking-[0.3em] text-[var(--theme-accent)] font-display mb-4", children: "CONTACT" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-[var(--theme-text)]", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 justify-center lg:justify-start", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" }),
          /* @__PURE__ */ jsx("a", { href: "tel:+917838399968", className: "hover:text-[var(--theme-accent-hover)] transition-colors", children: "+91 7838399968" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 justify-center lg:justify-start", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:jayantparihar170@gmail.com", className: "hover:text-[var(--theme-accent-hover)] transition-colors", children: "jayantparihar170@gmail.com" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 justify-center lg:justify-start", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" }),
          /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/jayant-parihar-079158322/", target: "_blank", rel: "noreferrer", className: "hover:text-[var(--theme-accent-hover)] transition-colors", children: "linkedin.com/in/jayant-parihar" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 justify-center lg:justify-start", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]" }),
          /* @__PURE__ */ jsx("a", { href: "https://github.com/JayantParihar", target: "_blank", rel: "noreferrer", className: "hover:text-[var(--theme-accent-hover)] transition-colors", children: "github.com/JayantParihar" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-3 mt-6", children: socials.map(({ icon: Icon, label, href }) => /* @__PURE__ */ jsx(
        "a",
        {
          href,
          target: "_blank",
          rel: "noreferrer",
          "aria-label": label,
          className: "w-10 h-10 rounded-full border border-[var(--theme-border)]/50 flex items-center justify-center text-[var(--theme-accent)] hover:bg-[var(--theme-accent)] hover:text-[var(--theme-bg)] transition-all hover:shadow-[0_0_20px_var(--color-gold)]",
          children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" })
        },
        label
      )) })
    ] })
  ] });
}
const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};
function SectionHeader({ kicker, title }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-[var(--theme-accent)]", children: [
      /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-gold" }),
      /* @__PURE__ */ jsx("span", { className: "font-display text-xs tracking-[0.3em] uppercase", children: kicker })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl text-[var(--theme-accent)] mt-1", children: title }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 h-px bg-gradient-to-r from-gold via-gold/50 to-transparent" })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxs(motion.div, { ...fade, className: "space-y-6", children: [
    /* @__PURE__ */ jsx(SectionHeader, { kicker: "About Me", title: "Hello, I'm Jayant." }),
    /* @__PURE__ */ jsx("p", { className: "font-serif text-lg leading-relaxed text-[var(--theme-text)] opacity-95 italic", children: "A Computer Science Engineering student passionate about AI, Full Stack Development, Problem Solving and Software Engineering. I build polished interfaces and ship resilient systems — currently sharpening my craft at Chitkara University." }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-sm tracking-[0.2em] text-[var(--theme-accent)] mb-3", children: "CURRENT FOCUS" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: ["Data Structures & Algorithms", "AI & Machine Learning", "Full Stack Development", "System Design"].map(
          (f) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-[var(--theme-text)]", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-gold rotate-45" }),
            f
          ] }, f)
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-sm tracking-[0.2em] text-[var(--theme-accent)] mb-3", children: "EDUCATION" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--theme-text)] font-semibold", children: "B.Tech, Computer Science Engineering" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-[var(--theme-text-muted)] mt-1", children: "Chitkara University · 2024 – 2028 · CGPA 8.78" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-[var(--theme-accent)] mt-3 font-semibold", children: "Relevant Coursework" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-[var(--theme-text)] opacity-90 mt-1", children: "OOPs · DBMS · Operating Systems · Data Structures · Computer Networks · AI/ML" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3", children: [
      { v: "110+", l: "LeetCode" },
      { v: "8.78", l: "CGPA" },
      { v: "3rd", l: "IGNITE Hack" }
    ].map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center rounded-lg border border-gold/40 bg-gradient-to-br from-[#800020] to-[#4a0010] text-parchment p-4 glow-gold", children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-2xl text-gold", children: s.v }),
      /* @__PURE__ */ jsx("div", { className: "text-[0.65rem] tracking-[0.2em] uppercase mt-1 opacity-80", children: s.l })
    ] }, s.l)) })
  ] });
}
const projects = [
  {
    name: "SupplyAI",
    desc: "AI-powered B2B supplier discovery platform with intelligent search and recommendation systems.",
    features: ["AI chatbot", "Supplier recommendation", "Smart search", "Responsive UI"],
    tech: ["React", "Node.js", "AI/ML", "Tailwind"],
    stats: { users: "Top 20/50", build: "2025" },
    demo: "#",
    github: "https://github.com/JAYANTPARIHAR-CODER/Suraksalink-project"
  },
  {
    name: "IndiWealth — IGNITE Hackathon",
    desc: "Financial dashboard built at Panjab University IGNITE Hackathon — interactive data visualization and responsive UI. Finalist, 3rd Rank / 100+ teams.",
    features: ["Financial dashboards", "Data visualization", "Responsive UI", "Team-led frontend"],
    tech: ["React", "JavaScript", "Charting", "CSS"],
    stats: { users: "3rd / 100+", build: "2026" },
    demo: "#",
    github: "https://github.com/JayantParihar"
  },
  {
    name: "F1 Web Platform",
    desc: "Responsive F1-themed frontend with modern UI/UX, interactive components and optimized performance.",
    features: ["Modern UI/UX", "Interactive components", "Perf optimized", "Vercel deploy"],
    tech: ["React", "JavaScript", "Vercel"],
    stats: { users: "Live", build: "2025" },
    demo: "https://original-f1-new.vercel.app/",
    github: "https://github.com/JAYANTPARIHAR-CODER/original-f1-new"
  },
  {
    name: "Saini Sweets",
    desc: "A premium e-commerce website for a traditional Indian sweet shop in Hisar, featuring online ordering, menu browsing, and product showcase.",
    features: ["Online ordering", "Menu showcase", "Responsive design", "Product gallery"],
    tech: ["React", "Tailwind CSS", "Vercel"],
    stats: { users: "Live", build: "2025" },
    demo: "https://saini-sweets-u17h.vercel.app/",
    github: "https://github.com/JAYANTPARIHAR-CODER/saini-sweets"
  },
  {
    name: "E-Commerce Platform",
    desc: "A high-performance online shopping platform featuring real-time state management and optimized rendering workflows.",
    features: ["React Hooks optimization", "Context API state manager", "15% faster page load speed", "Component modularity"],
    tech: ["React", "JavaScript", "Tailwind CSS"],
    stats: { users: "Core Engine", build: "2024" },
    demo: "#",
    github: "https://github.com/JayantParihar"
  }
];
function Projects() {
  return /* @__PURE__ */ jsxs(motion.div, { ...fade, className: "space-y-6", children: [
    /* @__PURE__ */ jsx(SectionHeader, { kicker: "Featured Work", title: "Selected Projects" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-5", children: projects.map((p, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.1 },
        whileHover: { y: -4 },
        className: "group relative rounded-xl border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-5 transition-all hover:border-[var(--theme-accent)] hover:shadow-[0_0_30px_oklch(0.78_0.13_85/0.35)]",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-gradient-to-br from-gold/0 via-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition" }),
          /* @__PURE__ */ jsxs("div", { className: "relative flex flex-wrap items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl text-[var(--theme-accent)]", children: p.name }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-[var(--theme-text-muted)] mt-0.5", children: [
                p.stats.users,
                " · ",
                p.stats.build
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxs("a", { href: p.demo, className: "text-xs flex items-center gap-1 px-3 py-1.5 rounded-md bg-[var(--theme-accent)] text-[var(--theme-bg)] hover:bg-[var(--theme-accent-hover)] font-semibold transition", children: [
                /* @__PURE__ */ jsx(ExternalLink, { className: "w-3 h-3" }),
                " Live Demo"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: p.github, target: "_blank", rel: "noreferrer", className: "text-xs flex items-center gap-1 px-3 py-1.5 rounded-md border border-[var(--theme-accent)] text-[var(--theme-accent)] hover:bg-[var(--theme-accent)] hover:text-[var(--theme-bg)] transition", children: [
                /* @__PURE__ */ jsx(Github, { className: "w-3 h-3" }),
                " GitHub"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "relative mt-3 text-sm text-[var(--theme-text)] opacity-95 font-serif", children: p.desc }),
          /* @__PURE__ */ jsx("ul", { className: "relative mt-3 grid grid-cols-2 gap-1 text-xs text-[var(--theme-text)] opacity-90", children: p.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gold rotate-45" }),
            " ",
            f
          ] }, f)) }),
          /* @__PURE__ */ jsx("div", { className: "relative mt-4 flex flex-wrap gap-1.5", children: p.tech.map((t) => /* @__PURE__ */ jsx("span", { className: "text-[0.65rem] tracking-wider px-2 py-1 rounded border border-[var(--theme-border)]/60 text-[var(--theme-accent)] bg-gold/5", children: t }, t)) })
        ]
      },
      p.name
    )) })
  ] });
}
const skillGroups = {
  Languages: ["Java", "C++", "SQL", "JavaScript", "HTML", "CSS"],
  "Linux & Systems": ["LVM", "Network Security", "User Management"],
  "Tools & Frameworks": ["React", "Node.js", "Git", "GitHub", "Postman", "MySQL", "Linux CLI"],
  "Core CS": ["Data Structures", "Algorithms", "OOPs", "Operating Systems", "DBMS"]
};
function Skills() {
  return /* @__PURE__ */ jsxs(motion.div, { ...fade, className: "space-y-6", children: [
    /* @__PURE__ */ jsx(SectionHeader, { kicker: "Toolkit", title: "Technical Skills" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: Object.entries(skillGroups).map(([group, items], gi) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: gi * 0.08 },
        className: "rounded-lg border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-4",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xs tracking-[0.25em] text-[var(--theme-accent)] mb-3", children: group.toUpperCase() }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: items.map((s, i) => /* @__PURE__ */ jsx(
            motion.span,
            {
              initial: { opacity: 0, scale: 0.85 },
              animate: { opacity: 1, scale: 1 },
              transition: { delay: gi * 0.08 + i * 0.04 },
              whileHover: { scale: 1.08, y: -2 },
              className: "px-3 py-1 text-xs rounded-full border border-[var(--theme-border)]/60 bg-gradient-to-br from-[var(--theme-bg)] to-gold/5 text-[var(--theme-text)] shadow-sm hover:shadow-[0_0_15px_var(--color-gold)] transition",
              children: s
            },
            s
          )) })
        ]
      },
      group
    )) })
  ] });
}
const certs = [
  { name: "Red Hat System Administration II (RH134)", issuer: "Red Hat", date: "2026", desc: "LVM storage, firewall-cmd, SELinux protocols." },
  { name: "Red Hat System Administration I (RH124)", issuer: "Red Hat", date: "2026", desc: "Command-line automation, system boot, Vim workflows." },
  { name: "Deloitte Australia — Data Analytics Job Simulation", issuer: "Forage / Deloitte", date: "2025", desc: "EDA, dashboards, business intelligence client work." },
  { name: "Web Development & DSA", issuer: "Self-led + Coursework", date: "Ongoing", desc: "React, Node, MySQL · 110+ LeetCode solutions." }
];
function Certifications() {
  return /* @__PURE__ */ jsxs(motion.div, { ...fade, className: "space-y-6", children: [
    /* @__PURE__ */ jsx(SectionHeader, { kicker: "Credentials", title: "Certifications & Medallions" }),
    /* @__PURE__ */ jsx("ol", { className: "relative border-l-2 border-[var(--theme-border)]/40 ml-3 space-y-6 pl-6", children: certs.map((c, i) => /* @__PURE__ */ jsxs(
      motion.li,
      {
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: i * 0.1 },
        className: "relative",
        children: [
          /* @__PURE__ */ jsx("span", { className: "absolute -left-[34px] top-1 w-6 h-6 rounded-full bg-[var(--theme-accent)] border-2 border-gold flex items-center justify-center glow-gold", children: /* @__PURE__ */ jsx(Award, { className: "w-3 h-3 text-gold" }) }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-[var(--theme-border)]/40 bg-[var(--theme-box-bg)]/80 p-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-base text-[var(--theme-accent)]", children: c.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-[var(--theme-text-muted)] mt-0.5", children: [
              c.issuer,
              " · ",
              c.date
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--theme-text)] opacity-95 mt-2 font-serif italic", children: c.desc })
          ] })
        ]
      },
      c.name
    )) })
  ] });
}
function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e) => {
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
      `Portfolio inquiry from ${name}`
    )}&body=${encodeURIComponent(`${message}

— ${name} (${email})`)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
      form.reset();
    }, 600);
  };
  return /* @__PURE__ */ jsxs(motion.div, { ...fade, className: "space-y-6", children: [
    /* @__PURE__ */ jsx(SectionHeader, { kicker: "Send an Inquiry", title: "Let's Build Something." }),
    /* @__PURE__ */ jsx("p", { className: "font-serif italic text-[var(--theme-text)] opacity-95", children: "For inquiries, stamp your details below." }),
    /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs tracking-[0.25em] text-[var(--theme-accent)] font-display", children: "FULL NAME" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              name: "name",
              required: true,
              className: "mt-1 w-full rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-2 text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]",
              placeholder: "Jayant Parihar"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs tracking-[0.25em] text-[var(--theme-accent)] font-display", children: "EMAIL ADDRESS" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              name: "email",
              required: true,
              className: "mt-1 w-full rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-2 text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]",
              placeholder: "you@example.com"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs tracking-[0.25em] text-[var(--theme-accent)] font-display", children: "MESSAGE" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "message",
            required: true,
            rows: 5,
            className: "mt-1 w-full rounded-md border border-[var(--theme-border)] bg-[var(--theme-bg)] px-3 py-2 text-[var(--theme-text)] focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)] resize-none",
            placeholder: "Tell me about your project, role or idea…"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end pr-4 mt-6", children: /* @__PURE__ */ jsxs(
        motion.button,
        {
          type: "submit",
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.97 },
          disabled: sending,
          className: "group relative flex flex-col items-center gap-1.5 cursor-pointer disabled:opacity-70",
          children: [
            /* @__PURE__ */ jsx("div", { className: "relative w-20 h-20 rounded-full bg-gradient-to-br from-[#800020] to-[#4a0010] border-2 border-gold flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.5)] glow-gold transition-all group-hover:shadow-[0_0_30px_var(--color-gold)]", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-1.5 rounded-full border border-gold/40 flex items-center justify-center", children: sending ? /* @__PURE__ */ jsx("span", { className: "w-5 h-5 rounded-full border-2 border-gold border-t-transparent animate-spin" }) : /* @__PURE__ */ jsx(Send, { className: "w-6 h-6 text-gold" }) }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[0.7rem] tracking-[0.3em] text-[var(--theme-accent)] font-display font-semibold transition-all", children: sending ? "SENDING..." : "STAMP SEND" })
          ]
        }
      ) })
    ] })
  ] });
}
function LoadingScreen() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-maroon-deep",
      initial: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.8, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ jsx(
          motion.span,
          {
            className: "absolute rounded-full bg-gold",
            style: { width: 8, height: 8, top: "22%", boxShadow: "0 0 12px var(--color-gold)" },
            animate: { opacity: [0.3, 1, 0.3] },
            transition: { duration: 1.6, repeat: Infinity }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-8", children: [
          /* @__PURE__ */ jsxs(
            motion.svg,
            {
              width: "120",
              height: "140",
              viewBox: "0 0 120 140",
              fill: "none",
              stroke: "var(--color-gold)",
              strokeWidth: "1.5",
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1, ease: "easeOut" },
              style: { filter: "drop-shadow(0 0 14px rgba(212,175,55,0.55))" },
              children: [
                /* @__PURE__ */ jsxs(
                  motion.g,
                  {
                    animate: { rotate: [0, 360] },
                    transition: { duration: 22, repeat: Infinity, ease: "linear" },
                    style: { transformOrigin: "60px 70px" },
                    children: [
                      /* @__PURE__ */ jsx("ellipse", { cx: "60", cy: "70", rx: "38", ry: "18" }),
                      /* @__PURE__ */ jsx("ellipse", { cx: "60", cy: "70", rx: "38", ry: "18", transform: "rotate(60 60 70)" }),
                      /* @__PURE__ */ jsx("ellipse", { cx: "60", cy: "70", rx: "38", ry: "18", transform: "rotate(120 60 70)" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("path", { d: "M60 10 L70 50 L60 70 L50 50 Z", fill: "var(--color-gold)", fillOpacity: "0.15" }),
                /* @__PURE__ */ jsx("path", { d: "M60 10 L70 50 L60 70 L50 50 Z" }),
                /* @__PURE__ */ jsx("circle", { cx: "60", cy: "70", r: "4", fill: "var(--color-gold)" }),
                /* @__PURE__ */ jsx("path", { d: "M30 120 Q60 135 90 120" }),
                /* @__PURE__ */ jsx("path", { d: "M20 128 Q60 148 100 128", opacity: "0.5" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "h-px bg-gold/60",
              initial: { width: 0 },
              animate: { width: 180 },
              transition: { duration: 2, ease: "easeInOut" }
            }
          )
        ] })
      ]
    }
  );
}
const tabs = [{
  id: "about",
  label: "About",
  Component: About
}, {
  id: "projects",
  label: "Projects",
  Component: Projects
}, {
  id: "skills",
  label: "Skills",
  Component: Skills
}, {
  id: "certifications",
  label: "Certifications",
  Component: Certifications
}, {
  id: "contact",
  label: "Contact",
  Component: Contact
}];
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
  const [active, setActive] = useState("about");
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");
  const Active = tabs.find((t) => t.id === active).Component;
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden bg-maroon-deep", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: loading && /* @__PURE__ */ jsx(LoadingScreen, {}) }),
    /* @__PURE__ */ jsx(Toaster, { theme: "dark", position: "top-center" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.06] pointer-events-none", style: {
      backgroundImage: "radial-gradient(circle at 1px 1px, var(--color-gold) 1px, transparent 0)",
      backgroundSize: "28px 28px"
    } }),
    /* @__PURE__ */ jsx(Particles, {}),
    /* @__PURE__ */ jsxs("main", { className: "relative z-10 max-w-7xl mx-auto p-4 md:p-8 min-h-screen", children: [
      /* @__PURE__ */ jsx("div", { className: "relative rounded-2xl p-[2px] bg-gradient-to-br from-gold via-gold-soft to-gold/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-maroon-deep p-3 md:p-5", children: /* @__PURE__ */ jsxs("div", { className: `relative p-6 rounded-xl overflow-hidden border border-gold/40 theme-transition ${theme === "dark" ? "theme-dark bg-[#120404]" : "theme-light bg-[#F4EFE6]"}`, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-6 right-6 h-6 bg-repeat-x pointer-events-none", style: {
          backgroundImage: `url(${ornateBorderH})`
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-6 right-6 h-6 bg-repeat-x scale-y-[-1] pointer-events-none", style: {
          backgroundImage: `url(${ornateBorderH})`
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-6 bottom-6 w-6 bg-repeat-y pointer-events-none", style: {
          backgroundImage: `url(${ornateBorderV})`
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-6 bottom-6 w-6 bg-repeat-y scale-x-[-1] pointer-events-none", style: {
          backgroundImage: `url(${ornateBorderV})`
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-6 h-6 pointer-events-none", style: {
          backgroundImage: `url(${ornateCorner})`
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-6 h-6 pointer-events-none", style: {
          backgroundImage: `url(${ornateCorner})`
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-6 h-6 pointer-events-none", style: {
          backgroundImage: `url(${ornateCorner})`
        } }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-6 h-6 pointer-events-none", style: {
          backgroundImage: `url(${ornateCorner})`
        } }),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[320px_1fr] rounded-lg overflow-hidden border border-gold/30 bg-[var(--theme-bg)] text-[var(--theme-text)]", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-[var(--theme-sidebar-bg)] border-r border-gold/30", children: /* @__PURE__ */ jsx(Sidebar, { theme }) }),
          /* @__PURE__ */ jsxs("section", { className: "p-6 md:p-10 bg-[var(--theme-bg)] text-[var(--theme-text)] min-h-[700px]", children: [
            /* @__PURE__ */ jsxs("nav", { className: "flex items-center justify-between border-b border-gold/40 mb-8 pb-1", children: [
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: tabs.map((t) => {
                const isActive = active === t.id;
                return /* @__PURE__ */ jsxs("button", { onClick: () => setActive(t.id), className: `relative px-4 py-3 text-xs md:text-sm tracking-[0.25em] font-display uppercase transition ${isActive ? "text-[var(--theme-tab-active)] font-semibold" : "text-[var(--theme-tab-text)] hover:text-[var(--theme-tab-active)]"}`, children: [
                  t.label,
                  isActive && /* @__PURE__ */ jsx(motion.span, { layoutId: "tab-underline", className: "absolute left-2 right-2 -bottom-2 h-0.5 bg-gold" })
                ] }, t.id);
              }) }),
              /* @__PURE__ */ jsx("button", { onClick: () => setTheme(theme === "dark" ? "light" : "dark"), className: "p-2 rounded-full border border-gold/40 hover:border-gold transition-all duration-300 ml-4 shadow-sm hover:shadow-[0_0_15px_var(--color-gold)] flex items-center justify-center bg-transparent cursor-pointer", title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode", children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "w-5 h-5 text-gold animate-[spin_10s_linear_infinite]" }) : /* @__PURE__ */ jsx(Moon, { className: "w-5 h-5 text-maroon" }) })
            ] }),
            /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(motion.div, { initial: {
              opacity: 0,
              y: 12
            }, animate: {
              opacity: 1,
              y: 0
            }, exit: {
              opacity: 0,
              y: -8
            }, transition: {
              duration: 0.35
            }, children: /* @__PURE__ */ jsx(Active, {}) }, active) })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs("footer", { className: "text-center text-parchment/40 text-xs mt-6 font-display tracking-[0.3em]", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " JAYANT PARIHAR"
      ] })
    ] })
  ] });
}
export {
  Portfolio as component
};

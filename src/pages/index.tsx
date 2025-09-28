'use client';

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FileText,
  LayoutDashboard,
  Menu,
  Plus,
  Sparkle,
  UserCheck,
  Wand2,
  Zap,
} from "lucide-react";
import { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import UploadForm from "../components/UploadForm";

const stats = [
  {
    label: "Total Resumes",
    value: "1",
    caption: "Versions crafted",
    icon: FileText,
  },
  {
    label: "Profile Status",
    value: "Complete",
    caption: "All sections synced",
    icon: UserCheck,
  },
  {
    label: "Last Updated",
    value: "Sep 28, 2025",
    caption: "Keep momentum strong",
    icon: Zap,
  },
];

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Workspace", href: "#workspace" },
  { label: "Highlights", href: "#features" },
];

const features = [
  {
    title: "AI drafting engine",
    description: "Auto-generate tailored bullet points with tone-aware prompts and instant rewrites.",
    icon: Wand2,
  },
  {
    title: "Multi-resume control",
    description: "Track every version, compare revisions, and export when the timing is right.",
    icon: LayoutDashboard,
  },
  {
    title: "Smart parsing",
    description: "Upload any PDF and recover perfectly formatted content ready for reuse.",
    icon: Sparkle,
  },
];

const timeline = [
  {
    title: "Upload & parse",
    description: "Drag in a PDF and we extract clean sections with zero formatting headaches.",
  },
  {
    title: "Remix with AI",
    description: "Adjust tone, expand wins, and surface the exact skills recruiters want to see.",
  },
  {
    title: "Deliver anywhere",
    description: "Ship pixel-perfect resumes, cover letters, and share-ready links in seconds.",
  },
];

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: easing },
  },
};

export default function Home() {
  const [parsedText, setParsedText] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute right-[-15%] top-1/3 h-[26rem] w-[26rem] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[10%] h-[30rem] w-[30rem] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.16),_transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-10 md:px-10">
        <header className="relative mb-16">
          <div className="glass-panel flex items-center justify-between rounded-full border-white/5 bg-white/5 px-6 py-4 backdrop-blur-3xl md:px-8">
            <div className="relative flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-inner shadow-white/20">
                <FileText className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-indigo-200">ResumeForge</p>
                <p className="text-base font-semibold text-white">Creator Studio</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative inline-flex items-center px-3 py-1 transition duration-300 hover:text-white"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="ring-outline" />
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Link href="#workspace" className="btn-secondary">
                View workspace
              </Link>
              <Link href="#workspace" className="btn-primary">
                <Plus className="h-4 w-4" />
                Start new resume
              </Link>
            </div>

            <button
              className="relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 shadow-inner shadow-white/10 transition hover:bg-white/20 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="glass-panel mt-4 flex flex-col gap-4 rounded-3xl px-6 py-6 md:hidden"
              >
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-semibold text-slate-200 transition hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#workspace"
                  className="btn-primary justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <Plus className="h-4 w-4" /> Start new resume
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <motion.section
          id="hero"
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative grid flex-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <motion.div variants={fadeUp} className="space-y-8">
            <span className="tag-floating">
              <Sparkle className="h-4 w-4" /> Build resumes that feel alive
            </span>
            <div className="space-y-6">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Craft your next <span className="bg-gradient-to-r from-indigo-200 via-sky-200 to-purple-200 bg-clip-text text-transparent">career leap</span> with confident storytelling.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                Welcome to the studio for ambitious job seekers. Design bespoke resumes, remix proven sections, and let AI keep every bullet point sharp and aligned to your dream roles.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#workspace" className="btn-primary">
                <Plus className="h-5 w-5" />
                Create new resume
              </Link>
              <Link href="#features" className="btn-secondary">
                Explore capabilities
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="glass-panel relative overflow-hidden rounded-[32px] p-8"
          >
            <div className="orbital-decoration" />
            <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
              Real-time preview
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-indigo-200">Currently editing</p>
                  <p className="mt-1 text-lg font-semibold text-white">Product Designer — Vision OS</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-200 shadow-inner shadow-white/10">
                  <Sparkle className="h-5 w-5" />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm text-slate-200 shadow-inner shadow-black/40">
                <p className="font-semibold text-white">Experience highlight</p>
                <p className="mt-2 leading-relaxed text-slate-300">
                  Spearheaded immersive onboarding with spatial prototypes that lifted trial-to-paid conversions by <span className="text-sky-300">28%</span> while condensing stakeholder review cycles to under 48 hours.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/30 via-indigo-500/10 to-transparent p-5 shadow-inner shadow-black/30">
                  <p className="text-xs uppercase tracking-[0.35em] text-indigo-100">AI suggestions</p>
                  <p className="mt-2 text-sm text-slate-100">
                    Try "Lead with customer outcome" or "Highlight cross-functional leadership".
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-inner shadow-black/50">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Next actions</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    <li>• Update skills spotlight</li>
                    <li>• Export tailored PDF</li>
                    <li>• Share live link</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.ul
          variants={cardStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {stats.map(({ label, value, caption, icon: Icon }) => (
            <motion.li key={label} variants={cardFade} className="stat-card">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-indigo-200 shadow-inner shadow-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-slate-400">{label}</span>
              </div>
              <p className="text-3xl font-semibold text-white">{value}</p>
              <p className="text-sm text-slate-300">{caption}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.section
          id="workspace"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div variants={cardFade} className="grid gap-6 lg:grid-cols-2">
            <div className="glass-panel">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Upload an existing resume</h3>
                <span className="rounded-full border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-200">Parse PDF</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Drop in a PDF resume to re-use your strongest wins. We cleanly segment sections and keep formatting intact.
              </p>
              <div className="mt-6 rounded-2xl border border-dashed border-white/20 bg-slate-900/60 p-4 shadow-inner shadow-black/50">
                <UploadForm onParsed={(t) => setParsedText(t)} />
                {parsedText && (
                  <div className="mt-4 max-h-40 overflow-y-auto rounded-xl border border-white/5 bg-slate-950/80 p-4 text-sm text-slate-200 shadow-inner shadow-black/60">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-indigo-200">
                      <Sparkle className="h-4 w-4" /> Parsed PDF content
                    </h4>
                    <pre className="whitespace-pre-wrap leading-relaxed text-slate-300">{parsedText}</pre>
                  </div>
                )}
              </div>
            </div>

            <div className="glass-panel">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Create a new resume</h3>
                <span className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-200">AI assisted</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Guided prompts help you craft compelling sections. Switch between role presets and tailor voice instantly.
              </p>
              <div className="mt-6 rounded-2xl border border-white/5 bg-slate-900/60 p-4 shadow-inner shadow-black/50">
                <ResumeForm />
              </div>
            </div>
          </motion.div>

          <motion.div variants={cardFade} className="glass-panel flex flex-col justify-between gap-6 overflow-hidden">
            <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/25 via-sky-500/20 to-transparent blur-3xl" />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-indigo-200">Workflow</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">From upload to share in three elegant moves</h3>
            </div>
            <ul className="space-y-5 text-sm text-slate-200">
              {timeline.map((step, index) => (
                <li key={step.title} className="relative rounded-2xl border border-white/5 bg-slate-950/60 p-4 shadow-inner shadow-black/40">
                  <div className="absolute -left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-200 shadow-inner shadow-indigo-500/40 sm:flex">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-slate-300">{step.description}</p>
                </li>
              ))}
            </ul>
            <Link href="#features" className="btn-secondary w-full justify-center">
              See automations
            </Link>
          </motion.div>
        </motion.section>

        <motion.section
          id="features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mt-20 space-y-12"
        >
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-indigo-200">Highlights</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Everything you need to run a resume studio</h2>
            <p className="text-base leading-relaxed text-slate-300">
              Automate tedious formatting, keep every revision organized, and let the visual polish impress on every screen.
            </p>
          </motion.div>

          <motion.div variants={cardStagger} className="grid gap-6 md:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <motion.div
                key={title}
                variants={cardFade}
                whileHover={{ y: -10 }}
                className="glass-panel p-7"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-transparent text-indigo-100 shadow-inner shadow-indigo-500/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <footer className="mt-24 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
          Designed for storytellers chasing the next opportunity.
        </footer>
      </div>
    </main>
  );
}

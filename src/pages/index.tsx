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
import TemplatePreview from "../components/TemplatePreview";

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
    badgeColor: "text-emerald-600",
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [parsedText, setParsedText] = useState<string | null>(null);

  const parsedHtml = parsedText
    ? parsedText
        .split(/\n{2,}/)
        .map((paragraph) =>
          `<p>${paragraph
            .split(/\n/)
            .map((line) => line.trim())
            .filter(Boolean)
            .join("<br />")}</p>`
        )
        .join("")
    : null;

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute right-[-15%] top-1/3 h-[26rem] w-[26rem] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[10%] h-[30rem] w-[30rem] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.16),_transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-10 md:px-10">
        {/* Header */}
        <header className="relative mb-16">
          <div className="glass-panel flex items-center justify-between rounded-full border-white/5 bg-white/5 px-6 py-4 backdrop-blur-3xl md:px-8">
            <div className="relative flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-inner shadow-white/20">
                <FileText className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-indigo-200">EdgeWorks</p>
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

        {/* Hero */}
        <motion.section
          id="hero"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div className="space-y-6">
            <p className="pill-button w-fit bg-white/10 text-xs uppercase tracking-[0.35em] text-indigo-100">
              AI resume workspace
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Launch polished resumes in minutes with guided AI drafting
            </h1>
            <p className="max-w-xl text-lg text-slate-200">
              EdgeWorks Creator Studio blends precise prompts with intuitive editing so every application reflects your best wins.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#workspace" className="btn-primary">
                <Plus className="h-4 w-4" /> Generate a new resume
              </Link>
              <Link href="#features" className="btn-secondary">
                Explore highlights
              </Link>
            </div>
          </div>

          <motion.div
            variants={cardFade}
            className="glass-panel relative overflow-hidden rounded-3xl border-white/5 bg-white/10 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/5" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-100">Live editor</p>
              <p className="text-lg text-slate-100">
                Upload an existing PDF or craft new content — Creator Studio keeps context synced while AI drafts tailored achievements.
              </p>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-slate-200">
                “Repositioned onboarding to spotlight measurable growth, accelerating recruiter callbacks by 3x.”
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mb-20 grid gap-4 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={cardFade} className="floating-card flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{stat.label}</p>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className={`text-sm text-slate-300 ${stat.badgeColor ?? ""}`}>{stat.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Workspace */}
        <motion.section
          id="workspace"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardStagger}
          className="mb-24 space-y-10"
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Workspace</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Build, remix, and export in one flow</h2>
            <p className="max-w-2xl text-slate-200">
              Parse an existing resume for quick tweaks or draft a brand-new version using guided prompts. Download ready-to-send PDFs in a click.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div variants={cardFade} className="floating-card">
              <h3 className="text-xl font-semibold text-white">Import an existing resume</h3>
              <p className="mt-2 text-sm text-slate-300">
                We’ll scan the PDF, pull out clean text, and prep it for editing.
              </p>
              <div className="mt-6">
                <UploadForm onParsed={setParsedText} />
              </div>
              {parsedText && (
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-slate-200">
                  <p className="mb-2 font-semibold text-white">Quick extract</p>
                  <p className="whitespace-pre-wrap text-slate-200/90">{parsedText.slice(0, 500)}{parsedText.length > 500 ? "…" : ""}</p>
                </div>
              )}
            </motion.div>

            <motion.div variants={cardFade} className="floating-card">
              <h3 className="text-xl font-semibold text-white">Draft a fresh version</h3>
              <p className="mt-2 text-sm text-slate-300">
                Share your highlights and we’ll compile a polished PDF using our Gemini-backed renderer.
              </p>
              <div className="mt-6">
                <ResumeForm />
              </div>
            </motion.div>
          </div>

          {parsedHtml && (
            <motion.div variants={cardFade} className="floating-card border border-white/10 bg-white/5">
              <h3 className="text-xl font-semibold text-white">Parsed preview</h3>
              <p className="mt-2 text-sm text-slate-300">
                Cleaned HTML ready for remixing in the AI writer.
              </p>
              <TemplatePreview html={parsedHtml} />
            </motion.div>
          )}
        </motion.section>

        {/* Features */}
        <motion.section
          id="features"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mb-24"
        >
          <div className="mb-10 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Highlights</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Why creators pick EdgeWorks</h2>
            <p className="max-w-3xl text-slate-200">
              Powerful automations remove the busywork so you can focus on curating stories that convert interviews.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={cardFade} className="floating-card space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mb-24"
        >
          <div className="mb-8 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Workflow</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">From upload to share-ready in three steps</h2>
          </div>

          <div className="space-y-6">
            {timeline.map((step, index) => (
              <motion.div key={step.title} variants={cardFade} className="floating-card flex flex-col gap-3 md:flex-row md:items-center">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-slate-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-auto border-t border-white/10 pt-10 text-sm text-slate-400">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} EdgeWorks Creator Studio. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#hero" className="transition hover:text-white">
                Back to top
              </Link>
              <Link href="mailto:hello@edgeworks.ai" className="transition hover:text-white">
                Contact support
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

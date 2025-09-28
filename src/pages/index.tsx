'use client';

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bookmark,
  FileText,
  Menu,
  Plus,
  Sparkle,
  Upload,
  Wand2,
} from "lucide-react";
import { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import UploadForm from "../components/UploadForm";

const navLinks = [
  { label: "Create", href: "#create" },
  { label: "Upload", href: "#upload" },
  { label: "Inspiration", href: "#inspiration" },
];

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easing },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const featureCards = [
  {
    title: "Narrate your wins with confidence",
    description:
      "Guided prompts help you highlight impact, metrics, and momentum so every line tells a story.",
    icon: Wand2,
  },
  {
    title: "Keep your versions aligned",
    description:
      "Organize drafts for each role and compare variations without losing track of what matters most.",
    icon: Bookmark,
  },
  {
    title: "Polish without the busywork",
    description:
      "Animated previews show how typography, spacing, and hierarchy feel before you export.",
    icon: Sparkle,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [parsedText, setParsedText] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[140px]" />
        <div className="absolute right-[-15%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-[160px]" />
        <div className="absolute inset-x-0 bottom-[-25%] h-[34rem] rounded-[50%] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.18),_transparent_65%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center pb-24">
        <header className="section-shell">
          <div className="nav-shell">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-inner shadow-white/20">
                <FileText className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <p className="brand-tag">ResumeForge</p>
                <p className="brand-title">Creator Studio</p>
              </div>
            </div>

            <nav className="nav-links">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                  <span className="ring-outline" />
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Link href="#create" className="btn-primary">
                <Plus className="h-4 w-4" />
                Start creating
              </Link>
              <Link href="#upload" className="btn-secondary">
                <Upload className="h-4 w-4" />
                Upload PDF
              </Link>
            </div>

            <button
              className="menu-button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="mobile-menu"
              >
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#create"
                  className="btn-primary justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <Plus className="h-4 w-4" /> Start creating
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
          className="section-shell text-center"
        >
          <motion.span variants={fadeUp} className="tag-floating mx-auto">
            <Sparkle className="h-4 w-4" /> Slide into your next opportunity
          </motion.span>
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl space-y-6">
            <h1 className="hero-title">
              A centered workspace for resumes that feel bespoke.
            </h1>
            <p className="hero-copy">
              Arrange your story in living panels, animate focus on every section, and glide through crafting, uploading, and presenting your next big move.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <Link href="#create" className="btn-primary">
              <Plus className="h-5 w-5" />
              Create a new resume
            </Link>
            <Link href="#upload" className="btn-secondary">
              <Upload className="h-5 w-5" />
              Upload existing PDF
            </Link>
          </motion.div>
        </motion.section>

        <motion.section
          id="create"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="section-shell"
        >
          <motion.div variants={fadeUp} className="section-heading">
            <p className="section-kicker">Create</p>
            <h2 className="section-title">Shape a resume that brings your momentum to the center</h2>
            <p className="section-copy">
              Focus on the essentials in a calm canvas. Every text field has animated feedback so the form feels alive while you build.
            </p>
          </motion.div>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div variants={fadeUp} className="card-animated">
              <div className="card-gradient" />
              <div className="space-y-6">
                <div>
                  <p className="card-tag">Creative workspace</p>
                  <h3 className="card-title">Craft sections with smooth feedback</h3>
                  <p className="card-copy">
                    Guided prompts and animated inputs keep you anchored while you define experience, achievements, and tone.
                  </p>
                </div>
                <ResumeForm />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="card-animated accent-card">
              <div className="card-gradient" />
              <div className="space-y-6">
                <div className="highlight-shell">
                  <span className="highlight-pill" />
                  <p>Live preview with adaptive spacing</p>
                </div>
                <ul className="space-y-4 text-left text-sm text-slate-200">
                  <li>
                    <span className="list-bullet" /> Typography shifts as you type so every field stays balanced.
                  </li>
                  <li>
                    <span className="list-bullet" /> Smart suggestions nudge you toward quantified impact and clarity.
                  </li>
                  <li>
                    <span className="list-bullet" /> Export-ready formatting without leaving the centered editor.
                  </li>
                </ul>
                <Link href="#inspiration" className="ghost-link">
                  Browse inspiration
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="upload"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="section-shell"
        >
          <motion.div variants={fadeUp} className="section-heading">
            <p className="section-kicker">Upload</p>
            <h2 className="section-title">Recenter old PDFs in a vivid parsing lane</h2>
            <p className="section-copy">
              Drop in existing resumes and watch them reformat into animated cards that are easy to remix and reuse.
            </p>
          </motion.div>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div variants={fadeUp} className="card-animated">
              <div className="card-gradient" />
              <div className="space-y-6">
                <div>
                  <p className="card-tag">Smart import</p>
                  <h3 className="card-title">Bring in your PDF and keep the polish</h3>
                  <p className="card-copy">
                    A guided upload flow with animated status indicators keeps you confident while your story is parsed.
                  </p>
                </div>
                <UploadForm onParsed={(text) => setParsedText(text)} />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="card-animated accent-card">
              <div className="card-gradient" />
              <div className="space-y-5">
                <p className="card-tag">Parsed snapshot</p>
                {parsedText ? (
                  <div className="parsed-panel">
                    <p className="parsed-title">Highlights extracted</p>
                    <pre className="parsed-text">{parsedText}</pre>
                  </div>
                ) : (
                  <p className="card-copy">
                    Once your PDF is processed, we display a glowing snapshot here with animated scroll for easy review.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="inspiration"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="section-shell"
        >
          <motion.div variants={fadeUp} className="section-heading text-center">
            <p className="section-kicker">Inspiration</p>
            <h2 className="section-title">Center stage ideas for your finishing touches</h2>
            <p className="section-copy mx-auto max-w-2xl">
              Let these animated cues guide how you structure accomplishments, build momentum, and present your story with depth.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map(({ title, description, icon: Icon }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="card-animated feature-card"
              >
                <div className="card-gradient" />
                <div className="feature-icon">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="card-title text-xl">{title}</h3>
                <p className="card-copy text-sm">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <footer className="section-shell pt-12 text-center text-xs text-slate-500">
          Designed for storytellers ready to land their next chapter.
        </footer>
      </div>
    </main>
  );
}

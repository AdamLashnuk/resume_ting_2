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
  Upload,
  Bookmark
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
        {/* Hero, Stats, Workspace, Features, Footer remain the same */}
      </div>
    </main>
  );
}

'use client';

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  FileText,
  LayoutDashboard,
  Menu,
  Plus,
  Sparkle,
  Upload,
  UserCheck,
  Wand2,
  Zap,
  Bookmark,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import ResumeForm from "../components/ResumeForm";
import UploadForm from "../components/UploadForm";
import TemplatePreview from "../components/TemplatePreview";

const stats = [
  { label: "Total Resumes", value: "1", caption: "Versions crafted", icon: FileText },
  { label: "Profile Status", value: "Complete", caption: "All sections synced", icon: UserCheck, badgeColor: "text-emerald-600" },
  { label: "Last Updated", value: "Sep 28, 2025", caption: "Keep momentum strong", icon: Zap },
];

const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Workspace", href: "#workspace" },
  { label: "Highlights", href: "#features" },
];

const features = [
  { title: "AI drafting engine", description: "Auto-generate tailored bullet points with tone-aware prompts and instant rewrites.", icon: Wand2 },
  { title: "Multi-resume control", description: "Track every version, compare revisions, and export when the timing is right.", icon: LayoutDashboard },
  { title: "Smart parsing", description: "Upload any PDF and recover perfectly formatted content ready for reuse.", icon: Sparkle },
];

const timeline = [
  { title: "Upload & parse", description: "Drag in a PDF and we extract clean sections with zero formatting headaches." },
  { title: "Remix with AI", description: "Adjust tone, expand wins, and surface the exact skills recruiters want to see." },
  { title: "Deliver anywhere", description: "Ship pixel-perfect resumes, cover letters, and share-ready links in seconds." },
];

const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easing } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardFade = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: easing } },
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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col px-4 pb-20 pt-10 md:px-6">
        {/* Header */}
        <header className="relative mb-12 text-center">
          <div className="glass-panel inline-flex items-center justify-between w-full rounded-full border-white/5 bg-white/5 px-6 py-4 backdrop-blur-3xl">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-inner shadow-white/20">
                <FileText className="h-5 w-5" />
              </div>
              <div className="leading-tight text-left">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-indigo-200">EdgeWorks</p>
                <p className="text-base font-semibold text-white">Creator Studio</p>
              </div>
            </div>

            <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              className="md:hidden rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 shadow-inner shadow-white/10 transition hover:bg-white/20"
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
                  <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-200 transition hover:text-white" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <Link href="#workspace" className="btn-primary justify-center" onClick={() => setMenuOpen(false)}>
                  <Plus className="h-4 w-4" /> Start new resume
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Chat-like Sections */}
        <div className="chat-container space-y-6">
          <div className="chat-bubble system text-center">
            <h1 className="text-3xl font-semibold text-white mb-2">Welcome to Creator Studio</h1>
            <p className="text-slate-300">AI-powered resume builder with a chat-like flow.</p>
          </div>

          <div className="chat-bubble assistant">
            <h2 className="text-xl font-semibold mb-2">Import an Existing Resume</h2>
            <UploadForm onParsed={setParsedText} />
          </div>

          {parsedText && (
            <div className="chat-bubble assistant">
              <h2 className="text-lg font-semibold">Quick Extract</h2>
              <p className="whitespace-pre-wrap text-slate-200">{parsedText.slice(0, 500)}{parsedText.length > 500 ? "…" : ""}</p>
            </div>
          )}

          <div className="chat-bubble user">
            <h2 className="text-xl font-semibold mb-2">Draft a Fresh Version</h2>
            <ResumeForm />
          </div>

          {parsedHtml && (
            <div className="chat-bubble assistant">
              <h2 className="text-lg font-semibold">Parsed Preview</h2>
              <TemplatePreview html={parsedHtml} />
            </div>
          )}

          {features.map((feature) => (
            <div key={feature.title} className="chat-bubble assistant">
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}

          {timeline.map((step, i) => (
            <div key={step.title} className="chat-bubble user">
              <h3 className="font-semibold">{i + 1}. {step.title}</h3>
              <p className="text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} EdgeWorks Creator Studio. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

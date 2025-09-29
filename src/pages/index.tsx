'use client';

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bookmark,
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
import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { useEffect, useRef, useState, type CSSProperties, type ElementType, type HTMLAttributes, type ReactNode } from "react";

import ResumeForm from "../components/ResumeForm";
import UploadForm from "../components/UploadForm";
import TemplatePreview from "../components/TemplatePreview";

const navLinks = [
  { label: "Create", href: "#create" },
  { label: "Upload", href: "#upload" },
  { label: "Inspiration", href: "#inspiration" },
const stats = [
  { label: "Total Resumes", value: "1", caption: "Versions crafted", icon: FileText },
  { label: "Profile Status", value: "Complete", caption: "All sections synced", icon: UserCheck, badgeColor: "text-emerald-600" },
  { label: "Last Updated", value: "Sep 28, 2025", caption: "Keep momentum strong", icon: Zap },
];

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
const navLinks = [
  { label: "Overview", href: "#hero" },
  { label: "Workspace", href: "#workspace" },
  { label: "Highlights", href: "#features" },
];

type RevealElement = ElementType;

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: RevealElement;
  delay?: number;
  children: ReactNode;
}

const combine = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
  style,
  ...rest
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    node.style.setProperty("--reveal-delay", `${delay}ms`);
const features = [
  { title: "AI drafting engine", description: "Auto-generate tailored bullet points with tone-aware prompts and instant rewrites.", icon: Wand2 },
  { title: "Multi-resume control", description: "Track every version, compare revisions, and export when the timing is right.", icon: LayoutDashboard },
  { title: "Smart parsing", description: "Upload any PDF and recover perfectly formatted content ready for reuse.", icon: Sparkle },
];

    if (typeof window === "undefined") {
      node.classList.add("is-visible");
      return;
    }
const timeline = [
  { title: "Upload & parse", description: "Drag in a PDF and we extract clean sections with zero formatting headaches." },
  { title: "Remix with AI", description: "Adjust tone, expand wins, and surface the exact skills recruiters want to see." },
  { title: "Deliver anywhere", description: "Ship pixel-perfect resumes, cover letters, and share-ready links in seconds." },
];

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (prefersReduced?.matches) {
      node.classList.add("is-visible");
      return;
    }
const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

    if (!("IntersectionObserver" in window)) {
      node.classList.add("is-visible");
      return;
    }
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easing } },
};

    const reveal = () => {
      node.classList.add("is-visible");
    };
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px" }
    );
const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);
const cardFade = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: easing } },
};

  const Component = as as RevealElement;
  const componentStyle = {
    ...(style as CSSProperties | undefined),
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [parsedText, setParsedText] = useState<string | null>(null);

  const parsedHtml = parsedText
    ? parsedText
@@ -125,129 +83,41 @@ function Reveal({
        .join("")
    : null;

  return (
    <Component
      {...(rest as Record<string, unknown>)}
      ref={(node: HTMLElement | null) => {
        elementRef.current = node;
      }}
      className={combine("reveal", className)}
      style={componentStyle}
    >
      {children}
    </Component>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [parsedText, setParsedText] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[140px]" />
        <div className="absolute right-[-15%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-[160px]" />
        <div className="absolute inset-x-0 bottom-[-25%] h-[34rem] rounded-[50%] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.18),_transparent_65%)]" />
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute right-[-15%] top-1/3 h-[26rem] w-[26rem] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[10%] h-[30rem] w-[30rem] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.16),_transparent_60%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center pb-24">
        <header className="section-shell">
          <div className="nav-shell">
            <div className="flex items-center gap-3">
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-10 md:px-10">
        {/* Header */}
        <header className="relative mb-16">
          <div className="glass-panel flex items-center justify-between rounded-full border-white/5 bg-white/5 px-6 py-4 backdrop-blur-3xl md:px-8">
            <div className="relative flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-inner shadow-white/20">
                <FileText className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <p className="brand-tag">ResumeForge</p>
                <p className="brand-title">Creator Studio</p>
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-indigo-200">EdgeWorks</p>
                <p className="text-base font-semibold text-white">Creator Studio</p>
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

          {menuOpen && (
            <div className="mobile-menu">
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
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative inline-flex items-center px-3 py-1 transition duration-300 hover:text-white"
                >
                <Link key={item.href} href={item.href} className="relative inline-flex items-center px-3 py-1 transition duration-300 hover:text-white">
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
              <Link href="#workspace" className="btn-secondary">View workspace</Link>
              <Link href="#workspace" className="btn-primary"><Plus className="h-4 w-4" /> Start new resume</Link>
            </div>

            <button
@@ -268,20 +138,11 @@ export default function Home() {
                className="glass-panel mt-4 flex flex-col gap-4 rounded-3xl px-6 py-6 md:hidden"
              >
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-semibold text-slate-200 transition hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                  <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-200 transition hover:text-white" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#workspace"
                  className="btn-primary justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                <Link href="#workspace" className="btn-primary justify-center" onClick={() => setMenuOpen(false)}>
                  <Plus className="h-4 w-4" /> Start new resume
                </Link>
              </motion.div>
@@ -290,58 +151,29 @@ export default function Home() {
        </header>

        {/* Hero */}
        <motion.section
          id="hero"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
        <motion.section id="hero" initial="hidden" animate="visible" variants={fadeUp} className="mb-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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
            <p className="pill-button w-fit bg-white/10 text-xs uppercase tracking-[0.35em] text-indigo-100">AI resume workspace</p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">Launch polished resumes in minutes with guided AI drafting</h1>
            <p className="max-w-xl text-lg text-slate-200">EdgeWorks Creator Studio blends precise prompts with intuitive editing so every application reflects your best wins.</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#workspace" className="btn-primary">
                <Plus className="h-4 w-4" /> Generate a new resume
              </Link>
              <Link href="#features" className="btn-secondary">
                Explore highlights
              </Link>
              <Link href="#workspace" className="btn-primary"><Plus className="h-4 w-4" /> Generate a new resume</Link>
              <Link href="#features" className="btn-secondary">Explore highlights</Link>
            </div>
          </div>

          <motion.div
            variants={cardFade}
            className="glass-panel relative overflow-hidden rounded-3xl border-white/5 bg-white/10 p-8"
          >
          <motion.div variants={cardFade} className="glass-panel relative overflow-hidden rounded-3xl border-white/5 bg-white/10 p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/5" />
            <div className="relative space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-100">Live editor</p>
              <p className="text-lg text-slate-100">
                Upload an existing PDF or craft new content — Creator Studio keeps context synced while AI drafts tailored achievements.
              </p>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-slate-200">
                “Repositioned onboarding to spotlight measurable growth, accelerating recruiter callbacks by 3x.”
              </div>
              <p className="text-lg text-slate-100">Upload an existing PDF or craft new content — Creator Studio keeps context synced while AI drafts tailored achievements.</p>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-slate-200">“Repositioned onboarding to spotlight measurable growth, accelerating recruiter callbacks by 3x.”</div>
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
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="mb-20 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={cardFade} className="floating-card flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
@@ -357,31 +189,18 @@ export default function Home() {
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
        <motion.section id="workspace" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={cardStagger} className="mb-24 space-y-10">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Workspace</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Build, remix, and export in one flow</h2>
            <p className="max-w-2xl text-slate-200">
              Parse an existing resume for quick tweaks or draft a brand-new version using guided prompts. Download ready-to-send PDFs in a click.
            </p>
            <p className="max-w-2xl text-slate-200">Parse an existing resume for quick tweaks or draft a brand-new version using guided prompts. Download ready-to-send PDFs in a click.</p>
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
              <p className="mt-2 text-sm text-slate-300">We’ll scan the PDF, pull out clean text, and prep it for editing.</p>
              <div className="mt-6"><UploadForm onParsed={setParsedText} /></div>
              {parsedText && (
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-slate-200">
                  <p className="mb-2 font-semibold text-white">Quick extract</p>
@@ -392,169 +211,70 @@ export default function Home() {

            <motion.div variants={cardFade} className="floating-card">
              <h3 className="text-xl font-semibold text-white">Draft a fresh version</h3>
              <p className="mt-2 text-sm text-slate-300">
                Share your highlights and we’ll compile a polished PDF using our Gemini-backed renderer.
              </p>
              <div className="mt-6">
                <ResumeForm />
              </div>
              <p className="mt-2 text-sm text-slate-300">Share your highlights and we’ll compile a polished PDF using our Gemini-backed renderer.</p>
              <div className="mt-6"><ResumeForm /></div>
            </motion.div>
          </div>

          {parsedHtml && (
            <motion.div variants={cardFade} className="floating-card border border-white/10 bg-white/5">
              <h3 className="text-xl font-semibold text-white">Parsed preview</h3>
              <p className="mt-2 text-sm text-slate-300">
                Cleaned HTML ready for remixing in the AI writer.
              </p>
              <p className="mt-2 text-sm text-slate-300">Cleaned HTML ready for remixing in the AI writer.</p>
              <TemplatePreview html={parsedHtml} />
            </motion.div>
          )}
        </header>

        <Reveal as="section" id="hero" className="section-shell text-center">
          <Reveal as="span" className="tag-floating mx-auto" delay={50}>
            <Sparkle className="h-4 w-4" /> Slide into your next opportunity
          </Reveal>
          <Reveal className="mx-auto max-w-3xl space-y-6" delay={140}>
            <h1 className="hero-title">
              A centered workspace for resumes that feel bespoke.
            </h1>
            <p className="hero-copy">
              Arrange your story in living panels, animate focus on every section, and glide through crafting, uploading, and presenting your next big move.
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap justify-center gap-4" delay={220}>
            <Link href="#create" className="btn-primary">
              <Plus className="h-5 w-5" />
              Create a new resume
            </Link>
            <Link href="#upload" className="btn-secondary">
              <Upload className="h-5 w-5" />
              Upload existing PDF
            </Link>
          </Reveal>
        </Reveal>

        <Reveal as="section" id="create" className="section-shell">
          <Reveal className="section-heading" delay={60}>
            <p className="section-kicker">Create</p>
            <h2 className="section-title">Shape a resume that brings your momentum to the center</h2>
            <p className="section-copy">
              Focus on the essentials in a calm canvas. Every text field has animated feedback so the form feels alive while you build.
            </p>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="card-animated" delay={120}>
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
            </Reveal>
        </motion.section>

            <Reveal className="card-animated accent-card" delay={200}>
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
            </Reveal>
        {/* Features */}
        <motion.section id="features" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="mb-24">
          <div className="mb-10 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Highlights</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Why creators pick EdgeWorks</h2>
            <p className="max-w-3xl text-slate-200">Powerful automations remove the busywork so you can focus on curating stories that convert interviews.</p>
          </div>
        </Reveal>

        <Reveal as="section" id="upload" className="section-shell">
          <Reveal className="section-heading" delay={60}>
            <p className="section-kicker">Upload</p>
            <h2 className="section-title">Recenter old PDFs in a vivid parsing lane</h2>
            <p className="section-copy">
              Drop in existing resumes and watch them reformat into animated cards that are easy to remix and reuse.
            </p>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="card-animated" delay={120}>
              <div className="card-gradient" />
              <div className="space-y-6">
                <div>
                  <p className="card-tag">Smart import</p>
                  <h3 className="card-title">Bring in your PDF and keep the polish</h3>
                  <p className="card-copy">
                    A guided upload flow with animated status indicators keeps you confident while your story is parsed.
                  </p>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={cardFade} className="floating-card space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <feature.icon className="h-5 w-5" />
                </div>
                <UploadForm onParsed={(text) => setParsedText(text)} />
              </div>
            </Reveal>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

            <Reveal className="card-animated accent-card" delay={200}>
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
            </Reveal>
        {/* Timeline */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="mb-24">
          <div className="mb-8 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Workflow</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">From upload to share-ready in three steps</h2>
          </div>
        </Reveal>

        <Reveal as="section" id="inspiration" className="section-shell">
          <Reveal className="section-heading text-center" delay={80}>
            <p className="section-kicker">Inspiration</p>
            <h2 className="section-title">Center stage ideas for your finishing touches</h2>
            <p className="section-copy mx-auto max-w-2xl">
              Let these animated cues guide how you structure accomplishments, build momentum, and present your story with depth.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map(({ title, description, icon: Icon }, index) => (
              <Reveal
                key={title}
                className="card-animated feature-card"
                delay={120 + index * 80}
              >
                <div className="card-gradient" />
                <div className="feature-icon">
                  <Icon className="h-6 w-6" />
          <div className="space-y-6">
            {timeline.map((step, index) => (
              <motion.div key={step.title} variants={cardFade} className="floating-card flex flex-col gap-3 md:flex-row md:items-center">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">{index + 1}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-slate-300">{step.description}</p>
                </div>
                <h3 className="card-title text-xl">{title}</h3>
                <p className="card-copy text-sm">{description}</p>
              </Reveal>
              </motion.div>
            ))}
          </div>
        </Reveal>
        </motion.section>

        <footer className="section-shell pt-12 text-center text-xs text-slate-500">
          Designed for storytellers ready to land their next chapter.
        {/* Footer */}
        <footer className="mt-auto border-t border-white/10 pt-10 text-sm text-slate-400">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} EdgeWorks Creator Studio. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#hero" className="transition hover:text-white">Back to top</Link>
              <Link href="mailto:hello@edgeworks.ai" className="transition hover:text-white">Contact support</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>

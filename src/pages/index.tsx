'use client';

import Link from "next/link";
import {
  Bookmark,
  FileText,
  Menu,
  MessageCircle,
  Plus,
  Sparkle,
  Upload,
  Wand2,
} from "lucide-react";
import type {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import ResumeForm from "../components/ResumeForm";
import UploadForm from "../components/UploadForm";

const navLinks = [
  { label: "Create", href: "#create" },
  { label: "Upload", href: "#upload" },
  { label: "Inspiration", href: "#inspiration" },
];

const footerLinks = [
  { label: "Product", href: "#create" },
  { label: "Import", href: "#upload" },
  { label: "Inspiration", href: "#inspiration" },
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

    if (typeof window === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (prefersReduced?.matches) {
      node.classList.add("is-visible");
      return;
    }

    if (!("IntersectionObserver" in window)) {
      node.classList.add("is-visible");
      return;
    }

    const reveal = () => {
      node.classList.add("is-visible");
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

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  const Component = as as RevealElement;
  const componentStyle = {
    ...(style as CSSProperties | undefined),
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

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

import { AnimatePresence, motion } from "framer-motion";
import {
  FileText,
  LayoutDashboard,
  Menu as Menu2,
  Plus as Plus2,
  Sparkle as Sparkle2,
  Upload as Upload2,
  UserCheck,
  Wand2 as Wand22,
  Zap,
  Bookmark as Bookmark2,
} from "lucide-react";
import { useEffect as useEffect2, useRef as useRef2, useState as useState2, type CSSProperties as CSSProperties2, type ElementType as ElementType2, type HTMLAttributes as HTMLAttributes2, type ReactNode as ReactNode2 } from "react";

import ResumeForm from "../components/ResumeForm";
import UploadForm from "../components/UploadForm";
import TemplatePreview from "../components/TemplatePreview";

const stats = [
  { label: "Total Resumes", value: "1", caption: "Versions crafted", icon: FileText },
  { label: "Profile Status", value: "Complete", caption: "All sections synced", icon: UserCheck, badgeColor: "text-emerald-600" },
  { label: "Last Updated", value: "Sep 28, 2025", caption: "Keep momentum strong", icon: Zap },
];

const navLinks2 = [
  { label: "Overview", href: "#hero" },
  { label: "Workspace", href: "#workspace" },
  { label: "Highlights", href: "#features" },
];

const features = [
  { title: "AI drafting engine", description: "Auto-generate tailored bullet points with tone-aware prompts and instant rewrites.", icon: Wand22 },
  { title: "Multi-resume control", description: "Track every version, compare revisions, and export when the timing is right.", icon: LayoutDashboard },
  { title: "Smart parsing", description: "Upload any PDF and recover perfectly formatted content ready for reuse.", icon: Sparkle2 },
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

  const handleAnchorNav = useCallback((event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    if (typeof window === "undefined") return;

    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
    setMenuOpen(false);
  }, []);

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
        <div className="absolute left-1/2 top-[-10%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[140px]" />
        <div className="absolute right-[-15%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-[160px]" />
        <div className="absolute inset-x-0 bottom-[-25%] h-[34rem] rounded-[50%] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.18),_transparent_65%)]" />
      </div>

      <div className="page-shell">
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
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  onClick={(event) => handleAnchorNav(event, item.href)}
                >
                  {item.label}
                  <span className="ring-outline" />
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="#create"
                className="btn-primary"
                onClick={(event) => handleAnchorNav(event, "#create")}
              >
                <Plus className="h-4 w-4" />
                Start creating
              </Link>
              <Link
                href="#upload"
                className="btn-secondary"
                onClick={(event) => handleAnchorNav(event, "#upload")}
              >
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
                  onClick={(event) => handleAnchorNav(event, item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#create"
                className="btn-primary justify-center"
                onClick={(event) => handleAnchorNav(event, "#create")}
              >
                <Plus className="h-4 w-4" /> Start creating
              </Link>
            </div>
          )}
        </header>

        <Reveal as="section" id="hero" className="section-shell hero-grid">
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
            <Link
              href="#create"
              className="btn-primary"
              onClick={(event) => handleAnchorNav(event, "#create")}
            >
              <Plus className="h-5 w-5" />
              Create a new resume
            </Link>
            <Link
              href="#upload"
              className="btn-secondary"
              onClick={(event) => handleAnchorNav(event, "#upload")}
            >
              <Upload className="h-5 w-5" />
              Upload existing PDF
            </Link>
          </Reveal>
        </Reveal>

        <Reveal as="section" id="create" className="section-shell centered-section">
          <Reveal className="section-heading" delay={60}>
            <p className="section-kicker">Create</p>
            <h2 className="section-title">Shape a resume that brings your momentum to the center</h2>
            <p className="section-copy">
              Focus on the essentials in a calm canvas. Every text field has animated feedback so the form feels alive while you build.
            </p>
          </Reveal>
          <div className="workspace-grid">
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
          </div>
        </Reveal>
        <Reveal as="section" id="upload" className="section-shell centered-section">
          <Reveal className="section-heading" delay={60}>
            <p className="section-kicker">Upload</p>
            <h2 className="section-title">Recenter old PDFs in a vivid parsing lane</h2>
            <p className="section-copy">
              Drop in existing resumes and watch them reformat into animated cards that are easy to remix and reuse.
            </p>
          </Reveal>
          <div className="workspace-grid">
            <Reveal className="card-animated" delay={120}>
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
            </Reveal>

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
          </div>
        </Reveal>

        <Reveal as="section" id="inspiration" className="section-shell inspiration-grid">
          <Reveal className="section-heading text-center" delay={80}>
            <p className="section-kicker">Inspiration</p>
            <h2 className="section-title">Center stage ideas for your finishing touches</h2>
            <p className="section-copy mx-auto max-w-2xl">
              Let these animated cues guide how you structure accomplishments, build momentum, and present your story with depth.
            </p>
          </Reveal>
          <div className="inspiration-panels">
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
                  </div>
                  <h3 className="card-title text-xl">{title}</h3>
                  <p className="card-copy text-sm">{description}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="chat-panel" delay={240}>
              <div className="chat-header">
                <div className="chat-icon">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <p>ResumeForge Assist</p>
              </div>
              <div className="chat-thread">
                <div className="chat-bubble user">Could you help me describe my latest project?</div>
                <div className="chat-bubble assistant">
                  Absolutely! Highlight the impact first, then quantify the results. Mention the tools you used and the team collaboration.
                </div>
                <div className="chat-bubble user">I increased onboarding completion by 35%.</div>
                <div className="chat-bubble assistant">
                  Perfect. Try: “Spearheaded a multi-step onboarding refresh that lifted completion by 35% in the first quarter.”
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <footer className="footer-shell">
          <nav className="footer-links">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleAnchorNav(event, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="footer-note">Designed for storytellers ready to land their next chapter.</p>
        </footer>
      </div>
    </main>
  );
}

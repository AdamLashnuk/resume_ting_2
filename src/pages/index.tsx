'use client';

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bookmark,
  FileText,
  Menu,
  MessageCircle,
  Plus,
  Sparkle,
  Upload,
  Wand2,
  LayoutDashboard,
  UserCheck,
  Zap,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  type MouseEvent
} from "react";

import ResumeForm from "../components/ResumeForm";
import UploadForm from "../components/UploadForm";
import TemplatePreview from "../components/TemplatePreview";

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
      {/* The rest of your JSX stays exactly the same */}
    </main>
  );
}


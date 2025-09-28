import { FileText, Menu, Plus, UserCheck, Zap } from "lucide-react";
import { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import UploadForm from "../components/UploadForm";

const stats = [
  {
    label: "Total Resumes",
    value: "1",
    icon: FileText,
  },
  {
    label: "Profile Status",
    value: "Complete",
    icon: UserCheck,
    badgeColor: "text-emerald-600",
  },
  {
    label: "Last Updated",
    value: "Sep 28, 2025",
    icon: Zap,
  },
];

export default function Home() {
  const [parsedText, setParsedText] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-16 pt-10 md:px-10">
        <header className="flex items-center justify-between rounded-2xl border border-white/40 bg-white/80 px-6 py-4 shadow-lg shadow-indigo-100 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white shadow-inner">
              <FileText className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-wide text-slate-500">ResumeForge</p>
              <p className="font-semibold text-slate-800">App Preview</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a className="text-slate-900" href="#">Dashboard</a>
            <a className="hover:text-slate-900" href="#">Personal Info</a>
            <a className="hover:text-slate-900" href="#">Create Resume</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-500">
            <Plus className="h-4 w-4" />
            Create Resume
          </button>
          <button className="md:hidden text-slate-600">
            <Menu className="h-6 w-6" />
          </button>
        </header>

        <section className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/70 px-4 py-2 text-sm font-medium text-indigo-600">
              Build professional resumes & CVs
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Build Professional <span className="text-indigo-600">Resumes & CVs</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Create stunning resumes that get you noticed. Choose from elegant templates
              and let your experience shine. Interactive tools guide you through every step
              of the process.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500">
                <Plus className="h-5 w-5" />
                Create New Resume
              </button>
              <button className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900">
                View Tutorials
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:items-start">
            {stats.map(({ label, value, icon: Icon, badgeColor }) => (
              <div
                key={label}
                className="flex h-full flex-col gap-3 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-lg shadow-indigo-100 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-wider text-slate-400 ${badgeColor ?? ""}`}>
                    {label}
                  </span>
                </div>
                <p className="text-2xl font-semibold text-slate-900">{value}</p>
                <p className="text-sm text-slate-500">
                  {label === "Total Resumes" && "Resumes created"}
                  {label === "Profile Status" && "Complete your information"}
                  {label === "Last Updated" && "Keep your resume fresh"}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Your Resumes</h2>
              <p className="text-sm text-slate-500">Manage uploads and craft new versions with AI support.</p>
            </div>
            <button className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900 md:block">
              Manage Templates
            </button>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl shadow-indigo-100 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900">Upload an existing resume</h3>
              <p className="mt-2 text-sm text-slate-500">
                Parse the content from a PDF resume and reuse it when crafting updated versions.
              </p>
              <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50/60 p-4">
                <UploadForm onParsed={(t) => setParsedText(t)} />
                {parsedText && (
                  <div className="mt-4 max-h-36 overflow-y-auto rounded-xl bg-white p-4 text-sm text-slate-600 shadow-inner">
                    <h4 className="mb-2 font-semibold text-slate-800">Parsed PDF Content</h4>
                    <pre className="whitespace-pre-wrap">{parsedText}</pre>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl shadow-indigo-100 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-900">Create a new resume</h3>
              <p className="mt-2 text-sm text-slate-500">
                Use guided prompts to craft each section of your resume with tailored suggestions.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                <ResumeForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ResumeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobs, setJobs] = useState([{ employer: "", title: "", description: "" }]);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function updateJob(idx: number, key: "employer" | "title" | "description", val: string) {
    setJobs((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [key]: val };
      return next;
    });
    setDownloadLink(null);
  }

  function addJob() {
    setJobs((prev) => [...prev, { employer: "", title: "", description: "" }]);
    setDownloadLink(null);
  }

  async function handleGenerate(e?: FormEvent<HTMLFormElement>) {
    e?.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ personal: { name, email }, jobs }),
      });

      if (!res.ok) {
        throw new Error("Error generating resume");
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setDownloadLink(url);
    } catch (error) {
      console.error(error);
      alert("Something went wrong generating your resume. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleGenerate}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="field-group">
          <span className="field-label">Full name</span>
          <span className="field-shell">
            <input
              className="field-input"
              placeholder="Taylor Rivera"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setDownloadLink(null);
              }}
            />
          </span>
        </label>
        <label className="field-group">
          <span className="field-label">Email</span>
          <span className="field-shell">
            <input
              className="field-input"
              placeholder="taylor@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setDownloadLink(null);
              }}
            />
          </span>
        </label>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="field-heading">Experience highlights</p>
          <button type="button" className="pill-button" onClick={addJob}>
            <Plus className="h-4 w-4" /> Add role
          </button>
        </div>

        {jobs.map((job, index) => (
          <div key={`job-${index}`} className="floating-card">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="field-group">
                <span className="field-label">Employer</span>
                <span className="field-shell">
                  <input
                    className="field-input"
                    placeholder="Orbit Labs"
                    value={job.employer}
                    onChange={(e) => updateJob(index, "employer", e.target.value)}
                  />
                </span>
              </label>
              <label className="field-group">
                <span className="field-label">Title</span>
                <span className="field-shell">
                  <input
                    className="field-input"
                    placeholder="Product Designer"
                    value={job.title}
                    onChange={(e) => updateJob(index, "title", e.target.value)}
                  />
                </span>
              </label>
            </div>
            <label className="field-group">
              <span className="field-label">Description</span>
              <span className="field-shell">
                <textarea
                  className="field-textarea"
                  placeholder="Lead immersive onboarding experiments that lifted conversions by 28%."
                  value={job.description}
                  onChange={(e) => updateJob(index, "description", e.target.value)}
                  rows={4}
                />
              </span>
            </label>
          </div>
        ))}
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? "Generating resume..." : "Generate resume"}
      </button>

      {downloadLink && (
        <a href={downloadLink} download="resume.pdf" className="btn-secondary w-full justify-center">
          Download your resume
        </a>
      )}
    </form>
  );
}

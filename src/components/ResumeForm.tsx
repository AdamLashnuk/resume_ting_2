import { useState } from "react";

export default function ResumeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobs, setJobs] = useState([{ employer: "", title: "", description: "" }]);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function updateJob(idx: number, key: string, val: string) {
    const copy = [...jobs];
    (copy[idx] as any)[key] = val;
    setJobs(copy);
  }

  function addJob() {
    setJobs([...jobs, { employer: "", title: "", description: "" }]);
  }

  async function handleGenerate() {
    setLoading(true);
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ personal: { name, email }, jobs })
    });

    if (!res.ok) {
      setLoading(false);
      alert(`Error generating resume`);
      return;
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    setDownloadLink(url);
    setLoading(false);
  }

  return (
    <div className="space-y-4">
      <input
        className="input input-bordered w-full"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input input-bordered w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3 className="text-lg font-semibold">Jobs</h3>
      {jobs.map((j, i) => (
        <div key={i} className="p-4 border rounded-lg bg-gray-50 space-y-2">
          <input
            className="input input-bordered w-full"
            placeholder="Employer"
            value={j.employer}
            onChange={(e) => updateJob(i, "employer", e.target.value)}
          />
          <input
            className="input input-bordered w-full"
            placeholder="Title"
            value={j.title}
            onChange={(e) => updateJob(i, "title", e.target.value)}
          />
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Description"
            value={j.description}
            onChange={(e) => updateJob(i, "description", e.target.value)}
          />
        </div>
      ))}

        <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          Click Me
        </button>


      <button
        onClick={handleGenerate}
        disabled={loading}
        className={`btn ${loading ? "btn-disabled" : "btn-success"} w-full`}
      >
        {loading ? "Generating..." : "Generate Resume"}
      </button>

      {downloadLink && (
        <a
          href={downloadLink}
          download="resume.pdf"
          className="btn btn-info w-full mt-2"
        >
          Download Resume
        </a>
      )}
    </div>
  );
}

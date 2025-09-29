import { useState } from "react";

export default function UploadForm({ onParsed }: { onParsed: (text: string) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!file || loading) return;
    setLoading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: form });
      if (!res.ok) {
        throw new Error("Upload failed");
      }
      const json = await res.json();
      onParsed(json.text);
    } catch (error) {
      console.error(error);
      alert("We couldn't parse that PDF. Please try another file.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-5">
      <label className="upload-area">
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="hidden"
        />
        <div className="upload-glow" />
        <div className="space-y-2 text-center">
          <p className="upload-title">Drop your PDF here</p>
          <p className="upload-copy">
            {file ? file.name : "or click to browse files"}
          </p>
        </div>
      </label>
      <button
        type="button"
        onClick={handleUpload}
        disabled={!file || loading}
        className="btn-primary w-full"
      >
        {loading ? "Parsing resume..." : "Parse uploaded resume"}
      </button>
    </div>
  );
}

import { useState } from "react";

export default function UploadForm({ onParsed }: { onParsed: (text: string) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!file) return;
    setLoading(true);
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: form });
    const json = await res.json();
    setLoading(false);
    onParsed(json.text);
  }

  return (
    <div className="flex flex-col space-y-4">
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        className="file-input file-input-bordered w-full"
      />
<button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
  Click Me
</button>

    </div>
  );
}

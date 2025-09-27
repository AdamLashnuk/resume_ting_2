import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import UploadForm from "../components/UploadForm";
import ResumeForm from "../components/ResumeForm";
import AnimatedBackground from "../components/AnimatedBackground";
import { useState } from "react";

export default function Home() {
  const [parsedText, setParsedText] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 text-white overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Rocket className="mx-auto w-16 h-16 text-yellow-300 animate-bounce" />
          <h1 className="text-5xl font-extrabold drop-shadow-lg">Modern Resume Builder</h1>
          <p className="text-lg text-gray-200">Interactive. Colorful. Powered by AI.</p>
        </motion.div>

        {/* Upload Section */}
        <motion.section
          className="bg-white text-gray-900 p-6 rounded-xl shadow-xl space-y-4 backdrop-blur-lg bg-opacity-90"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold flex items-center gap-2">
            Upload Your Resume
          </h2>
          <UploadForm onParsed={(t) => setParsedText(t)} />
          {parsedText && (
            <div className="mt-4 bg-gray-100 p-3 rounded-lg max-h-40 overflow-y-auto">
              <h3 className="font-semibold mb-2">Parsed PDF Content:</h3>
              <pre className="whitespace-pre-wrap text-sm">{parsedText}</pre>
            </div>
          )}
        </motion.section>

        {/* Resume Section */}
        <motion.section
          className="bg-white text-gray-900 p-6 rounded-xl shadow-xl space-y-4 backdrop-blur-lg bg-opacity-90"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="text-pink-500" /> Create a Stunning Resume
          </h2>
          <ResumeForm />
        </motion.section>
      </div>
    </main>
  );
}

import type { NextApiRequest, NextApiResponse } from "next";
import { callGemini } from "../../lib/gemini";
import { htmlToPdf } from "../../lib/pdf";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const { personal, jobs } = req.body;
    if (!personal || !jobs) {
      return res.status(400).send("Missing personal or jobs data");
    }

    // Create a resume prompt for Gemini
    const prompt = `
      Generate a professional resume in HTML format using this info:
      Name: ${personal.name}
      Email: ${personal.email}
      Jobs: ${jobs.map((j: any) => `${j.title} at ${j.employer} - ${j.description}`).join("; ")}
    `;

    // Call Gemini
    const html = await callGemini(prompt);

    if (!html || html.trim().length < 20) {
      return res.status(500).send("Gemini returned empty response");
    }

    // Convert to PDF
    const pdfBuffer = await htmlToPdf(html);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
    res.send(pdfBuffer);
  } catch (error: any) {
    console.error("Generate API Error:", error);
    res.status(500).send("Error generating resume: " + error.message);
  }
}

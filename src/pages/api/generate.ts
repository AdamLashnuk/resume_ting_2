import type { NextApiRequest, NextApiResponse } from "next";
import { callGemini } from "../../lib/gemini";
import { htmlToPdf } from "../../lib/pdf";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

    const { personal, jobs } = req.body;
    if (!personal || !jobs) return res.status(400).send("Missing personal or job data");

    const prompt = `
      Generate a professional resume in clean HTML format.
      Personal Info: ${personal.name}, ${personal.email}
      Work Experience:
      ${jobs.map((j: any) => `${j.title} at ${j.employer} - ${j.description}`).join("\n")}
    `;

    let html;
    try {
      html = await callGemini(prompt);
    } catch (err) {
      console.error("Gemini failed:", err);
      html = `
        <html><body><h1>${personal.name}</h1>
        <p>Email: ${personal.email}</p>
        <h2>Work Experience</h2>
        <ul>${jobs.map((j: any) => `<li>${j.title} at ${j.employer} - ${j.description}</li>`).join("")}</ul>
        </body></html>
      `;
    }

    const pdfBuffer = await htmlToPdf(html);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
    res.send(pdfBuffer);

  } catch (error: any) {
    console.error("Generate API Error:", error);
    res.status(500).send("Error generating resume: " + error.message);
  }
}

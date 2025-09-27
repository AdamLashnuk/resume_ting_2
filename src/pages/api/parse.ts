import type { NextApiRequest, NextApiResponse } from "next";
import { parsePdf } from "../../lib/pdf";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    if (!req.body || !req.body.file) {
      return res.status(400).send("No file uploaded");
    }

    const buffer = Buffer.from(req.body.file, "base64");
    const text = await parsePdf(buffer);
    res.status(200).json({ text });

  } catch (err: any) {
    console.error("PDF Parse Error:", err);
    res.status(500).send("Error parsing PDF: " + err.message);
  }
}

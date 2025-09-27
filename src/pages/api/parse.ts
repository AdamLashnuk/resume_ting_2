import type { NextApiRequest, NextApiResponse } from "next";
import { parsePdf } from "@/lib/pdf";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { base64 } = req.body; // expect base64-encoded PDF content
    const buffer = Buffer.from(base64, "base64");
    const text = await parsePdf(buffer);
    res.status(200).json({ text });
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
}

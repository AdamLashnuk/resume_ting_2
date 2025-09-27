import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: { bodyParser: { sizeLimit: "10mb" } }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

    if (!req.body || !req.body.file) return res.status(400).send("No file uploaded");

    // Simply return the file for parsing later
    res.status(200).json({ file: req.body.file });

  } catch (err: any) {
    console.error("Upload Error:", err);
    res.status(500).send("Error uploading file: " + err.message);
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import { parsePdf } from "../../lib/pdf";


export const config = { api: { bodyParser: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Upload error" });

    const file = files.file as formidable.File;
    const buffer = fs.readFileSync(file.filepath);
    const parsedText = await parsePdf(buffer);

    res.json({ text: parsedText });
  });
}

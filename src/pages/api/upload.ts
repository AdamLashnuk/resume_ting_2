import type { NextApiRequest, NextApiResponse } from "next";
import formidable, { type Fields, type Files } from "formidable";
import fs from "node:fs/promises";
import { parsePdf } from "../../lib/pdf";

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseForm(req: NextApiRequest) {
  const form = formidable({ multiples: false });

  return new Promise<{ fields: Fields; files: Files }>((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ fields, files });
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const { files } = await parseForm(req);
    const uploaded = files.file;

    if (!uploaded) {
      res.status(400).send("No file uploaded");
      return;
    }

    const fileArray = Array.isArray(uploaded) ? uploaded : [uploaded];
    const file = fileArray[0];

    if (!file || !file.filepath) {
      res.status(400).send("Invalid file payload");
      return;
    }

    const buffer = await fs.readFile(file.filepath);
    const text = await parsePdf(buffer);

    await fs.unlink(file.filepath).catch(() => {});

    res.status(200).json({ text });
  } catch (err: any) {
    console.error("Upload Error:", err);
    res.status(500).send("Error uploading file: " + err.message);
  }
}

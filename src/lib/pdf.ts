import puppeteer from "puppeteer";
import pdf from "pdf-parse";

// Convert HTML to PDF
export async function htmlToPdf(html: string): Promise<Buffer> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true
  });

  await browser.close();
  return pdfBuffer;
}

// Parse uploaded PDF into text
export async function parsePdf(buffer: Buffer): Promise<string> {
  const data = await pdf(buffer);
  return data.text;
}

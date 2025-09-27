export default function TemplatePreview({ html }: { html: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Template Preview</h3>
      <div
        className="prose prose-sm max-w-none border border-gray-100 rounded-md p-4 bg-gray-50"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

// Renders a schema.org JSON-LD block. Safe in Server Components; search
// engines and AI crawlers read application/ld+json anywhere in the document.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Content is our own static object, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

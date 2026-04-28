/**
 * Renders JSON-LD structured data using React 18's script tag children support.
 * No dangerouslySetInnerHTML needed — React handles script content as text.
 */
export default function JsonLd({
  schema,
}: {
  schema: Record<string, unknown> | Record<string, unknown>[]
}) {
  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  )
}

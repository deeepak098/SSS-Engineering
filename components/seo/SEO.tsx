// App Router uses `export const metadata` per page for tags.
// This component ONLY injects JSON-LD structured data.
export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const SITE = {
  name: 'SSS Engineering',
  url: 'https://sss-engineering.com',
  description:
    'Industrial egg tray manufacturing and machinery export by SSS Engineering. Bulk trays for poultry farms and fully automatic machinery for manufacturers worldwide.',
};

export function baseMetadata(path: string, title: string, description: string) {
  const url = `${SITE.url}${path}`;
  return {
    title: `${title} | ${SITE.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: `${title} | ${SITE.name}`,
      description,
    },
  };
}

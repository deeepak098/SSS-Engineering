import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sss-engineering.com';
  return [
    { url: base + '/', lastModified: new Date() },
    { url: base + '/trays', lastModified: new Date() },
    { url: base + '/machinery', lastModified: new Date() },
    { url: base + '/gallery', lastModified: new Date() },
    { url: base + '/about', lastModified: new Date() },
    { url: base + '/contact', lastModified: new Date() },
  ];
}

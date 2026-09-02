import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Gallery — ${SITE_NAME}`,
  description: 'Factory photos and installed machines at client sites.',
};

export default function GalleryPage() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop', caption: 'Raw pulp molding line' },
    { src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop', caption: 'Machine assembly floor' },
    { src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop', caption: 'Installed line at a client site' },
    { src: 'https://images.unsplash.com/photo-1518770660439-4636500cff5f?q=80&w=1200&auto=format&fit=crop', caption: 'Quality inspection' },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="max-w-3xl mb-12 md:mb-16">
        <h1 className="font-serif text-4xl md:text-6xl tracking-tight mb-4">Gallery</h1>
        <p className="text-ink/70 text-base md:text-lg leading-relaxed">Real photos from our factory and from installations at client production sites.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {images.map((img, i) => (
          <figure key={i} className="group overflow-hidden rounded-2xl border border-earth-200/40 shadow-sm">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
            </div>
            <figcaption className="text-xs text-ink/50 px-4 py-3">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

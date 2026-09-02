import { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';
import FormBuilder from '@/components/forms/FormBuilder';

export const metadata: Metadata = {
  title: `Contact — ${SITE_NAME}`,
  description: 'Reach out for tray bulk orders or machinery quotes.',
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <header className="max-w-3xl mb-14 md:mb-20">
        <h1 className="font-serif text-4xl md:text-6xl tracking-tight mb-4">Contact</h1>
        <p className="text-ink/70 text-base md:text-lg leading-relaxed">Two separate forms — choose the one that matches your request. Your message is written to our database and triggers a WhatsApp notification to our team.</p>
      </header>
      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        <article className="rounded-2xl bg-earth-50 border border-earth-200/40 p-8 md:p-10">
          <h2 className="font-serif text-2xl mb-5">Tray inquiry</h2>
          <FormBuilder
            inquiryType="tray"
            fields={[
              { name: 'name', label: 'Name', required: true },
              { name: 'phone', label: 'Phone / WhatsApp', required: true },
              { name: 'message', label: 'Quantity, delivery region, and frequency', type: 'textarea', full: true, required: true },
            ]}
            submitLabel="Send tray inquiry"
          />
        </article>
        <article className="rounded-2xl bg-ink text-paper p-8 md:p-10">
          <h2 className="font-serif text-2xl mb-5">Machinery quote</h2>
          <FormBuilder
            variant="dark"
            inquiryType="machine"
            fields={[
              { name: 'name', label: 'Name', required: true },
              { name: 'email', label: 'Email', required: true },
              { name: 'country', label: 'Country', required: true },
              { name: 'message', label: 'Intended capacity, budget range, and timeline', type: 'textarea', full: true, required: true },
            ]}
            submitLabel="Send machinery quote"
          />
        </article>
      </div>
    </section>
  );
}

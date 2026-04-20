import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Coach Group to ask about the Community Coaching Programme, partnerships, community initiatives, or future corporate coaching opportunities.',
  alternates: {
    canonical: '/contact',
  },
};

const contactReasons = [
  'Bring Coach Group into a school, programme, or community initiative.',
  'Explore a pilot or future-fit corporate coaching partnership.',
  'Volunteer, collaborate, or ask about upcoming opportunities.',
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-950 py-24 text-white">
        <div className="page-shell">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold">Let&apos;s build something useful together.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you want to partner with us, join a programme, or explore coaching for your
            organisation, we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="page-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {contactReasons.map((reason) => (
              <article
                key={reason}
                className="rounded-3xl border border-slate-200 bg-stone-50 p-6 text-slate-700 shadow-sm"
              >
                {reason}
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Coaching',
  description:
    'Explore Coach Group’s upcoming corporate coaching offering for organisations that want stronger leadership, practical coaching support, and healthier team culture.',
  alternates: {
    canonical: '/corporate-coaching',
  },
};

export default function CorporateCoachingPage() {
  return (
    <>
      <section className="bg-slate-900 py-24 text-white">
        <div className="page-shell text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Corporate Coaching
          </p>
          <h1 className="mt-4 text-5xl font-bold md:text-6xl">12-Month Coaching Programme</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">
            A structured coaching experience for organisations that want stronger leadership,
            healthier culture, and more capable teams.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="page-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl text-slate-900">What we are building</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The corporate programme is being shaped for organisations that want more than a
              one-off workshop. It focuses on long-term coaching support, practical leadership
              development, and measurable behavioural change.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Teams will be able to work through coaching cycles that strengthen communication,
              accountability, and team trust over time.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-stone-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
              Coming Soon
            </p>
            <p className="mt-4 text-slate-600">
              If you want early updates or a pilot conversation, use the contact page and we can
              start shaping the right offer with you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

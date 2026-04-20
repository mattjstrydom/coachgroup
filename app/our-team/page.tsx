import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the thinking behind Coach Group’s team approach to community coaching, facilitation, mentoring, and programme delivery.',
  alternates: {
    canonical: '/our-team',
  },
};

const teamPrinciples = [
  'We coach with empathy, structure, and clear accountability.',
  'We build programmes that work in real communities and real organisations.',
  'We care about transferable growth, not short-lived inspiration.',
];

const teamRoles = [
  {
    title: 'Facilitators',
    detail: 'They create learning spaces that are practical, respectful, and energising.',
  },
  {
    title: 'Coaches',
    detail: 'They help participants translate insight into habits, decisions, and accountable action.',
  },
  {
    title: 'Programme Builders',
    detail: 'They shape the structure, partnerships, and delivery rhythm that keep the work sustainable.',
  },
];

export default function OurTeamPage() {
  return (
    <>
      <section className="bg-stone-100 py-24">
        <div className="page-shell">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Our Team
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl text-slate-900">
            A coaching team focused on meaningful, lasting development.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Coach Group brings together facilitators, coaches, and community-minded builders who
            care about helping people grow into stronger contributors wherever they serve.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="page-shell grid gap-6 md:grid-cols-3">
          {teamPrinciples.map((principle) => (
            <article
              key={principle}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-lg leading-8 text-slate-700">{principle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              How We Show Up
            </p>
            <h2 className="mt-4 text-4xl">Different roles, one shared standard of care.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {teamRoles.map((role) => (
              <article
                key={role.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-2xl font-semibold">{role.title}</h3>
                <p className="mt-4 leading-8 text-slate-300">{role.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

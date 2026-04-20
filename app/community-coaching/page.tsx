import type { Metadata } from 'next';
import CoachingProgramCard from '@/components/CoachingProgramCard';

export const metadata: Metadata = {
  title: 'Community Coaching Programme',
  description:
    'Learn about Coach Group’s Community Coaching Programme, including adaptable workshops, programme time allocation, accredited coaching support, and the 30-person impact model.',
  alternates: {
    canonical: '/community-coaching',
  },
};

const pillars = [
  {
    title: 'Relevant',
    description:
      'The content, case studies, activities, and examples are aligned to the South African market and the lived realities of the people in the programme.',
    timeAllocation: 'Proudly South African',
  },
  {
    title: 'Adaptable',
    description:
      'The programme is adapted according to the needs, challenges, and environment of the specific client, industry, or community.',
    timeAllocation: 'Industry or community specific',
  },
  {
    title: '30-Person Impact Model',
    description:
      'Intern coaches gain accredited and practical experience, students complete an 18-month journey, and communities benefit from trained community coaches.',
    impactModel: true,
  },
];

const deliveryModel = [
  {
    title: '10% Contact Sessions',
    detail:
      '9 workshops, 15 modules, and an accredited coaching and mentoring course anchor the learning journey.',
  },
  {
    title: '40% Online and Community Sessions',
    detail:
      'Peer gatherings, support structures, and online coaching sessions extend the programme into everyday life.',
  },
  {
    title: '50% Self Study and Assignments',
    detail:
      'Independent learning and assignments help participants practise and apply the content consistently.',
  },
];

export default function CommunityCoachingPage() {
  return (
    <>
      <section className="bg-slate-950 py-24 text-white">
        <div className="page-shell">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Community Coaching
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold">Community Coaching Programme</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A programme to empower people to be involved in and take responsibility for the
            enhancement and development of their own communities.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="page-shell">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <CoachingProgramCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              Programme Time Allocation
            </p>
            <h2 className="mt-4 text-4xl text-slate-900">
              A blended model for learning, support, and application.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {deliveryModel.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-4 leading-8 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

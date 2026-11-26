import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the facilitators and coaches behind Coach Group — over 35 years of combined experience in coaching, mentoring, leadership development, and community upliftment.',
  alternates: { canonical: '/our-team' },
};

// Place headshot files in public/images/team/ and add the src field to each member.
const team = [
  {
    name: 'Sanette Wevell',
    role: 'Founder & Lead Facilitator',
    photo: null as string | null,
    bio: [
      'Sanette Wevell is a dynamic businesswoman with 35 years of experience in business, coaching, and community development. She is the founder of Ndzalama Training and the driving force behind the Coach Group Community Coaching Programme.',
      'Her career spans leadership roles across corporate South Africa and deep involvement in community upliftment initiatives. She brings a rare combination of business rigour and genuine care for people to every programme she designs and delivers.',
    ],
  },
  {
    name: 'Mmabatho Lithakong',
    role: 'Co-Facilitator',
    photo: null as string | null,
    bio: [
      'Mmabatho Lithakong joined Coach Group as a participant in the 2021 pilot cohort. Her engagement, insight, and natural ability to support others through the learning journey led to her becoming a co-facilitator of the programme.',
      'She brings a lived understanding of the community coaching experience — knowing firsthand what participants face and what they need to thrive.',
    ],
  },
  {
    name: 'Nonofo Haiyo',
    role: 'Co-Facilitator',
    photo: null as string | null,
    bio: [
      'Nonofo Haiyo also graduated from the 2021 pilot cohort and stepped into a co-facilitator role alongside Mmabatho. Together they represent the programme\'s core belief: that the strongest facilitators are often those who have walked the same path as the people they serve.',
      'Her approach is grounded, empathetic, and directly rooted in community experience.',
    ],
  },
  {
    name: 'Coba Röhm',
    role: 'Life & Business Coach',
    photo: null as string | null,
    bio: [
      'Coba Röhm brings 35 years of experience spanning Education & Training and Life & Business Coaching. A certified Hospitality Specialist, she has worked across diverse sectors and brings a structured yet human approach to participant development.',
      'She specialises in helping individuals identify their strengths and build practical strategies for growth — both professionally and personally.',
    ],
  },
  {
    name: 'Annél Strydom',
    role: 'Author, Motivational Speaker & Life Coach',
    photo: null as string | null,
    bio: [
      'Annél Strydom has 19 years of experience as a Life Coach, Motivational Speaker, and Author. She has trained thousands of people across South Africa and brings an energetic, affirming presence to every session.',
      'Her work focuses on helping people recognise their own potential and take meaningful action — a philosophy that runs through the heart of the Coach Group programme.',
    ],
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
            Experienced facilitators committed to real community change.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            The Coach Group team combines decades of coaching, training, and lived community
            experience. We coach with empathy, structure, and clear accountability.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="page-shell">
          <div className="grid gap-16">
            {team.map((member, i) => (
              <article
                key={member.name}
                className={`grid gap-10 lg:grid-cols-[320px_1fr] lg:items-start ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-last' : ''
                }`}
              >
                <div className="flex aspect-[4/5] max-h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl bg-stone-100 lg:max-h-none">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={320}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <p className="text-xs text-slate-400">Photo coming soon</p>
                  )}
                </div>

                <div className="py-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
                    {member.role}
                  </p>
                  <h2 className="mt-3 text-4xl text-slate-900">{member.name}</h2>
                  <div className="mt-6 space-y-4">
                    {member.bio.map((para) => (
                      <p key={para.slice(0, 40)} className="text-lg leading-8 text-slate-600">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

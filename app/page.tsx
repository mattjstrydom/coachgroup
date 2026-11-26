import type { Metadata } from 'next';
import CoachingProgramCard from '@/components/CoachingProgramCard';
import ContactForm from '@/components/ContactForm';
import HeroSection from '@/components/HeroSection';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'Creating a Conducive Community',
  description:
    "Explore Coach Group's Community Coaching Programme, including 9 adaptable workshops, programme time allocation, the 30-person impact model, and student testimonials.",
  alternates: {
    canonical: '/',
  },
};

const programmeHighlights = [
  {
    title: '9 Adaptable Workshops',
    description:
      'Industry-specific or community-specific workshops tailored to the needs, challenges, and environment of each client, industry, or community.',
    timeAllocation: 'Relevant and adaptable',
  },
  {
    title: 'Programme Time Allocation',
    description:
      '10% contact sessions, 40% online and community sessions, and 50% self-study and assignments support lasting growth beyond the classroom.',
    timeAllocation: 'Structured for sustained learning',
  },
  {
    title: '30-Person Impact Model',
    description:
      'A practical model showing what the intern coach gains, what students gain, and how the wider community benefits from trained community coaches.',
    impactModel: true,
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      'The programme was educational and inspirational, it taught me to acknowledge and appreciate myself, also to understand others and manage day to day issues that we come across.',
    author: 'Student Feedback',
  },
  {
    id: 2,
    quote:
      'We were all encouraged to participate and voice out our opinions with no judgement.',
    author: 'Student Feedback',
  },
  {
    id: 3,
    quote:
      'The methods of training are unique and respect our day-to-day lifestyle and different cultures.',
    author: 'Student Feedback',
  },
];

const valuePillars = [
  {
    num: '01',
    title: 'Proudly South African',
    text: 'Grounded in local context, lived realities, and culturally relevant examples that resonate with participants.',
  },
  {
    num: '02',
    title: 'A Winning Combination',
    text: 'Soft skills, practical skills, and community projects work together instead of being treated as separate tracks.',
  },
  {
    num: '03',
    title: 'Built For Trust',
    text: 'Clear learning structure, accredited support, and authentic student outcomes create confidence from the first visit.',
  },
];

const outcomes = [
  'Relevant content, case studies, activities, and examples for the South African market.',
  'Accredited coaching and mentoring learning that blends workshops, online support, and assignments.',
  'A community-focused model that equips people to facilitate positive change where they live.',
];

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Coach Group',
    url: 'https://coachgroup.co.za',
    email: 'info@coachgroup.co.za',
    description:
      'Coach Group offers a Community Coaching Programme focused on coaching, mentoring, leadership development, and community upliftment in South Africa.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <HeroSection />

      {/* About the programme */}
      <section className="py-28" style={{ background: 'var(--parchment)' }}>
        <div className="page-shell">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div data-reveal>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 400, color: 'var(--ink)' }}
              >
                Coaching and mentoring designed for real South African communities.
              </h2>
              <p className="mt-7 text-lg leading-8" style={{ color: 'var(--stone)' }}>
                Coach Group&apos;s Community Coaching Programme equips people to get involved,
                make a difference, and take responsibility for the development of their own
                communities — through structured coaching, mentoring, and real-world projects.
              </p>
            </div>

            <div className="divide-y" style={{ borderColor: 'rgba(13,12,7,0.1)' }}>
              {valuePillars.map((pillar, i) => (
                <div
                  key={pillar.num}
                  className="flex gap-8 py-7 first:pt-0 last:pb-0"
                  data-reveal
                  style={{ animationDelay: `${i * 80}ms` } as React.CSSProperties}
                >
                  <span className="mt-1 shrink-0 text-xs font-semibold tabular-nums" style={{ color: 'var(--gold)' }}>
                    {pillar.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium" style={{ color: 'var(--ink)' }}>{pillar.title}</h3>
                    <p className="mt-2 text-base leading-7" style={{ color: 'var(--stone)' }}>{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programmeHighlights.map((item, i) => (
              <div data-reveal key={item.title} style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}>
                <CoachingProgramCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terracotta pull-quote signature moment */}
      <section className="py-24 overflow-hidden" style={{ background: 'var(--terracotta)' }}>
        <div className="page-shell">
          <blockquote
            data-reveal
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.15,
              color: 'white',
              letterSpacing: '-0.02em',
            }}
          >
            &ldquo;The methods of training are unique and respect our day-to-day lifestyle and different cultures.&rdquo;
          </blockquote>
          <p
            data-reveal="fade"
            className="mt-8 text-sm font-medium uppercase tracking-[0.22em]"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Student · Community Coaching Programme
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ background: 'var(--surface)' }}>
        <div className="page-shell">
          <h2
            data-reveal
            className="max-w-xl font-display"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400, color: 'var(--ink)' }}
          >
            Here&apos;s what our students say.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div data-reveal key={testimonial.id} style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}>
                <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works — dark section */}
      <section className="py-28" style={{ background: 'var(--ink)', color: 'white' }}>
        <div className="page-shell grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal>
            <h2
              className="font-display"
              style={{ fontSize: 'clamp(2rem,4.5vw,3.25rem)', fontWeight: 400 }}
            >
              A practical model that turns learning into action.
            </h2>
            <p className="mt-6 text-lg leading-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Nine adaptable workshops, an accredited learning path, and a community-based support
              model work together to make the content relevant, practical, and lasting.
            </p>
          </div>

          <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            {outcomes.map((outcome, i) => (
              <div
                key={i}
                className="flex gap-6 py-7 first:pt-0 last:pb-0"
                data-reveal
                style={{ animationDelay: `${i * 80}ms` } as React.CSSProperties}
              >
                <span className="mt-1 shrink-0 text-xs font-semibold tabular-nums" style={{ color: 'var(--gold)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-base leading-7" style={{ color: 'rgba(255,255,255,0.7)' }}>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}

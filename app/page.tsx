import type { Metadata } from 'next';
import CoachingProgramCard from '@/components/CoachingProgramCard';
import ContactForm from '@/components/ContactForm';
import HeroSection from '@/components/HeroSection';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata: Metadata = {
  title: 'Creating a Conducive Community',
  description:
    'Explore Coach Group’s Community Coaching Programme, including 9 adaptable workshops, programme time allocation, the 30-person impact model, and student testimonials.',
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

      <section className="bg-stone-100 py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
              Community Coaching Programme
            </p>
            <h2 className="mt-4 text-4xl text-slate-900">
              Coaching and mentoring designed for real South African communities.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The current Coach Group messaging emphasizes relevance, adaptability, and practical
              responsibility. This programme is built to help people get involved, make a
              difference, and become part of the change in their own communities.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {programmeHighlights.map((item) => (
              <CoachingProgramCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              Student Testimonials
            </p>
            <h2 className="mt-4 text-4xl text-slate-900">Here&apos;s what our students say.</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Why The Programme Works
            </p>
            <h2 className="mt-4 text-4xl">A practical model that turns learning into action.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Based on the live site copy, the programme’s strengths are its adaptable workshop
              structure, accredited learning path, and community-based support model. Those
              elements work together to make the content relevant and actionable.
            </p>
          </div>

          <div className="grid gap-4">
            {outcomes.map((outcome) => (
              <article
                key={outcome}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100"
              >
                {outcome}
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}

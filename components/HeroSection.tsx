'use client';

import Link from 'next/link';

const facts = [
  { label: 'Nine adaptable workshops, tailored to each community.' },
  { label: 'An 18-month accredited learning journey.' },
  { label: 'Active across South African communities since 2021.' },
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <style>{`
        @keyframes hero-fade {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-animate {
          animation: hero-fade 0.6s ease both;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-animate { animation: none; }
        }
      `}</style>

      <div className="page-shell relative z-10 py-28 md:py-36">
        <div className="grid items-end gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h1
              className="hero-animate text-7xl leading-[0.92] text-white md:text-8xl lg:text-9xl"
              style={{ animationDelay: '0ms' }}
            >
              Creating a<br />
              Conducive<br />
              <span className="text-amber-300">Community.</span>
            </h1>

            <p
              className="hero-animate mt-10 max-w-xl text-lg leading-8 text-slate-300 md:text-xl"
              style={{ animationDelay: '120ms' }}
            >
              A South African coaching and mentoring programme that equips people to get
              involved, make a difference, and take responsibility for their own communities.
            </p>

            <div
              className="hero-animate mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: '240ms' }}
            >
              <Link
                href="/contact"
                className="rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Get Involved
              </Link>
              <Link
                href="/community-coaching"
                className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/8"
              >
                Explore the Programme
              </Link>
            </div>
          </div>

          <div
            className="hero-animate hidden lg:block"
            style={{ animationDelay: '180ms' }}
          >
            <div className="border-l border-white/15 pl-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/70">
                Coach Group
              </p>
              <div className="mt-6 flex flex-col gap-6">
                {facts.map((fact, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="mt-1 text-amber-400/50 text-sm font-semibold tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-base leading-7 text-slate-300">{fact.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/8" />
    </section>
  );
}

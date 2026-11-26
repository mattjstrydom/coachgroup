'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative isolate flex min-h-screen flex-col overflow-hidden"
      style={{ background: 'var(--ink)', color: 'white' }}
    >
      <style>{`
        @keyframes hero-title {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .hero-title { animation: hero-title 1s cubic-bezier(0.16,1,0.3,1) both; }
        .hero-sub   { animation: hero-fade 1s ease both; }
        @media (prefers-reduced-motion: reduce) {
          .hero-title, .hero-sub { animation: none; }
        }
      `}</style>

      {/* Grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      />

      {/* Main content — expands to fill space above CTA bar */}
      <div className="page-shell relative z-10 flex flex-1 flex-col justify-center py-32 md:py-40">
        {/* Year / origin mark */}
        <p
          className="hero-sub mb-10 text-xs font-semibold uppercase tracking-[0.32em]"
          style={{ color: 'rgba(199,154,58,0.7)', animationDelay: '0ms' }}
        >
          South Africa · Est. 2021
        </p>

        {/* Display headline */}
        <h1
          className="hero-title max-w-5xl font-display"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            animationDelay: '80ms',
          }}
        >
          Creating a<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Conducive</em>
          <br />Community.
        </h1>

        {/* Subline + divider */}
        <div
          className="hero-sub mt-12 flex max-w-2xl flex-col gap-6 md:flex-row md:items-start md:gap-10"
          style={{ animationDelay: '240ms' }}
        >
          <div
            className="hidden md:block"
            style={{ width: '1px', minHeight: '72px', background: 'rgba(255,255,255,0.15)', flexShrink: 0, marginTop: '4px' }}
          />
          <p
            className="text-lg leading-8 md:text-xl"
            style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '36ch' }}
          >
            A coaching and mentoring programme equipping South African communities through nine adaptable workshops and an 18-month accredited journey.
          </p>
        </div>
      </div>

      {/* CTA bar — pinned to bottom */}
      <div
        className="hero-sub relative z-10 border-t"
        style={{
          borderColor: 'rgba(255,255,255,0.1)',
          background: 'rgba(255,255,255,0.03)',
          animationDelay: '400ms',
        }}
      >
        <div className="page-shell flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary" style={{ background: 'var(--gold)', color: 'var(--ink)' }}>
              Get Involved
            </Link>
            <Link
              href="/community-coaching"
              className="btn-ghost"
              style={{ color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.25)' }}
            >
              Explore the Programme
            </Link>
          </div>

          {/* Three programme facts */}
          <div className="flex flex-wrap gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
            <span>9 Adaptable Workshops</span>
            <span>18-Month Journey</span>
            <span>Accredited Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}

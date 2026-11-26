import Link from 'next/link';

const footerLinks = [
  { href: '/community-coaching', label: 'Community Coaching' },
  { href: '/corporate-coaching', label: 'Corporate Coaching' },
  { href: '/our-team', label: 'Our Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'white' }}>
      <div className="page-shell py-16">
        <div
          className="grid gap-10 border-t pt-12 md:grid-cols-[1fr_auto] md:items-end"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.28em]"
              style={{ color: 'var(--gold)' }}
            >
              Coach Group
            </p>
            <p
              className="mt-6 max-w-2xl font-display"
              style={{ fontSize: 'clamp(1.75rem,3.5vw,2.75rem)', fontWeight: 300, lineHeight: 1.2 }}
            >
              Community coaching, mentoring, and leadership development for South African communities.
            </p>
            <p
              className="mt-6 text-xs font-medium uppercase tracking-[0.22em]"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              info@coachgroup.co.za
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="footer-link rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-2 border-t pt-7 text-xs sm:flex-row sm:justify-between"
          style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}
        >
          <p>© {new Date().getFullYear()} Coach Group. All rights reserved.</p>
          <p>
            Personal information processed in accordance with POPIA.{' '}
            <Link
              href="/contact"
              className="underline underline-offset-2 transition hover:opacity-80"
            >
              Contact us
            </Link>{' '}
            to exercise your rights.
          </p>
        </div>
      </div>
    </footer>
  );
}

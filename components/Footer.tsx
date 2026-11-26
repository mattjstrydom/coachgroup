import Link from 'next/link';

const footerLinks = [
  { href: '/community-coaching', label: 'Community Coaching' },
  { href: '/corporate-coaching', label: 'Corporate Coaching' },
  { href: '/our-team', label: 'Our Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="page-shell py-14">
        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              Coach Group
            </p>
            <p className="mt-5 max-w-2xl text-4xl text-white">
              Community coaching, mentoring, and leadership development for South African communities.
            </p>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-slate-400">
              info@coachgroup.co.za
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 px-4 py-2 transition hover:border-amber-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Coach Group. All rights reserved.</p>
          <p>
            Your personal information is processed in accordance with the Protection of Personal
            Information Act (POPIA).{' '}
            <Link href="/contact" className="underline underline-offset-2 hover:text-slate-300">
              Contact us
            </Link>{' '}
            to exercise your rights.
          </p>
        </div>
      </div>
    </footer>
  );
}

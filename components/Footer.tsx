import Link from 'next/link';

const footerLinks = [
  { href: '/community-coaching', label: 'Community Coaching' },
  { href: '/corporate-coaching', label: 'Corporate Coaching' },
  { href: '/our-team', label: 'Our Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
            Coach Group
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Community coaching, mentoring, and leadership development for South African communities.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <a href="mailto:info@coachgroup.co.za" className="transition hover:text-slate-900">
            info@coachgroup.co.za
          </a>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

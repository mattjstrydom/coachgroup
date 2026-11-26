'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/community-coaching', label: 'Community Coaching' },
  { href: '/corporate-coaching', label: 'Corporate Coaching' },
  { href: '/clients', label: 'Clients' },
  { href: '/our-team', label: 'Our Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'var(--parchment)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(13,12,7,0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 20px rgba(13,12,7,0.06)' : 'none',
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.28em] transition-colors duration-500"
            style={{ color: scrolled ? 'var(--ink)' : 'white' }}
          >
            Coach Group
          </Link>

          <div className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.18em] lg:flex"
            style={{ color: scrolled ? 'var(--stone)' : 'rgba(255,255,255,0.75)' }}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:opacity-100"
                style={{ color: 'inherit' }}
                onMouseEnter={e => (e.currentTarget.style.color = scrolled ? 'var(--ink)' : 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = '')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary hidden lg:inline-flex"
              style={{
                padding: '0.6rem 1.5rem',
                fontSize: '0.75rem',
                background: scrolled ? 'var(--gold)' : 'rgba(255,255,255,0.15)',
                color: scrolled ? 'var(--ink)' : 'white',
                backdropFilter: scrolled ? 'none' : 'blur(8px)',
                border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.3)',
              }}
            >
              Get Involved
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition lg:hidden"
              style={{
                borderColor: scrolled ? 'rgba(13,12,7,0.2)' : 'rgba(255,255,255,0.3)',
                color: scrolled ? 'var(--ink)' : 'white',
              }}
              onClick={() => setIsOpen(o => !o)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close' : 'Open menu'}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 rounded-2xl border border-ink/8 bg-parchment p-4 lg:hidden"
            style={{ background: 'var(--parchment)', border: '1px solid rgba(13,12,7,0.08)' }}>
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink transition hover:bg-surface"
                  style={{ color: 'var(--ink)' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

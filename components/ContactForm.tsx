'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, User } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      setSubmitError('Something went wrong. Please email us directly at info@coachgroup.co.za');
      return;
    }
    setSubmitted(true);
    reset();
  };

  return (
    <section className="py-28" style={{ background: 'var(--surface)' }}>
      <div className="page-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="pt-2" data-reveal>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1 }}
          >
            Let&apos;s build the next chapter together.
          </h2>
          <p className="mt-7 max-w-sm text-lg leading-8" style={{ color: 'var(--stone)' }}>
            Reach out if you want to join the programme, bring Coach Group into your community,
            or start a conversation about future corporate coaching.
          </p>

          <div
            className="mt-10 rounded-2xl p-6"
            style={{ background: 'white', border: '1px solid rgba(13,12,7,0.08)' }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--stone)' }}>
              Or email us directly
            </p>
            <p className="mt-3 text-xl font-medium" style={{ color: 'var(--ink)' }}>
              info@coachgroup.co.za
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: 'white',
            border: '1px solid rgba(13,12,7,0.08)',
            boxShadow: '0 4px 24px rgba(13,12,7,0.05)',
          }}
          data-reveal
        >
          <div className="grid gap-6">
            <div>
              <label
                className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: 'var(--stone)' }}
              >
                <User size={14} /> Full Name
              </label>
              <input
                {...register('name')}
                type="text"
                className="w-full rounded-xl border px-5 py-4 text-sm outline-none transition"
                style={{
                  borderColor: 'rgba(13,12,7,0.12)',
                  background: 'var(--parchment)',
                  color: 'var(--ink)',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'white'; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'rgba(13,12,7,0.12)'; e.currentTarget.style.background = 'var(--parchment)'; }}
                placeholder="Your full name"
              />
              {errors.name ? (
                <p className="mt-2 text-sm" style={{ color: 'var(--terracotta)' }}>{errors.name.message}</p>
              ) : null}
            </div>

            <div>
              <label
                className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: 'var(--stone)' }}
              >
                <Mail size={14} /> Email Address
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full rounded-xl border px-5 py-4 text-sm outline-none transition"
                style={{
                  borderColor: 'rgba(13,12,7,0.12)',
                  background: 'var(--parchment)',
                  color: 'var(--ink)',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'white'; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'rgba(13,12,7,0.12)'; e.currentTarget.style.background = 'var(--parchment)'; }}
                placeholder="your@email.com"
              />
              {errors.email ? (
                <p className="mt-2 text-sm" style={{ color: 'var(--terracotta)' }}>{errors.email.message}</p>
              ) : null}
            </div>

            <div>
              <label
                className="mb-2 block text-xs font-medium uppercase tracking-[0.2em]"
                style={{ color: 'var(--stone)' }}
              >
                Message
              </label>
              <textarea
                {...register('message')}
                rows={6}
                className="w-full resize-y rounded-xl border px-5 py-4 text-sm outline-none transition"
                style={{
                  borderColor: 'rgba(13,12,7,0.12)',
                  background: 'var(--parchment)',
                  color: 'var(--ink)',
                }}
                onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'white'; }}
                onBlur={e => { e.currentTarget.style.borderColor = 'rgba(13,12,7,0.12)'; e.currentTarget.style.background = 'var(--parchment)'; }}
                placeholder="Tell us how you'd like to get involved..."
              />
              {errors.message ? (
                <p className="mt-2 text-sm" style={{ color: 'var(--terracotta)' }}>{errors.message.message}</p>
              ) : null}
            </div>

            {submitError ? (
              <p className="rounded-xl px-5 py-4 text-sm" style={{ background: 'rgba(191,72,38,0.08)', color: 'var(--terracotta)' }}>
                {submitError}
              </p>
            ) : null}

            {submitted ? (
              <p className="rounded-xl px-5 py-4 text-sm" style={{ background: 'rgba(13,12,7,0.05)', color: 'var(--stone)' }}>
                Thank you — your message has been received. We&apos;ll be in touch soon.
              </p>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-60"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

'use client';

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

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form submitted:', data);
    alert('Thank you. Your message has been received and we will get back to you soon.');
    reset();
  };

  return (
    <section className="relative overflow-hidden bg-[#efe6da] py-24">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-slate-900/10 blur-3xl" />

      <div className="page-shell relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="pt-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-800">
            Get Involved
          </p>
          <h2 className="mt-5 max-w-md text-5xl text-slate-900">
            Let&apos;s build the next chapter together.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
            Reach out if you want to join the programme, bring Coach Group into your community,
            or start a conversation about future corporate coaching.
          </p>

          <div className="mt-10 rounded-[2rem] border border-white/60 bg-white/60 p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              Direct Contact
            </p>
            <p className="mt-4 text-2xl text-slate-900">info@coachgroup.co.za</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_28px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-10"
        >
          <div className="grid gap-6">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-600">
                <User size={16} /> Full Name
              </label>
              <input
                {...register('name')}
                type="text"
                className="w-full rounded-2xl border border-slate-200 bg-stone-50 px-5 py-4 text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white"
                placeholder="Your full name"
              />
              {errors.name ? <p className="mt-2 text-sm text-red-500">{errors.name.message}</p> : null}
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-600">
                <Mail size={16} /> Email Address
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full rounded-2xl border border-slate-200 bg-stone-50 px-5 py-4 text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white"
                placeholder="your@email.com"
              />
              {errors.email ? (
                <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
              ) : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium uppercase tracking-[0.2em] text-slate-600">
                Message
              </label>
              <textarea
                {...register('message')}
                rows={6}
                className="w-full resize-y rounded-2xl border border-slate-200 bg-stone-50 px-5 py-4 text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white"
                placeholder="Tell us how you'd like to get involved..."
              />
              {errors.message ? (
                <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-slate-800 disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

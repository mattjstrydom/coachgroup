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
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">Get In Touch</h2>
          <p className="text-lg text-slate-600">
            Ready to make a difference in your community or organisation?
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-3xl bg-white p-10 shadow-sm"
        >
          <div>
            <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-700">
              <User size={18} /> Full Name
            </label>
            <input
              {...register('name')}
              type="text"
              className="w-full rounded-xl border border-slate-300 px-5 py-3 focus:border-blue-500 focus:outline-none"
              placeholder="Your full name"
            />
            {errors.name ? <p className="mt-1 text-sm text-red-500">{errors.name.message}</p> : null}
          </div>

          <div>
            <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-700">
              <Mail size={18} /> Email Address
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full rounded-xl border border-slate-300 px-5 py-3 focus:border-blue-500 focus:outline-none"
              placeholder="your@email.com"
            />
            {errors.email ? (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            ) : null}
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Message</label>
            <textarea
              {...register('message')}
              rows={5}
              className="w-full resize-y rounded-xl border border-slate-300 px-5 py-3 focus:border-blue-500 focus:outline-none"
              placeholder="Tell us how you'd like to get involved..."
            />
            {errors.message ? (
              <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-slate-900 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Or email us directly at <span className="font-medium">info@coachgroup.co.za</span>
        </p>
      </div>
    </section>
  );
}

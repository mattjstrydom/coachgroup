'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="rounded-[2rem] border border-white/60 bg-[#f8f4ee] p-8 shadow-[0_24px_60px_rgba(15,23,42,0.07)]"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between">
          <Quote className="text-amber-700" size={34} />
          <div className="rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Testimonial
          </div>
        </div>

        <blockquote className="mt-8 flex-grow text-2xl leading-10 text-slate-800">
          &ldquo;{quote}&rdquo;
        </blockquote>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-base font-semibold text-slate-900">{author}</p>
          <p className="mt-1 text-sm uppercase tracking-[0.22em] text-slate-500">
            Community Coaching Student
          </p>
        </div>
      </div>
    </motion.article>
  );
}

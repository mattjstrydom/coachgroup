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
      whileHover={{ y: -5 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex h-full flex-col">
        <Quote className="mb-6 text-blue-500" size={32} />

        <blockquote className="flex-grow text-lg leading-relaxed text-slate-700">
          &ldquo;{quote}&rdquo;
        </blockquote>

        <div className="mt-8 border-t border-slate-100 pt-6">
          <p className="font-semibold text-slate-900">{author}</p>
          <p className="text-sm text-slate-500">Programme participant</p>
        </div>
      </div>
    </motion.article>
  );
}

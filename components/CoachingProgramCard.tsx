'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CoachingProgramCardProps {
  title: string;
  description: string;
  timeAllocation?: string;
  impactModel?: boolean;
}

export default function CoachingProgramCard({
  title,
  description,
  timeAllocation,
  impactModel = false,
}: CoachingProgramCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />

      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="rounded-full border border-slate-200 bg-stone-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
          {impactModel ? 'Impact Layer' : 'Programme Detail'}
        </div>
        <div className="rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition group-hover:border-amber-300 group-hover:text-amber-700">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <h3 className="max-w-xs text-3xl text-slate-900">{title}</h3>
      <p className="mt-5 flex-grow text-base leading-8 text-slate-600">{description}</p>

      {timeAllocation ? (
        <div className="mt-8 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-slate-100">
          {timeAllocation}
        </div>
      ) : null}

      {impactModel ? (
        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Intern Coach • Students • Community
          </p>
        </div>
      ) : null}
    </motion.article>
  );
}

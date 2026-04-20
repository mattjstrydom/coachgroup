'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
      className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      <h3 className="mb-4 text-2xl font-semibold text-slate-900">{title}</h3>

      <p className="mb-6 flex-grow leading-relaxed text-slate-600">{description}</p>

      {timeAllocation ? (
        <p className="mb-4 text-sm font-medium text-blue-600">{timeAllocation}</p>
      ) : null}

      {impactModel ? (
        <div className="mt-auto border-t border-slate-100 pt-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
            30-Person Impact Model
          </p>
        </div>
      ) : null}

      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-900">
        Learn more <ArrowRight size={16} />
      </div>
    </motion.article>
  );
}

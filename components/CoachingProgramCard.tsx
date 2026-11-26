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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,23,42,0.10)]">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="rounded-full bg-amber-50 p-2 text-amber-600 transition group-hover:bg-amber-100">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <h3 className="max-w-xs text-3xl text-slate-900">{title}</h3>
      <p className="mt-5 flex-grow text-base leading-8 text-slate-600">{description}</p>

      {timeAllocation ? (
        <div className="mt-8 rounded-xl bg-slate-950 px-4 py-3 text-sm font-medium text-slate-100">
          {timeAllocation}
        </div>
      ) : null}

      {impactModel ? (
        <div className="mt-8 border-t border-slate-100 pt-6">
          <p className="text-sm leading-6 text-slate-500">
            Intern coach · Students · Community
          </p>
        </div>
      ) : null}
    </article>
  );
}

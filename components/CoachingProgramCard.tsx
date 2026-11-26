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
    <article
      className="group relative flex h-full flex-col overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: 'white',
        border: '1px solid rgba(13,12,7,0.08)',
        borderRadius: '1.5rem',
        boxShadow: '0 2px 12px rgba(13,12,7,0.04)',
      }}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full transition group-hover:bg-gold/20"
          style={{ background: 'rgba(199,154,58,0.1)', color: 'var(--gold)' }}
        >
          <ArrowUpRight size={15} />
        </div>
      </div>

      <h3
        className="font-display"
        style={{ fontSize: '1.6rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.1 }}
      >
        {title}
      </h3>

      <p className="mt-5 flex-grow text-base leading-8" style={{ color: 'var(--stone)' }}>
        {description}
      </p>

      {timeAllocation ? (
        <div
          className="mt-8 rounded-xl px-4 py-3 text-sm font-medium"
          style={{ background: 'var(--surface)', color: 'var(--stone)' }}
        >
          {timeAllocation}
        </div>
      ) : null}

      {impactModel ? (
        <div
          className="mt-8 border-t pt-6 text-sm leading-6"
          style={{ borderColor: 'rgba(13,12,7,0.08)', color: 'var(--stone)' }}
        >
          Intern coach · Students · Community
        </div>
      ) : null}
    </article>
  );
}

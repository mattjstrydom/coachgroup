interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <article
      className="flex h-full flex-col p-8 transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: 'white',
        border: '1px solid rgba(13,12,7,0.08)',
        borderRadius: '1.5rem',
        boxShadow: '0 2px 12px rgba(13,12,7,0.04)',
      }}
    >
      <blockquote
        className="flex-grow font-display"
        style={{ fontSize: '1.25rem', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.6, color: 'var(--ink)' }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="mt-8 border-t pt-6" style={{ borderColor: 'rgba(13,12,7,0.08)' }}>
        <p className="text-sm font-medium uppercase tracking-[0.18em]" style={{ color: 'var(--stone)' }}>
          {author}
        </p>
      </div>
    </article>
  );
}

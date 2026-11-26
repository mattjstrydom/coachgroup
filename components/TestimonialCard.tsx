interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-8 transition hover:-translate-y-1">
      <blockquote className="flex-grow text-xl leading-9 text-slate-800">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="mt-8 border-t border-slate-100 pt-6">
        <p className="text-sm font-medium text-slate-500">{author}</p>
      </div>
    </article>
  );
}

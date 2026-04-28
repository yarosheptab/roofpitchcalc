import Link from 'next/link'
import type { BlogPostMeta } from '@/types'

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <article className="border border-border bg-surface flex flex-col transition hover:border-primary">
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-3">
          <time className="text-[10px] uppercase tracking-[0.1em] text-muted" dateTime={post.date}>
            {formattedDate}
          </time>
          <span className="text-border">·</span>
          <span className="text-[10px] uppercase tracking-[0.1em] text-muted">{post.readingTime}</span>
        </div>

        <h2 className="mb-3 font-serif text-lg font-normal leading-snug text-primary">
          <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
            {post.title}
          </Link>
        </h2>

        <p className="mb-5 flex-1 text-sm text-muted leading-relaxed line-clamp-3">
          {post.description}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] font-medium text-accent hover:text-primary transition-colors"
        >
          Read article
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  )
}

import Link from 'next/link'
import type { BlogPostMeta } from '@/types'

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="flex flex-col rounded-xl border border-border bg-surface shadow-sm transition hover:shadow-md">
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-accent">
            {post.category}
          </span>
          <span className="text-xs text-muted">{post.readingTime}</span>
        </div>
        <h2 className="mb-2 text-base font-semibold leading-snug text-primary">
          <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="mb-4 flex-1 text-sm text-muted leading-relaxed line-clamp-3">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <time className="text-xs text-muted" dateTime={post.date}>
            {formattedDate}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-accent hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  )
}

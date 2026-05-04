import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPostSlugs, getPost, getAllPostsMeta } from '@/lib/blog'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'
import JsonLd from '@/components/JsonLd'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://roofangler.com'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const allPosts = getAllPostsMeta()
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const schemas = [
    articleSchema({
      title: post.title,
      description: post.description,
      datePublished: post.date,
      slug,
      author: post.author,
    }),
    breadcrumbSchema([
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Blog', url: `${SITE_URL}/blog` },
      { name: post.title, url: `${SITE_URL}/blog/${slug}` },
    ]),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <JsonLd key={i} schema={s} />
      ))}

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-accent">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          {' / '}
          <span className="text-site-text">{post.title}</span>
        </nav>

        <article>
          <header className="mb-8">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-accent">
                {post.category}
              </span>
              <span className="text-xs text-muted">{post.readingTime}</span>
            </div>
            <h1 className="text-3xl font-bold text-primary leading-tight sm:text-4xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted">
              <span>By {post.author}</span>
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
          </header>

          <div className="prose">
            <MDXRemote source={post.content} />
          </div>
        </article>

        {/* Back link */}
        <div className="mt-12 border-t border-border pt-6">
          <Link href="/blog" className="text-sm font-medium text-accent hover:underline">
            ← Back to Blog
          </Link>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 text-xl font-bold text-primary">Related Articles</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}

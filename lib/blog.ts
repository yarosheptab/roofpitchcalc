import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogPost, BlogPostMeta } from '@/types'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getAllPostsMeta(): BlogPostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostMeta(slug))
    .filter(Boolean)
    .sort((a, b) => (a!.date < b!.date ? 1 : -1)) as BlogPostMeta[]
}

function getPostMeta(slug: string): BlogPostMeta | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const { data } = matter(fs.readFileSync(filePath, 'utf8'))
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: data.date ?? '',
    category: data.category ?? 'Roofing Guides',
    author: data.author ?? 'Roof Pitch Calculator Team',
    readingTime: data.readingTime ?? '5 min read',
  }
}

export function getPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: data.date ?? '',
    category: data.category ?? 'Roofing Guides',
    author: data.author ?? 'Roof Pitch Calculator Team',
    readingTime: data.readingTime ?? '5 min read',
    content,
  }
}

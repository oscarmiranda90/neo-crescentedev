import matter from 'gray-matter'

export interface PostMeta {
    slug: string
    title: string
    title_es: string
    date: string
    readTime: number
    excerpt: string
    excerpt_es: string
    lang: string
}

export interface Post extends PostMeta {
    content: string
}

// Eagerly load all markdown files at build time
const rawFiles = import.meta.glob<string>('/src/posts/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
})

export const allPosts: PostMeta[] = Object.values(rawFiles)
    .map((raw) => matter(raw).data as PostMeta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function getPost(slug: string): Post | null {
    for (const raw of Object.values(rawFiles)) {
        const { data, content } = matter(raw)
        if (data.slug === slug) {
            return { ...(data as PostMeta), content }
        }
    }
    return null
}

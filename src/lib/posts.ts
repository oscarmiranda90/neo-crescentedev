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

function parseFrontmatter(raw: string): { data: Record<string, string | number>; content: string } {
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
    if (!match) return { data: {}, content: raw }
    const data: Record<string, string | number> = {}
    for (const line of match[1].split('\n')) {
        const colon = line.indexOf(':')
        if (colon === -1) continue
        const key = line.slice(0, colon).trim()
        const val = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '')
        data[key] = isNaN(Number(val)) || val === '' ? val : Number(val)
    }
    return { data, content: match[2] }
}

// Eagerly load all markdown files at build time
const rawFiles = import.meta.glob<string>('/src/posts/*.md', {
    eager: true,
    query: '?raw',
    import: 'default',
})

export const allPosts: PostMeta[] = Object.values(rawFiles)
    .map((raw) => parseFrontmatter(raw).data as unknown as PostMeta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function getPost(slug: string): Post | null {
    for (const raw of Object.values(rawFiles)) {
        const { data, content } = parseFrontmatter(raw)
        if (data.slug === slug) {
            return { ...(data as unknown as PostMeta), content }
        }
    }
    return null
}

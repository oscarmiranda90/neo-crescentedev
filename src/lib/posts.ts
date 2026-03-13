export interface PostMeta {
    slug: string
    title: string        // English title (preferred key)
    title_en?: string    // English title (agent may use this instead)
    title_es?: string    // Spanish title
    date: string
    readTime: number
    excerpt: string      // English excerpt
    excerpt_es?: string  // Spanish excerpt
    description?: string    // alias agents may use instead of excerpt
    description_en?: string // alias agents may use for English excerpt
    lang: string
}

export interface Post extends PostMeta {
    content: string
}

/** Resolve the display title for a given language, tolerating varied agent output */
export function localizedTitle(post: PostMeta, lang: 'en' | 'es'): string {
    if (lang === 'es') return post.title_es ?? post.title
    return post.title_en ?? post.title
}

/** Resolve the display excerpt for a given language */
export function localizedExcerpt(post: PostMeta, lang: 'en' | 'es'): string {
    if (lang === 'es') return post.excerpt_es ?? post.description ?? post.excerpt
    return post.description_en ?? post.excerpt
}

/**
 * Extract the content for a given language from a bilingual markdown body.
 * Supports two formats:
 *   1. Explicit marker:  content in EN ... <!-- lang:es --> content in ES
 *   2. HR separator:     EN section \n---\n ES section  (fallback)
 */
export function contentForLang(raw: string, lang: 'en' | 'es'): string {
    const marker = '<!-- lang:es -->'
    const markerIdx = raw.indexOf(marker)
    if (markerIdx !== -1) {
        return lang === 'es'
            ? raw.slice(markerIdx + marker.length).trim()
            : raw.slice(0, markerIdx).trim()
    }
    // Fallback: split on \n---\n (HR) — first chunk = EN, rest = ES
    const chunks = raw.split(/\n---\n/)
    if (chunks.length >= 2) {
        return lang === 'es'
            ? chunks.slice(1).join('\n\n').trim()
            : chunks[0].trim()
    }
    return raw
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


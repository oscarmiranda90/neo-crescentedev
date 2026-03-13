import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Placeholder - replace with real markdown posts
const ALL_POSTS = [
    {
        slug: 'why-neobrutalism',
        title: { en: 'Why I Chose Neobrutalism for My Portfolio', es: 'Por qué elegí Neobrutalism para mi portafolio' },
        excerpt: { en: 'Bold borders, thick shadows, and strong colors - the story behind this design choice.', es: 'Bordes gruesos, sombras fuertes y colores vivos - la historia detrás de esta decisión de diseño.' },
        date: '2026-02-25',
        readTime: 4,
        lang: 'en',
    },
]

export default function Blog() {
    const { t, i18n } = useTranslation()
    const lang = i18n.language as 'en' | 'es'

    return (
        <main className="max-w-5xl mx-auto px-4 py-20">
            <h1 className="text-5xl font-bold mb-12">
                {t('blog.heading')}
                <span className="text-main">.</span>
            </h1>

            <div className="grid sm:grid-cols-2 gap-6">
                {ALL_POSTS.map((post) => (
                    <Card key={post.slug}>
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                                <Badge variant="neutral">{post.lang.toUpperCase()}</Badge>
                                <span className="text-xs font-mono">{post.date} · {post.readTime} {t('blog.min_read')}</span>
                            </div>
                            <CardTitle>{post.title[lang]}</CardTitle>
                            <CardDescription>{post.excerpt[lang]}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button size="sm" asChild>
                                <Link to={`/blog/${post.slug}`}>{t('blog.read_more')} →</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    )
}

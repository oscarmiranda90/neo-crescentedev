import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import Star36 from '@/components/stars/s36'
import { useInView } from '@/hooks/useInView'

// Placeholder posts - replace with real markdown parsing
const PLACEHOLDER_POSTS = [
    {
        slug: 'why-neobrutalism',
        title: { en: 'Why I Chose Neobrutalism for My Portfolio', es: 'Por qué elegí Neobrutalism para mi portafolio' },
        excerpt: { en: 'Bold borders, thick shadows, and strong colors - the story behind this design choice.', es: 'Bordes gruesos, sombras fuertes y colores vivos - la historia detrás de esta decisión de diseño.' },
        date: '2026-02-25',
        readTime: 4,
        lang: 'en',
    },
]

export default function BlogPreview() {
    const { t, i18n } = useTranslation()
    const lang = i18n.language as 'en' | 'es'
    const sectionRef = useInView<HTMLElement>()

    return (
        <section
            id="blog"
            ref={sectionRef}
            className="relative bg-secondary-background border-b-2 border-border py-24 overflow-hidden"
        >
            <Star36
                spinDuration={36}
                size={160}
                className="absolute -bottom-10 -left-10 text-border opacity-[0.05] pointer-events-none"
            />

            <div className="max-w-5xl mx-auto px-4">
                <div className="reveal reveal-fade-up flex items-end justify-between mb-12" data-delay="0ms">
                    <h2 className="text-4xl sm:text-5xl font-bold">
                        {t('blog.heading')}
                        <span className="text-main">.</span>
                    </h2>
                    <Button variant="outline" size="sm" asChild>
                        <Link to="/blog">{t('blog.view_all')} →</Link>
                    </Button>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {PLACEHOLDER_POSTS.map((post, i) => (
                        <div
                            key={post.slug}
                            className="reveal reveal-fade-up"
                            data-delay={`${120 + i * 100}ms`}
                        >
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="neutral">{post.lang.toUpperCase()}</Badge>
                                        <span className="text-xs font-mono text-foreground/70">
                                            {post.readTime} {t('blog.min_read')}
                                        </span>
                                    </div>
                                    <CardTitle>{post.title[lang]}</CardTitle>
                                    <CardDescription>{post.excerpt[lang]}</CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button size="sm" variant="outline" asChild>
                                        <Link to={`/blog/${post.slug}`}>{t('blog.read_more')} →</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { allPosts } from '@/lib/posts'

export default function Blog() {
    const { t, i18n } = useTranslation()
    const lang = i18n.language as 'en' | 'es'

    return (
        <main className="max-w-5xl mx-auto px-4 py-20">
            <h1 className="text-5xl font-bold mb-12">
                {t('blog.heading')}
                <span className="text-main">.</span>
            </h1>

            {allPosts.length === 0 ? (
                <p className="text-lg text-foreground/60">{t('blog.no_posts')}</p>
            ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                    {allPosts.map((post) => (
                        <Card key={post.slug}>
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="neutral">{post.lang.toUpperCase()}</Badge>
                                    <span className="text-xs font-mono">{post.date} · {post.readTime} {t('blog.min_read')}</span>
                                </div>
                                <CardTitle>{lang === 'es' && post.title_es ? post.title_es : post.title}</CardTitle>
                                <CardDescription>{lang === 'es' && post.excerpt_es ? post.excerpt_es : post.excerpt}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button size="sm" asChild>
                                    <Link to={`/blog/${post.slug}`}>{t('blog.read_more')} →</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </main>
    )
}

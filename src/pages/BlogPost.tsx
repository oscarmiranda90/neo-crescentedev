import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { marked } from 'marked'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getPost, localizedTitle, contentForLang } from '@/lib/posts'

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>()
    const navigate = useNavigate()
    const { i18n } = useTranslation()
    const lang = i18n.language as 'en' | 'es'

    const post = slug ? getPost(slug) : null

    if (!post) {
        return (
            <main className="max-w-3xl mx-auto px-4 py-20">
                <Button variant="outline" size="sm" className="mb-8" onClick={() => navigate(-1)}>
                    ← Back
                </Button>
                <h1 className="text-4xl font-bold mb-4">Post not found</h1>
                <p className="text-lg text-foreground/70">
                    This post doesn't exist or may have been moved.
                </p>
            </main>
        )
    }

    const title = localizedTitle(post, lang)
    const html = String(marked.parse(contentForLang(post.content, lang)))

    return (
        <main className="max-w-3xl mx-auto px-4 py-20">
            <article>
                <div className="flex items-center gap-3 mb-4">
                    <Badge variant="neutral">{post.lang?.toUpperCase()}</Badge>
                    <span className="text-xs font-mono text-foreground/60">
                        {post.date} · {post.readTime} min read
                    </span>
                </div>
                <Button variant="outline" size="sm" className="mb-8" onClick={() => navigate(-1)}>
                    ← Back
                </Button>

                <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-10 border-b-2 border-border pb-6">
                    {title}
                </h1>

                <div
                    className="prose-neo text-lg leading-relaxed
                        [&_p]:mb-5
                        [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:border-b-2 [&_h2]:border-border [&_h2]:pb-2
                        [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3
                        [&_a]:underline [&_a]:font-semibold [&_a]:underline-offset-2
                        [&_code]:font-mono [&_code]:bg-secondary-background [&_code]:border [&_code]:border-border [&_code]:px-1 [&_code]:rounded-sm [&_code]:text-sm
                        [&_pre]:bg-secondary-background [&_pre]:border-2 [&_pre]:border-border [&_pre]:p-4 [&_pre]:rounded-base [&_pre]:overflow-x-auto [&_pre]:mb-5
                        [&_pre_code]:border-0 [&_pre_code]:p-0 [&_pre_code]:bg-transparent
                        [&_strong]:font-bold
                        [&_em]:italic
                        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5
                        [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5
                        [&_li]:mb-1
                        [&_hr]:border-border [&_hr]:my-8
                        [&_blockquote]:border-l-4 [&_blockquote]:border-main [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:mb-5"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </article>
        </main>
    )
}

import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface ImageCardProps {
    title: string
    description: string
    image: string
    href: string
    repoUrl?: string
    liveLabel?: string
    codeLabel?: string
    tags?: string[]
    className?: string
}

const cardClass = (className?: string) =>
    cn(
        'group block bg-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-base overflow-hidden',
        'transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
        className,
    )

const actionClass =
    'inline-flex items-center justify-center rounded-base border-2 border-border px-2.5 py-1.5 font-mono text-[11px] font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'

function ActionLink({ href, label, secondary = false }: { href: string; label: string; secondary?: boolean }) {
    const isInternal = href.startsWith('/')
    const classes = cn(actionClass, secondary ? 'bg-background text-foreground' : 'bg-main text-main-foreground')

    if (isInternal) {
        return (
            <Link to={href} className={classes}>
                {label}
            </Link>
        )
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
            {label}
        </a>
    )
}

const CardInner = ({
    title,
    description,
    image,
    tags,
    href,
    repoUrl,
    liveLabel = 'Live',
    codeLabel = 'Code',
}: Pick<ImageCardProps, 'title' | 'description' | 'image' | 'tags' | 'href' | 'repoUrl' | 'liveLabel' | 'codeLabel'>) => (
    <>
        <div className="w-full h-40 overflow-hidden border-b-2 border-border bg-secondary-background">
            <img
                src={image}
                alt={title}
                loading="lazy"
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                    const el = e.currentTarget
                    el.style.display = 'none'
                    el.parentElement!.classList.add('flex', 'items-center', 'justify-center')
                    const fallback = document.createElement('span')
                    fallback.className = 'text-4xl font-bold text-border/20 select-none'
                    fallback.textContent = title.charAt(0).toUpperCase()
                    el.parentElement!.appendChild(fallback)
                }}
            />
        </div>
        <div className="p-4 flex flex-col gap-2">
            <h3 className="text-base font-heading leading-tight group-hover:text-main transition-colors">
                {title}
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2">{description}</p>
            <div className="flex flex-wrap gap-2 pt-1">
                <ActionLink href={href} label={liveLabel} />
                {repoUrl && <ActionLink href={repoUrl} label={codeLabel} secondary />}
            </div>
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="font-mono text-xs border border-border px-2 py-0.5 rounded-base text-foreground/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </>
)

export default function ImageCard({ title, description, image, href, repoUrl, liveLabel, codeLabel, tags, className }: ImageCardProps) {
    return (
        <article className={cardClass(className)}>
            <CardInner
                title={title}
                description={description}
                image={image}
                href={href}
                repoUrl={repoUrl}
                liveLabel={liveLabel}
                codeLabel={codeLabel}
                tags={tags}
            />
        </article>
    )
}

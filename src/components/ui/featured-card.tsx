import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface FeaturedCardProps {
    title: string
    description: string
    image: string
    href: string
    tags?: string[]
    className?: string
}

const cardClass = (className?: string) =>
    cn(
        'group block bg-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-base overflow-hidden',
        'transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
        className,
    )

const CardInner = ({ title, description, image, tags }: Pick<FeaturedCardProps, 'title' | 'description' | 'image' | 'tags'>) => (
    <>
        <div className="w-full h-56 overflow-hidden border-b-2 border-border bg-secondary-background relative">
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
                    fallback.className = 'text-5xl font-bold text-border/20 select-none'
                    fallback.textContent = title.charAt(0).toUpperCase()
                    el.parentElement!.appendChild(fallback)
                }}
            />
            <span className="absolute top-3 left-3 bg-main border-2 border-border px-2 py-0.5 font-mono text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-base">
                Featured
            </span>
        </div>
        <div className="p-5 flex flex-col gap-3">
            <h3 className="text-xl font-heading font-bold leading-tight group-hover:text-main transition-colors">
                {title}
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">{description}</p>
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="font-mono text-xs border border-border px-2 py-0.5 rounded-base text-foreground/60"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </>
)

export default function FeaturedCard({ title, description, image, href, tags, className }: FeaturedCardProps) {
    const isInternal = href.startsWith('/')

    if (isInternal) {
        return (
            <Link to={href} className={cardClass(className)}>
                <CardInner title={title} description={description} image={image} tags={tags} />
            </Link>
        )
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cardClass(className)}>
            <CardInner title={title} description={description} image={image} tags={tags} />
        </a>
    )
}

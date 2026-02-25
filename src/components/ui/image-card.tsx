import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface ImageCardProps {
    title: string
    description: string
    image: string
    href: string
    className?: string
}

const cardClass = (className?: string) =>
    cn(
        'group block bg-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-base overflow-hidden',
        'transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]',
        className,
    )

const CardInner = ({ title, description, image }: Pick<ImageCardProps, 'title' | 'description' | 'image'>) => (
    <>
        <div className="w-full h-48 overflow-hidden border-b-2 border-border bg-secondary-background">
            <img
                src={image}
                alt={title}
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
        <div className="p-5">
            <h3 className="text-lg font-heading leading-tight mb-1 group-hover:text-main transition-colors">
                {title}
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">{description}</p>
        </div>
    </>
)

export default function ImageCard({ title, description, image, href, className }: ImageCardProps) {
    const isInternal = href.startsWith('/')

    if (isInternal) {
        return (
            <Link to={href} className={cardClass(className)}>
                <CardInner title={title} description={description} image={image} />
            </Link>
        )
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cardClass(className)}>
            <CardInner title={title} description={description} image={image} />
        </a>
    )
}

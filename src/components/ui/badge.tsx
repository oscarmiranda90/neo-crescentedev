import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
    'inline-flex items-center px-2.5 py-0.5 text-xs font-heading font-bold border-2 border-border rounded-base',
    {
        variants: {
            variant: {
                default: 'bg-main text-main-foreground',
                secondary: 'bg-secondary-background text-foreground',
                neutral: 'bg-foreground text-background',
                outline: 'bg-transparent text-foreground',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    },
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }

import { Component, type ReactNode } from 'react'

interface Props {
    children: ReactNode
    label?: string
}

interface State {
    error: Error | null
}

export class SectionErrorBoundary extends Component<Props, State> {
    state: State = { error: null }

    static getDerivedStateFromError(error: Error): State {
        return { error }
    }

    render() {
        if (this.state.error) {
            return (
                <section className="bg-secondary-background border-b-2 border-border py-24">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="border-2 border-border bg-background p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <p className="text-xl font-bold mb-1">
                                {this.props.label ?? 'This section'} is temporarily unavailable.
                            </p>
                            <p className="text-sm font-mono text-foreground/50">
                                {this.state.error.message}
                            </p>
                        </div>
                    </div>
                </section>
            )
        }
        return this.props.children
    }
}

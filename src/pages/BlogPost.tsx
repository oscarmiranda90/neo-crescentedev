import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface Post {
    title: { en: string; es: string }
    date: string
    readTime: number
    lang: string
    content: { en: React.ReactNode; es: React.ReactNode }
}

const POSTS: Record<string, Post> = {
    'why-neobrutalism': {
        title: {
            en: 'Why I Chose Neobrutalism for My Portfolio',
            es: 'Por qué elegí Neobrutalism para mi portafolio',
        },
        date: '2026-02-25',
        readTime: 4,
        lang: 'en',
        content: {
            en: (
                <>
                    <p>
                        When it was time to redesign my portfolio, I had a clear goal: it had to feel like
                        software made by a developer who actually cares about design. Not a generic template,
                        not an overused minimal grid. Something with character.
                    </p>
                    <p>
                        I landed on <strong>neobrutalism</strong>. It was the right call.
                    </p>

                    <h2>What is neobrutalism?</h2>
                    <p>
                        Neobrutalism is a web design trend rooted in raw, unapologetic aesthetics: thick
                        borders, hard drop shadows (offset, no blur), high-contrast color palettes dominated
                        by blacks, whites, and saturated accent colors like emerald green. It's a reaction against
                        years of soft shadows, rounded corners, and "clean minimalism" that ended up making
                        every product look the same.
                    </p>
                    <p>
                        The style takes inspiration from Brutalist architecture: buildings that expose their
                        raw materials without ornamentation. Applied to web design, it means showing the
                        structure clearly: elements have visible weight, hierarchy is communicated through
                        contrast, and interactivity is tactile and obvious.
                    </p>

                    <h2>Why it works for a developer portfolio</h2>
                    <p>
                        Most developer portfolios fall into one of two traps: they're either too plain
                        (just a list of skills and projects on a white background) or they try too hard to
                        impress with WebGL, animated shaders, and scroll effects that distract from the
                        actual work.
                    </p>
                    <p>
                        Neobrutalism hits a different note. It's expressive without being theatrical. The
                        visual system is clear and consistent: thick black borders, offset shadows,
                        high-contrast buttons. Users always know what's interactive and what's
                        structural. That clarity is a design value in itself, and it aligns with how I
                        approach engineering: opinionated, readable, no magic.
                    </p>
                    <p>
                        There's also a practical reason: it scales well across dark mode, light mode, and
                        different screen sizes without losing its identity. The aesthetic is defined by
                        structure, not by subtle gradients or transparency tricks that break in edge cases.
                    </p>

                    <h2>The technical implementation</h2>
                    <p>
                        I built this site with <strong>React + Vite + TypeScript</strong> and styled it
                        with <strong>Tailwind CSS v4</strong>, using{' '}
                        <a
                            href="https://www.neobrutalism.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            neobrutalism.dev
                        </a>{' '}
                        as the component foundation, an open-source shadcn-compatible component library
                        designed specifically for this aesthetic.
                    </p>
                    <p>
                        The design tokens are simple: an emerald <code>--color-main</code>, a near-black
                        border, a flat <code>4px 4px 0px</code> shadow. Those three values define the
                        entire visual language. Every component (buttons, cards, badges, inputs) inherits
                        from them, so the system stays coherent without having to enforce consistency
                        manually.
                    </p>
                    <p>
                        I added decorative star SVG components at section corners and empty spaces, subtle
                        at low opacity, just enough to break the grid and add rhythm without competing with
                        content. That balance between decoration and restraint is something I paid close
                        attention to: neobrutalism can become noisy fast if you're not deliberate about it.
                    </p>

                    <h2>The tradeoff</h2>
                    <p>
                        Neobrutalism is not for every product. It carries a strong personality, and for
                        enterprise software or products that need to signal trust and stability, it can read
                        as too casual. But for a personal portfolio, where the point is to communicate who
                        you are as a builder, that personality is exactly the asset.
                    </p>
                    <p>
                        I want anyone landing on this site to immediately understand that I'm a developer
                        who thinks about design, makes deliberate choices, and isn't afraid to have an
                        opinion. Neobrutalism communicates all of that before a single word is read.
                    </p>

                    <p className="mt-10 text-sm text-foreground/60">
                        Source:{' '}
                        <a
                            href="https://author.envato.com/hub/trend-deep-dive-neo-brutalism/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Envato: Trend Deep Dive: Neo-Brutalism
                        </a>
                    </p>
                </>
            ),
            es: (
                <>
                    <p>
                        Cuando llegó el momento de rediseñar mi portafolio, tenía un objetivo claro: que se
                        sintiera como software hecho por un desarrollador que realmente se preocupa por el
                        diseño. No una plantilla genérica, no una cuadrícula minimalista sobreutilizada.
                        Algo con carácter.
                    </p>
                    <p>
                        Llegué al <strong>neobrutalism</strong>. Fue la decisión correcta.
                    </p>

                    <h2>¿Qué es el neobrutalism?</h2>
                    <p>
                        El neobrutalism es una tendencia de diseño web basada en estéticas crudas y sin
                        disculpas: bordes gruesos, sombras duras sin desenfoque, paletas de alto contraste
                        dominadas por negro, blanco y colores de acento saturados como el verde esmeralda. Es una
                        reacción a años de sombras suaves, esquinas redondeadas y "minimalismo limpio" que
                        terminó haciendo que todos los productos se vieran igual.
                    </p>
                    <p>
                        El estilo se inspira en la arquitectura Brutalista: edificios que exponen sus
                        materiales crudos sin ornamentación. Aplicado al diseño web, significa mostrar la
                        estructura con claridad: los elementos tienen peso visible, la jerarquía se
                        comunica por contraste y la interactividad es táctil y evidente.
                    </p>

                    <h2>Por qué funciona para un portafolio de desarrollador</h2>
                    <p>
                        La mayoría de los portafolios de desarrolladores caen en una de dos trampas: son
                        demasiado simples (solo una lista de habilidades y proyectos sobre fondo blanco) o
                        intentan impresionar con WebGL, shaders animados y efectos de scroll que distraen
                        del trabajo real.
                    </p>
                    <p>
                        El neobrutalism logra algo diferente. Es expresivo sin ser teatral. El sistema
                        visual es claro y consistente: bordes negros gruesos, sombras desplazadas, botones
                        de alto contraste. El usuario siempre sabe qué es interactivo y qué es
                        estructura. Esa claridad es un valor de diseño en sí mismo, y se alinea con cómo
                        abordo la ingeniería: opinado, legible, sin magia.
                    </p>
                    <p>
                        También hay una razón práctica: escala bien en modo oscuro, modo claro y diferentes
                        tamaños de pantalla sin perder su identidad. La estética está definida por la
                        estructura, no por gradientes sutiles o trucos de transparencia que fallan en casos
                        extremos.
                    </p>

                    <h2>La implementación técnica</h2>
                    <p>
                        Construí este sitio con <strong>React + Vite + TypeScript</strong> y lo estilicé
                        con <strong>Tailwind CSS v4</strong>, usando{' '}
                        <a
                            href="https://www.neobrutalism.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            neobrutalism.dev
                        </a>{' '}
                        como base de componentes, una librería de componentes compatible con shadcn,
                        de código abierto, diseñada específicamente para esta estética.
                    </p>
                    <p>
                        Los tokens de diseño son simples: un esmeralda <code>--color-main</code>, un borde
                        casi negro y una sombra plana de <code>4px 4px 0px</code>. Esos tres valores
                        definen todo el lenguaje visual. Cada componente hereda de ellos, por lo que el
                        sistema se mantiene coherente sin tener que aplicar consistencia manualmente.
                    </p>
                    <p>
                        Agregué componentes SVG de estrellas decorativas en las esquinas de secciones y
                        espacios vacíos, sutiles a baja opacidad, suficientes para romper la grilla y
                        agregar ritmo sin competir con el contenido.
                    </p>

                    <h2>La desventaja</h2>
                    <p>
                        El neobrutalism no es para todos los productos. Tiene una personalidad fuerte, y
                        para software empresarial o productos que necesitan transmitir confianza y
                        estabilidad, puede resultar demasiado casual. Pero para un portafolio personal,
                        donde el objetivo es comunicar quién eres como creador, esa personalidad es
                        exactamente el activo.
                    </p>
                    <p>
                        Quiero que cualquiera que llegue a este sitio entienda de inmediato que soy un
                        desarrollador que piensa en el diseño, toma decisiones deliberadas y no tiene miedo
                        de tener una opinión. El neobrutalism comunica todo eso antes de que se lea una
                        sola palabra.
                    </p>

                    <p className="mt-10 text-sm text-foreground/60">
                        Fuente:{' '}
                        <a
                            href="https://author.envato.com/hub/trend-deep-dive-neo-brutalism/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Envato: Trend Deep Dive: Neo-Brutalism
                        </a>
                    </p>
                </>
            ),
        },
    },
}

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>()
    const post = slug ? POSTS[slug] : undefined

    if (!post) {
        return (
            <main className="max-w-3xl mx-auto px-4 py-20">
                <Button variant="outline" size="sm" asChild className="mb-8">
                    <Link to="/blog">← Back to Blog</Link>
                </Button>
                <h1 className="text-4xl font-bold mb-4">Post not found</h1>
                <p className="text-lg text-foreground/70">
                    This post doesn't exist or may have been moved.
                </p>
            </main>
        )
    }

    // Detect browser language for bilingual posts
    const lang = (navigator.language.startsWith('es') ? 'es' : 'en') as 'en' | 'es'
    const title = post.title[lang]
    const content = post.content[lang]

    return (
        <main className="max-w-3xl mx-auto px-4 py-20">
            <Button variant="outline" size="sm" asChild className="mb-8">
                <Link to="/blog">← Back to Blog</Link>
            </Button>

            <article>
                <div className="flex items-center gap-3 mb-4">
                    <Badge variant="neutral">{post.lang.toUpperCase()}</Badge>
                    <span className="text-xs font-mono text-foreground/60">
                        {post.date} · {post.readTime} min read
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-10 border-b-2 border-border pb-6">
                    {title}
                </h1>

                <div className="prose-neo flex flex-col gap-6 text-lg leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:border-b-2 [&_h2]:border-border [&_h2]:pb-2 [&_a]:underline [&_a]:font-semibold [&_a]:underline-offset-2 [&_code]:font-mono [&_code]:bg-secondary-background [&_code]:border [&_code]:border-border [&_code]:px-1 [&_code]:rounded-sm [&_code]:text-sm [&_strong]:font-bold">
                    {content}
                </div>
            </article>
        </main>
    )
}

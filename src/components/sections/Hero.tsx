import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Star38 from '@/components/stars/s38'
import Star36 from '@/components/stars/s36'
import oscarTravel from '@/assets/oscar_travel.webp'

const WORD_POOL = [
    'Flutter', 'React', 'Dart', 'Next.js', 'Supabase',
    'Firebase', 'Python', 'Tailwind', 'Claude', 'Figma',
    'Rive', 'UX/UI', 'AI', 'No-Code', 'Venezuela',
    'Musician', 'Lottie', 'Photoshop',
]

const CHIP_POSITIONS = [
    'absolute -top-4 -right-4',
    'absolute -bottom-4 -left-4',
    'absolute top-1/2 -translate-y-1/2 -right-16',
]

const CHIP_STYLES = [
    'bg-foreground text-background',
    'bg-background',
    'bg-main',
]

function pickThree(pool: string[], prev: string[]): string[] {
    const available = pool.filter((w) => !prev.includes(w))
    const shuffled = [...available].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 3)
}

export default function Hero() {
    const { t } = useTranslation()
    const [words, setWords] = useState(() => pickThree(WORD_POOL, []))
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>
        const interval = setInterval(() => {
            setVisible(false)
            timeout = setTimeout(() => {
                setWords((prev) => pickThree(WORD_POOL, prev))
                setVisible(true)
            }, 800)
        }, 4000)
        return () => {
            clearInterval(interval)
            clearTimeout(timeout)
        }
    }, [])

    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section className="relative h-screen flex items-center bg-background border-b-2 border-border overflow-hidden">
            {/* Background star - slow swirl */}
            <Star38
                spinDuration={22}
                size={220}
                className="absolute bottom-6 right-6 text-border opacity-[0.05] pointer-events-none"
            />

            <div className="max-w-5xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text - staggered fade-up on load */}
                    <div className="flex flex-col gap-6">
                        <p
                            className="font-mono text-base font-bold"
                            style={{ animation: 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both' }}
                        >
                            {t('hero.greeting')}{' '}
                            <span className="bg-main px-1">{t('hero.name')}.</span>
                        </p>

                        <h1
                            className="text-5xl sm:text-6xl font-bold leading-none tracking-tight"
                            style={{ animation: 'fade-up 0.65s cubic-bezier(0.22,1,0.36,1) 0.22s both' }}
                        >
                            {t('hero.title')}
                            <span className="text-main">.</span>
                        </h1>

                        <p
                            className="text-lg sm:text-xl font-base leading-relaxed max-w-lg"
                            style={{ animation: 'fade-up 0.65s cubic-bezier(0.22,1,0.36,1) 0.36s both' }}
                        >
                            {t('hero.subtitle')}
                        </p>

                        <div
                            className="flex flex-wrap gap-4 pt-2"
                            style={{ animation: 'fade-up 0.65s cubic-bezier(0.22,1,0.36,1) 0.5s both' }}
                        >
                            <Button size="lg" onClick={() => scrollTo('projects')}>
                                {t('hero.cta_projects')} →
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="https://linkedin.com/in/oscarcrescente" target="_blank" rel="noopener noreferrer">
                                    {t('hero.cta_linkedin')} ↗
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" onClick={() => scrollTo('contact')}>
                                {t('hero.cta_contact')}
                            </Button>
                        </div>
                    </div>

                    {/* Photo block - floats + fades in */}
                    <div
                        className="hidden lg:flex items-center justify-center"
                        style={{ animation: 'fade-in 0.8s ease 0.4s both, float 6s ease-in-out 1.2s infinite' }}
                    >
                        <div className="relative mx-16 my-6">
                            <Star36
                                size={32}
                                spinDuration={30}
                                spinReverse
                                className="absolute -top-5 -left-5 text-border opacity-40 z-10 pointer-events-none"
                            />
                            <div className="w-64 h-64 border-4 border-main shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                                <img
                                    src={oscarTravel}
                                    alt="Oscar Crescente"
                                    width={640}
                                    height={582}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {words.map((word, i) => (
                                <div
                                    key={i}
                                    className={`${CHIP_POSITIONS[i]} ${CHIP_STYLES[i]} border-2 border-border px-3 py-1 font-mono text-xs font-bold shadow-shadow rounded-base transition-opacity duration-700 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    {word}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

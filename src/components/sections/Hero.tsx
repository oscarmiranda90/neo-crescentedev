import { useTranslation } from 'react-i18next'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLandingMotion } from '@/hooks/useLandingMotion'
import FactoryScene from '@/components/motion/FactoryScene'

export default function Hero() {
    const { t } = useTranslation()
    const { paused, reduced, setPaused } = useLandingMotion()
    const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: reduced || paused ? 'instant' : 'smooth' })

    return (
        <section className={`landing-hero ${reduced ? 'is-reduced' : ''} ${paused ? 'is-paused' : ''}`} aria-labelledby="hero-title">
            <div className="landing-hero__grid max-w-5xl mx-auto px-6 w-full">
                <div className="landing-hero__copy">
                    <div className="landing-hero__copy-body">
                        <h1 id="hero-title" className="hero-title font-bold">
                            {t('hero.title')}<span className="text-main">.</span>
                        </h1>
                        <p className="hero-byline text-lg font-semibold">
                            {t('hero.greeting')} <span className="hero-name">{t('hero.name')}.</span>
                        </p>
                        <p className="text-lg leading-relaxed max-w-lg">{t('hero.subtitle')}</p>
                        <div className="hero-actions flex flex-wrap items-center gap-4">
                            <Button size="lg" onClick={() => scrollTo('projects')}>
                                {t('hero.cta_projects')} <ArrowRight size={18} aria-hidden="true" />
                            </Button>
                            <Button size="lg" variant="outline" onClick={() => scrollTo('contact')}>
                                {t('hero.cta_contact')}
                            </Button>
                            <a href="https://linkedin.com/in/oscarcrescente" target="_blank" rel="noopener noreferrer"
                                className="inline-flex gap-1 items-center text-sm font-semibold underline underline-offset-4 py-2">
                                {t('hero.cta_linkedin')} <ArrowUpRight size={16} aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <div className="hero-foot">
                        <p>{t('hero.disciplines')}</p>
                        <button type="button" onClick={() => scrollTo('about')} className="inline-flex items-center gap-2 font-semibold">
                            {t('hero.scroll')} <ArrowDown size={16} aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <FactoryScene paused={paused} reduced={reduced} onToggle={() => setPaused((value) => !value)} />
            </div>
        </section>
    )
}

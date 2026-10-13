import { useTranslation } from 'react-i18next'

interface Pillar { title: string; text: string }

/** The working philosophy, stated once and plainly; the rest of the site echoes it. */
export default function Philosophy() {
    const { t } = useTranslation()
    const pillars = t('philosophy.pillars', { returnObjects: true }) as Pillar[]

    return (
        <section aria-labelledby="philosophy-title" className="bg-foreground text-background border-b-2 border-border py-20 sm:py-28">
            <div className="max-w-5xl mx-auto px-6">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-main mb-6">{t('philosophy.kicker')}</p>
                <h2 id="philosophy-title" className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.02] max-w-4xl text-balance">
                    {t('philosophy.heading')}
                </h2>

                <ol className="grid md:grid-cols-3 gap-10 md:gap-8 mt-14 sm:mt-20">
                    {pillars.map((pillar, i) => (
                        <li key={pillar.title} className="border-t-2 border-main pt-6">
                            <span className="block font-mono text-sm font-bold text-main mb-4" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                            <h3 className="text-2xl font-bold leading-tight text-balance">{pillar.title}</h3>
                            <p className="mt-3 leading-relaxed opacity-80">{pillar.text}</p>
                        </li>
                    ))}
                </ol>

                <div className="mt-16 sm:mt-20 bg-main text-main-foreground border-2 border-background p-6 sm:p-10 shadow-[6px_6px_0px_0px_var(--background)]">
                    <p className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-balance">{t('philosophy.closing')}</p>
                    <p className="mt-4 text-sm sm:text-base font-semibold">{t('philosophy.closing_note')}</p>
                </div>
            </div>
        </section>
    )
}

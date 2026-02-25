import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import Star36 from '@/components/stars/s36'
import Star38 from '@/components/stars/s38'

const SOCIALS = [
    { label: 'GitHub', url: 'https://github.com/oscarmiranda90' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/oscarcrescente' },
    { label: 'Twitter / X', url: 'https://x.com/Saturamas' },
]

export default function Contact() {
    const { t } = useTranslation()

    return (
        <section id="contact" className="relative bg-main border-b-2 border-black py-24 overflow-hidden">
            {/* Stars on yellow — use black at low opacity */}
            <Star38 size={220} className="absolute -top-12 -right-12 text-black opacity-[0.06] pointer-events-none" />
            <Star36 size={48} className="absolute bottom-8 right-48 text-black opacity-10 pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                    {t('contact.heading')}
                </h2>
                <p className="text-lg max-w-xl mb-10">{t('contact.subtext')}</p>

                <div className="flex flex-wrap gap-4 mb-12">
                    <Button variant="neutral" size="lg" asChild>
                        <a href="mailto:contact@crescente.dev">
                            {t('contact.email_cta')} ✉
                        </a>
                    </Button>
                    <Button variant="neutral" size="lg" asChild>
                        <a href="https://wa.me/584126785596" target="_blank" rel="noopener noreferrer">
                            {t('contact.whatsapp_cta')}
                        </a>
                    </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                    {SOCIALS.map((s) => (
                        <a
                            key={s.label}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono font-bold text-sm border-2 border-border rounded-base px-4 py-2 bg-background shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                        >
                            {s.label} ↗
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

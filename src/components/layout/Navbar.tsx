import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import Star38 from '@/components/stars/s38'

export default function Navbar() {
    const { t, i18n } = useTranslation()
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    const toggleLang = () => {
        const next = i18n.language === 'en' ? 'es' : 'en'
        i18n.changeLanguage(next)
    }

    const links = [
        { label: t('nav.about'), id: 'about' },
        { label: t('nav.projects'), id: 'projects' },
        { label: t('nav.blog'), id: 'blog' },
        { label: t('nav.contact'), id: 'contact' },
    ]

    return (
        <header className="sticky top-0 z-50 bg-background border-b-2 border-border">
            <nav aria-label="Main navigation" className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Go to top of page"
                    className="font-mono font-bold text-lg hover:text-main transition-colors flex items-center gap-2"
                >
                    <Star38 size={20} color="currentColor" spinDuration={0} />
                    crescente.dev
                </button>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6">
                    {links.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => scrollTo(l.id)}
                            className="text-sm font-bold hover:underline underline-offset-4"
                        >
                            {l.label}
                        </button>
                    ))}

                    {/* Lang toggle */}
                    <button
                        onClick={toggleLang}
                        aria-label={i18n.language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
                        className="font-mono text-sm border-2 border-border px-2 py-0.5 rounded-base shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                        {i18n.language === 'en' ? 'ES' : 'EN'}
                    </button>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden font-bold text-xl"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden border-t-2 border-black bg-main">
                    <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-4">
                        {links.map((l) => (
                            <button
                                key={l.id}
                                onClick={() => scrollTo(l.id)}
                                className="text-left font-bold text-lg"
                            >
                                {l.label}
                            </button>
                        ))}
                        <Button variant="outline" size="sm" className="w-fit" onClick={toggleLang}>
                            {i18n.language === 'en' ? 'Switch to ES' : 'Switch to EN'}
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}

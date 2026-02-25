import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="border-t-2 border-border bg-foreground text-background py-8">
            <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-mono text-sm">{t('footer.copy')}</span>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="font-bold text-sm underline underline-offset-4 hover:text-main transition-colors"
                >
                    {t('footer.back_top')} ↑
                </button>
            </div>
        </footer>
    )
}

import { useTranslation } from 'react-i18next'
import ImageCard from '@/components/ui/image-card'
import { projects } from '@/data/projects'
import Star38 from '@/components/stars/s38'

export default function Projects() {
    const { t, i18n } = useTranslation()
    const lang = i18n.language as 'en' | 'es'

    return (
        <section id="projects" className="relative bg-background border-b-2 border-border py-24 overflow-hidden">
            <Star38 size={200} className="absolute -bottom-10 -right-10 text-border opacity-[0.04] pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12">
                    {t('projects.heading')}
                    <span className="text-main">.</span>
                </h2>

                {projects.length === 0 ? (
                    <p className="text-lg font-mono">{t('projects.no_projects')}</p>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ImageCard
                                key={project.id}
                                title={project.title}
                                description={project.description[lang]}
                                image={project.image}
                                href={project.liveUrl}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import oscarPortrait from '@/assets/oscar-portrait.webp'
import Star38 from '@/components/stars/s38'
import Star36 from '@/components/stars/s36'
import { useInView } from '@/hooks/useInView'

const skillGroups = [
    {
        label: 'Mobile & Web',
        skills: ['Flutter', 'Dart', 'React', 'Next.js', 'Vite', 'Tailwind CSS'],
    },
    {
        label: 'Backend & Data',
        skills: ['Supabase', 'Firebase', 'Python', 'MySQL', 'REST APIs'],
    },
    {
        label: 'AI & Automation',
        skills: ['Claude', 'OpenAI', 'Google AI', 'AI Prompting', 'No-Code / Low-Code'],
    },
    {
        label: 'Design & Motion',
        skills: ['Figma', 'UX/UI Design', 'Rive', 'Lottie', 'Canva', 'Affinity Designer', 'Photoshop'],
    },
    {
        label: 'Workflow',
        skills: ['Claude Code', 'GitHub Copilot', 'Git', 'App Store Connect', 'Agile / Scrum'],
    },
]

export default function About() {
    const { t, i18n } = useTranslation()
    const cvFile = i18n.language === 'es' ? '/cv_es.pdf' : '/cv_en.pdf'
    const sectionRef = useInView<HTMLElement>()

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative bg-secondary-background border-b-2 border-border py-24 overflow-hidden"
        >
            {/* Background star - slow swirl */}
            <Star38
                spinDuration={26}
                size={160}
                className="absolute -top-8 -left-8 text-border opacity-[0.05] pointer-events-none"
            />

            <div className="max-w-5xl mx-auto px-4">
                <h2 className="reveal reveal-fade-up text-4xl sm:text-5xl font-bold mb-12" data-delay="0ms">
                    {t('about.heading')}
                    <span className="text-main">.</span>
                </h2>

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Portrait - slides in from left */}
                    <div className="reveal reveal-slide-left hidden lg:flex flex-col items-center gap-4" data-delay="100ms">
                        <div className="relative w-56 h-56 shrink-0">
                            <Star36
                                spinDuration={20}
                                spinReverse
                                size={28}
                                className="absolute -top-4 -right-4 text-main z-10 pointer-events-none"
                            />
                            <div className="w-full h-full border-2 border-border shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                                <img
                                    src={oscarPortrait}
                                    alt="Oscar Crescente"
                                    loading="lazy"
                                    width={560}
                                    height={635}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-fit" asChild>
                            <Link to="/blog">{t('blog.view_all')} →</Link>
                        </Button>
                    </div>

                    {/* Bio - slides in from right */}
                    <div className="reveal reveal-slide-right flex flex-col gap-6" data-delay="150ms">
                        {(['about.bio1', 'about.bio2', 'about.bio3', 'about.bio4'] as const).map((key) => (
                            <p key={key} className="text-lg leading-relaxed">{t(key)}</p>
                        ))}
                        <Button variant="outline" className="w-fit" asChild>
                            <a href={cvFile} download>
                                {t('about.resume')} ↓
                            </a>
                        </Button>
                    </div>

                    {/* Skills - fades up */}
                    <div className="reveal reveal-fade-up" data-delay="280ms">
                        <h3 className="font-bold text-lg mb-4">{t('about.skills_heading')}</h3>
                        <div className="flex flex-col gap-4">
                            {skillGroups.map((group) => (
                                <div key={group.label}>
                                    <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-2">{group.label}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {group.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

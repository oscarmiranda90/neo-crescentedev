import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import oscarPortrait from '@/assets/oscar-portrait.png'
import Star38 from '@/components/stars/s38'
import Star36 from '@/components/stars/s36'

const skills = [
    'Flutter', 'Dart', 'React', 'Next.js', 'Vite', 'Tailwind CSS',
    'Supabase', 'Firebase', 'Python', 'MySQL',
    'Google AI', 'AI Prompting', 'No-Code Tools',
]

export default function About() {
    const { t } = useTranslation()

    return (
        <section id="about" className="relative bg-secondary-background border-b-2 border-border py-24 overflow-hidden">
            {/* Background star — top left */}
            <Star38 size={160} className="absolute -top-8 -left-8 text-border opacity-[0.05] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12">
                    {t('about.heading')}
                    <span className="text-main">.</span>
                </h2>

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Portrait */}
                    <div className="hidden lg:flex flex-col items-center gap-4">
                        <div className="relative w-56 h-56 shrink-0">
                            <Star36 size={28} className="absolute -top-4 -right-4 text-main z-10 pointer-events-none" />
                            <div className="w-full h-full border-2 border-border shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                                <img
                                    src={oscarPortrait}
                                    alt="Oscar Crescente"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-fit" asChild>
                            <Link to="/blog">{t('blog.view_all')} →</Link>
                        </Button>
                    </div>

                    {/* Bio */}
                    <div className="flex flex-col gap-6">
                        {(['about.bio1', 'about.bio2', 'about.bio3', 'about.bio4'] as const).map((key) => (
                            <p key={key} className="text-lg leading-relaxed">{t(key)}</p>
                        ))}
                        <Button variant="outline" className="w-fit" asChild>
                            <a href="/resume.pdf" download>
                                {t('about.resume')} ↓
                            </a>
                        </Button>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">{t('about.skills_heading')}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <Badge key={skill} variant="secondary">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

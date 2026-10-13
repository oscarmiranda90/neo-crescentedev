import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowRight, ArrowUpRight, Bot, Globe, PenTool, Server, Smartphone, Workflow, type LucideIcon } from 'lucide-react'
import oscarPortrait from '@/assets/oscar-portrait.webp'

interface UsedIn { name: string; to?: string; href?: string }

/** Mobile carries the most layers, so it gets the large card with the stack split by layer (all from the CV). */
const mobileSections = [
    { key: 'core', skills: ['Flutter', 'Dart', 'React Native', 'Expo'] },
    { key: 'architecture', skills: ['BLoC', 'Riverpod', 'Clean Architecture', 'State Design'] },
    { key: 'data', skills: ['SQLite', 'Offline-first Sync', 'Supabase', 'Firebase', 'REST APIs'] },
    { key: 'capabilities', skills: ['Real-time Multiplayer', 'WebSockets', 'LLMs', 'Tool Calling', 'Voice AI', 'Native iOS / Android'] },
    { key: 'motion', skills: ['Rive', 'Lottie', 'Three.js'] },
    { key: 'shipping', skills: ['App Store Connect', 'Google Play Console', 'CI/CD'] },
]
const mobileUsedIn: UsedIn[] = [
    { name: 'SupaFilm', to: '/supafilm' }, { name: 'Mythika', to: '/mythika' }, { name: 'RepSet', to: '/repset' },
    { name: 'Ribeye', to: '/ribeye' }, { name: 'Moira', href: 'https://apps.apple.com/us/app/moira-manifestation-journal/id6751951846' },
]

/** Each group points at shipped work that actually uses it (projects.ts + CV). */
const toolGroups: { key: string; icon: LucideIcon; skills: string[]; usedIn: UsedIn[] }[] = [
    {
        key: 'web', icon: Globe,
        skills: ['React', 'Next.js', 'TypeScript', 'Astro', 'React Native / Expo', 'Three.js'],
        usedIn: [{ name: 'Invitta', href: 'https://invitta.app' }, { name: 'Barracuda Fencing', href: 'https://www.barracudafencing.com' }],
    },
    {
        key: 'backend', icon: Server,
        skills: ['Node.js', 'Supabase', 'Firebase', 'Cloudflare Workers', 'Durable Objects', 'R2', 'WebSockets', 'REST APIs'],
        usedIn: [{ name: 'Mythika', to: '/mythika' }, { name: 'RepSet', to: '/repset' }, { name: 'Invitta', href: 'https://invitta.app' }],
    },
    {
        key: 'ai', icon: Bot,
        skills: ['OpenAI', 'Claude', 'Gemini', 'Hermes', 'MCP', 'Agent Harnesses', 'Multi-agent Systems', 'Tool Calling', 'ElevenLabs', 'Hyperframes'],
        usedIn: [{ name: 'SupaFilm', to: '/supafilm' }, { name: 'RepSet', to: '/repset' }, { name: 'AI Content Factory', href: 'https://www.tiktok.com/@ultramare.dev' }],
    },
    {
        key: 'automation', icon: Workflow,
        skills: ['GoHighLevel', 'Meta Ads', 'WhatsApp Bot', 'Workflows'],
        usedIn: [{ name: 'Barracuda Fencing', href: 'https://www.barracudafencing.com' }],
    },
    {
        key: 'design', icon: PenTool,
        skills: ['Product Engineering', 'UX/UI', 'Figma', 'Design Systems', 'Branding', 'Packaging', 'Rive', 'Lottie'],
        usedIn: [{ name: 'SupaFilm', to: '/supafilm' }, { name: 'Mythika', to: '/mythika' }, { name: 'RepSet', to: '/repset' }],
    },
]

const usedInClass = 'inline-flex items-center gap-0.5 font-semibold underline underline-offset-4 decoration-foreground/40 hover:decoration-main'

function UsedInLink({ item }: { item: UsedIn }) {
    if (item.to) return <Link to={item.to} className={usedInClass}>{item.name}</Link>
    if (item.href) {
        return (
            <a href={item.href} target="_blank" rel="noopener noreferrer" className={usedInClass}>
                {item.name} <ArrowUpRight size={12} aria-hidden="true" />
            </a>
        )
    }
    return <span className="font-semibold">{item.name}</span>
}

export default function About() {
    const { t, i18n } = useTranslation()
    const cvFile = i18n.resolvedLanguage === 'es' ? '/cv_es.pdf' : '/cv_en.pdf'
    const stats = t('about.toolkit.stats', { returnObjects: true }) as { value: string; label: string }[]
    const pipeline = t('about.toolkit.groups.mobile.pipeline', { returnObjects: true }) as string[]

    return (
        <section id="about" className="relative bg-secondary-background border-b-2 border-border py-20 sm:py-28">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 max-w-2xl text-balance">
                    {t('about.heading')}
                </h2>
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className="flex items-center gap-5 mb-2">
                            <img src={oscarPortrait} alt="Oscar Crescente" loading="lazy" width={560} height={635}
                                className="w-24 h-28 object-cover object-top border-2 border-border" />
                            <div>
                                <p className="text-xl font-bold">Oscar Crescente</p>
                                <a href="https://ultramare.dev" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm underline underline-offset-4 mt-1 hover:decoration-main">
                                    Ultramare.dev <ArrowUpRight size={14} aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                        {(['about.bio1', 'about.bio2', 'about.bio3', 'about.bio4'] as const).map((key) => (
                            <p key={key} className="text-base sm:text-lg leading-relaxed">{t(key)}</p>
                        ))}
                        <Button variant="outline" className="w-fit mt-2" asChild>
                            <a href={cvFile} download>{t('about.resume')} <ArrowDown size={16} aria-hidden="true" /></a>
                        </Button>
                    </div>
                    <dl className="lg:col-span-5 grid grid-cols-2 border-2 border-border bg-main shadow-[4px_4px_0px_0px_var(--border)]">
                        {stats.map((stat, i) => (
                            <div key={stat.label} className={`flex flex-col-reverse justify-end p-5 border-border ${i % 2 ? 'border-l-2' : ''} ${i > 1 ? 'border-t-2' : ''}`}>
                                <dt className="text-sm font-semibold text-main-foreground mt-1">{stat.label}</dt>
                                <dd className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-main-foreground">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="mt-20 sm:mt-24">
                    <div className="grid lg:grid-cols-12 gap-4 lg:gap-16 items-end mb-10">
                        <h3 className="lg:col-span-5 text-3xl sm:text-4xl font-bold text-balance">{t('about.skills_heading')}</h3>
                        <p className="lg:col-span-7 text-base sm:text-lg leading-relaxed">{t('about.toolkit.intro')}</p>
                    </div>

                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <li className="sm:col-span-2 lg:row-span-2 flex flex-col border-2 border-border rounded-base bg-main text-main-foreground p-6 sm:p-8 shadow-[6px_6px_0px_0px_var(--border)]">
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <span className="grid place-items-center w-14 h-14 bg-secondary-background text-foreground border-2 border-border rounded-base">
                                    <Smartphone size={26} aria-hidden="true" />
                                </span>
                                <span className="font-mono text-xs font-bold" aria-hidden="true">
                                    01
                                </span>
                            </div>
                            <h4 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{t('about.toolkit.groups.mobile.title')}</h4>
                            <p className="text-base sm:text-lg leading-relaxed mt-3 mb-8 max-w-xl">{t('about.toolkit.groups.mobile.line')}</p>
                            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                                {mobileSections.map((section) => (
                                    <div key={section.key}>
                                        <dt className="font-mono text-xs font-bold uppercase tracking-wide mb-2">{t(`about.toolkit.groups.mobile.sections.${section.key}`)}</dt>
                                        <dd className="flex flex-wrap gap-2">
                                            {section.skills.map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                            <ol className="mt-auto mb-6 flex flex-wrap items-center gap-x-1.5 gap-y-2 font-mono text-xs font-bold">
                                {pipeline.map((step, i) => (
                                    <li key={step} className="flex items-center gap-1.5">
                                        <span className="bg-foreground text-background px-2 py-1">{step}</span>
                                        {i < pipeline.length - 1 && <ArrowRight size={14} aria-hidden="true" />}
                                    </li>
                                ))}
                            </ol>
                            <p className="pt-4 border-t-2 border-border text-sm flex flex-wrap gap-x-3 gap-y-1">
                                <span className="font-mono text-xs uppercase tracking-wide self-center">{t('about.toolkit.used_in')}</span>
                                {mobileUsedIn.map((item) => <UsedInLink key={item.name} item={item} />)}
                            </p>
                        </li>
                        {toolGroups.map(({ key, icon: Icon, skills, usedIn }, i) => (
                            <li key={key} className="flex flex-col border-2 border-border rounded-base bg-background p-6 shadow-[4px_4px_0px_0px_var(--border)]">
                                <div className="flex items-center justify-between mb-5">
                                    <span className="grid place-items-center w-11 h-11 bg-main text-main-foreground border-2 border-border rounded-base">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <span className="font-mono text-xs font-bold" aria-hidden="true">{String(i + 2).padStart(2, '0')}</span>
                                </div>
                                <h4 className="text-xl font-bold">{t(`about.toolkit.groups.${key}.title`)}</h4>
                                <p className="text-sm leading-relaxed mt-2 mb-5">{t(`about.toolkit.groups.${key}.line`)}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {skills.map((skill) => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                                </div>
                                <p className="mt-auto pt-4 border-t border-foreground/20 text-sm flex flex-wrap gap-x-3 gap-y-1">
                                    <span className="font-mono text-xs uppercase tracking-wide self-center">{t('about.toolkit.used_in')}</span>
                                    {usedIn.map((item) => <UsedInLink key={item.name} item={item} />)}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-8 text-sm leading-relaxed">{t('about.toolkit.workflow')}</p>
                </div>
            </div>
        </section>
    )
}

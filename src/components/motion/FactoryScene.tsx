import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Pause, Play } from 'lucide-react'
import supafilm from '@/assets/supafilm-ui.webp'
import mythika from '@/assets/mythika-ui.webp'
import repset from '@/assets/repset-ui.webp'
import invitta from '@/assets/invitta-ui.webp'
import hermes from '@/assets/hermes-ui.webp'
import ultramareLogo from '@/assets/ultramare-logo.webp'

interface Props { paused: boolean; reduced: boolean; onToggle: () => void }
interface Chapter { kicker: string; title: string; line: string; link?: string }

/** Stack nodes wired into the device. `chapters` lists the builds each one really feeds (projects.ts + CV). */
const NODES = [
    { id: 'ux', label: 'UX/UI', side: 'left', row: 0, depth: 0.6, chapters: [0, 1, 2, 3] },
    { id: 'flutter', label: 'Flutter', side: 'left', row: 1, depth: 1, chapters: [0, 1, 2] },
    { id: 'supabase', label: 'Supabase', side: 'left', row: 2, depth: 0.4, chapters: [1, 3] },
    { id: 'cloudflare', label: 'Cloudflare', side: 'left', row: 3, depth: 0.8, chapters: [1] },
    { id: 'ai', label: '', side: 'right', row: 0, depth: 0.9, chapters: [0, 2, 4] },
    { id: 'hermes', label: 'Hermes', side: 'right', row: 1, depth: 0.5, chapters: [4] },
    { id: 'mcp', label: 'MCP', side: 'right', row: 2, depth: 1, chapters: [4] },
    { id: 'typescript', label: 'TypeScript', side: 'right', row: 3, depth: 0.7, chapters: [3] },
] as const

/** Real UI captures composed to the iPhone 16 screen (status bar added, gaps outpainted with Codex imagegen). */
const SCREENS = [
    { src: supafilm, tone: '#fffcf7', to: '/supafilm', external: false },
    { src: mythika, tone: '#25074f', to: '/mythika', external: false },
    { src: repset, tone: '#161614', to: '/repset', external: false },
    { src: invitta, tone: '#3e2b1a', to: 'https://invitta.app', external: true },
    { src: hermes, tone: '#09080d', to: 'https://www.tiktok.com/@ultramare.dev', external: true },
]
/** Progress windows in which each next build is "compiled" onto the screen, and the resting point of each chapter. */
const REVEALS: [number, number][] = [[0.07, 0.2], [0.29, 0.42], [0.52, 0.65], [0.75, 0.88]]
const STOPS = [0, 0.25, 0.48, 0.71, 0.95]
/** The bench plays on its own: a build compiles, holds, then the next one starts. Scrolling is never captured. */
const TRANSITION_MS = 1500
const DWELL_MS = 4200

const clamp = (v: number) => Math.min(1, Math.max(0, v))
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const smooth = (a: number, b: number, v: number) => {
    const t = clamp((v - a) / (b - a))
    return t * t * (3 - 2 * t)
}
const pad = (n: number) => String(n).padStart(2, '0')

/** Canvas can't always parse oklch(); fall back to a known value if it rejects the token. */
function resolveColor(ctx: CanvasRenderingContext2D, value: string, fallback: string) {
    ctx.fillStyle = fallback
    ctx.fillStyle = value
    return value && ctx.fillStyle !== fallback.toLowerCase() ? value : fallback
}

export default function FactoryScene({ paused, reduced, onToggle }: Props) {
    const { t } = useTranslation()
    const chapters = t('hero.factory.chapters', { returnObjects: true }) as Chapter[]
    const [chapter, setChapter] = useState(0)

    const stageRef = useRef<HTMLDivElement>(null)
    const sceneRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const phoneRef = useRef<HTMLDivElement>(null)
    const nodeRefs = useRef<(HTMLSpanElement | null)[]>([])
    const chapterRef = useRef(0)
    const targetRef = useRef(0)
    const pRef = useRef(0)
    const tweenRef = useRef({ from: 0, to: 0, start: 0 })
    const dwellRef = useRef(0)
    const holdRef = useRef(false)
    const introRef = useRef<number | null>(null)
    const kickRef = useRef<() => void>(() => {})

    useEffect(() => {
        const stage = stageRef.current
        const scene = sceneRef.current
        const canvas = canvasRef.current
        const phone = phoneRef.current
        const ctx = canvas?.getContext('2d')
        if (!stage || !scene || !canvas || !phone || !ctx) return

        const animate = !paused && !reduced
        let raf = 0
        let visible = true
        let width = 0
        let height = 0
        let dpr = 1
        let ink = '#000000'
        let accent = '#00d696'
        let paper = '#ffffff'
        let lastP = -1
        let lastNow = performance.now()
        let energy = 0
        let clock = 0
        let geometry: { x: number; y: number; px: number; py: number }[] = []
        let screen = { left: 0, top: 0, width: 0, height: 0 }

        // Layout boxes ignore transforms, so geometry is measured once per resize, not per frame.
        const measure = () => {
            width = scene.clientWidth
            height = scene.clientHeight
            dpr = Math.min(2, window.devicePixelRatio || 1)
            canvas.width = Math.round(width * dpr)
            canvas.height = Math.round(height * dpr)
            const styles = getComputedStyle(scene)
            ink = resolveColor(ctx, styles.getPropertyValue('--foreground').trim(), '#000000')
            accent = resolveColor(ctx, styles.getPropertyValue('--main').trim(), '#00d696')
            paper = resolveColor(ctx, styles.getPropertyValue('--secondary-background').trim(), '#ffffff')
            const rig = phone.offsetParent as HTMLElement | null
            const left = (rig?.offsetLeft ?? 0) + phone.offsetLeft
            const top = (rig?.offsetTop ?? 0) + phone.offsetTop
            const bezel = phone.querySelector<HTMLElement>('.factory-screen')?.offsetTop ?? 0
            screen = { left, top: top + bezel, width: phone.offsetWidth, height: phone.offsetHeight - bezel * 2 }
            geometry = NODES.map((node, i) => {
                const el = nodeRefs.current[i]
                if (!el) return { x: 0, y: 0, px: 0, py: 0 }
                const isLeft = node.side === 'left'
                return {
                    x: el.offsetLeft + (isLeft ? el.offsetWidth : 0),
                    y: el.offsetTop, // pills are centred on their top edge via translateY(-50%)
                    px: isLeft ? left - 3 : left + phone.offsetWidth + 3,
                    py: top + phone.offsetHeight * (0.2 + 0.2 * node.row),
                }
            })
        }

        const bezier = (a: number, b: number, c: number, d: number, u: number) => {
            const v = 1 - u
            return v * v * v * a + 3 * v * v * u * b + 3 * v * u * u * c + u * u * u * d
        }

        const draw = (weights: number[], intro: number, p: number, scan: number, scanAlpha: number) => {
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            ctx.clearRect(0, 0, width, height)
            if (scanAlpha > 0.01) {
                // The compile beam leaves the screen and sweeps the whole bench.
                const y = screen.top + scan * screen.height
                const beam = ctx.createLinearGradient(0, 0, width, 0)
                beam.addColorStop(0, 'transparent')
                beam.addColorStop(screen.left / width, accent)
                beam.addColorStop((screen.left + screen.width) / width, accent)
                beam.addColorStop(1, 'transparent')
                ctx.globalAlpha = scanAlpha
                ctx.fillStyle = beam
                ctx.fillRect(0, y - 1, width, 2)
                ctx.globalAlpha = scanAlpha * 0.5
                ctx.strokeStyle = ink
                ctx.lineWidth = 1
                ctx.setLineDash([2, 6])
                ctx.beginPath()
                ctx.moveTo(0, y + 6)
                ctx.lineTo(width, y + 6)
                ctx.stroke()
                ctx.setLineDash([])
            }
            const time = clock / 1000
            NODES.forEach((node, i) => {
                const g = geometry[i]
                const el = nodeRefs.current[i]
                if (!g || !el) return
                const lit = clamp((node.chapters as readonly number[]).reduce((sum, c) => sum + weights[c], 0))
                el.style.setProperty('--lit', lit.toFixed(3))
                el.dataset.lit = lit > 0.5 ? 'on' : 'off'

                const y0 = g.y + (reduced ? 0 : (0.5 - p) * node.depth * 36)
                const dx = (g.px - g.x) * 0.55
                const c1 = g.x + dx
                const c2 = g.px - dx
                ctx.globalAlpha = intro * (0.3 + 0.7 * lit)
                ctx.strokeStyle = ink
                ctx.lineWidth = 1 + lit
                ctx.setLineDash(lit > 0.5 ? [] : [3, 5])
                ctx.beginPath()
                ctx.moveTo(g.x, y0)
                ctx.bezierCurveTo(c1, y0, c2, g.py, g.px, g.py)
                ctx.stroke()
                ctx.setLineDash([])

                ctx.globalAlpha = intro
                ctx.fillStyle = lit > 0.5 ? accent : paper
                ctx.beginPath()
                ctx.arc(g.px, g.py, 3.5, 0, Math.PI * 2)
                ctx.fill()
                ctx.lineWidth = 1.5
                ctx.stroke()

                if (lit < 0.02) return
                // Data packets travel from the tool into the device; a short wake reads as speed.
                for (let k = 0; k < 3; k++) {
                    const head = (time * 0.42 + k / 3 + i * 0.17) % 1
                    for (let ghost = 2; ghost >= 0; ghost--) {
                        const u = head - ghost * 0.025
                        if (u < 0) continue
                        const x = bezier(g.x, c1, c2, g.px, u)
                        const y = bezier(y0, y0, g.py, g.py, u)
                        const size = ghost === 0 ? 7 : 5 - ghost
                        ctx.globalAlpha = intro * lit * (ghost === 0 ? 1 : 0.35 / ghost)
                        ctx.fillStyle = ghost === 0 ? accent : ink
                        ctx.fillRect(x - size / 2, y - size / 2, size, size)
                        if (ghost === 0) {
                            ctx.lineWidth = 1.5
                            ctx.strokeRect(x - size / 2, y - size / 2, size, size)
                        }
                    }
                }
            })
            ctx.globalAlpha = 1
        }

        const running = () => animate && visible && !document.hidden

        const frame = (now: number) => {
            raf = 0
            const dt = Math.min(64, now - lastNow)
            lastNow = now
            // The opening compile starts the first time the bench is actually on screen.
            const introStart = (introRef.current ??= now)
            scene.dataset.entered = 'true'
            const intro = animate ? clamp((now - introStart - 200) / 1200) : 1

            const tween = tweenRef.current
            const t = animate ? clamp((now - tween.start) / TRANSITION_MS) : 1
            const p = (pRef.current = tween.from + (tween.to - tween.from) * easeInOut(t))
            // Hold each build, then roll to the next; never while the visitor is hovering or focused on the bench.
            if (animate && t >= 1 && intro >= 1 && !holdRef.current) {
                dwellRef.current += dt
                if (dwellRef.current > DWELL_MS) {
                    targetRef.current = (targetRef.current + 1) % STOPS.length
                    tweenRef.current = { from: p, to: STOPS[targetRef.current], start: now }
                    dwellRef.current = 0
                }
            }
            if (lastP >= 0) energy = Math.max(Math.abs(p - lastP) * 60, energy * 0.9)
            lastP = p
            if (animate) clock += dt * (1 + Math.min(energy, 4))
            const reveals = [easeOut(intro), ...REVEALS.map(([a, b]) => smooth(a, b, p))]
            const weights = reveals.map((r, i) => r - (reveals[i + 1] ?? 0))
            let scan = -1
            for (let i = reveals.length - 1; i >= 0; i--) {
                if (reveals[i] > 0.002 && reveals[i] < 0.998) { scan = i; break }
            }
            const kick = reveals.reduce((sum, r) => sum + Math.sin(Math.PI * r), 0)

            scene.style.setProperty('--p', p.toFixed(4))
            reveals.forEach((r, i) => scene.style.setProperty(`--r${i}`, r.toFixed(4)))
            const scanPos = scan < 0 ? 0 : reveals[scan]
            const scanAlpha = scan < 0 ? 0 : Math.sin(Math.PI * scanPos)
            scene.style.setProperty('--scan', scanPos.toFixed(4))
            scene.style.setProperty('--scan-o', scanAlpha.toFixed(3))
            scene.style.setProperty('--kick', kick.toFixed(3))

            const next = reveals.filter((r, i) => i > 0 && r > 0.5).length
            if (next !== chapterRef.current) {
                chapterRef.current = next
                setChapter(next)
            }
            draw(weights, easeOut(clamp(intro * 1.6)), p, scanPos, reduced ? 0 : scanAlpha)
            if (running()) raf = requestAnimationFrame(frame)
        }

        const kick = () => {
            if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame)
        }
        kickRef.current = kick

        const resize = new ResizeObserver(() => { measure(); kick() })
        resize.observe(scene)
        const observer = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting
            kick()
        })
        observer.observe(stage)
        document.fonts?.ready.then(() => { measure(); kick() })
        document.addEventListener('visibilitychange', kick)
        measure()
        kick()

        return () => {
            cancelAnimationFrame(raf)
            resize.disconnect()
            observer.disconnect()
            document.removeEventListener('visibilitychange', kick)
            kickRef.current = () => {}
        }
    }, [paused, reduced])

    const goTo = (index: number) => {
        const to = STOPS[index]
        targetRef.current = index
        dwellRef.current = 0
        tweenRef.current = paused || reduced
            ? { from: to, to, start: 0 }
            : { from: pRef.current, to, start: performance.now() }
        kickRef.current()
    }
    const hold = (value: boolean) => () => { holdRef.current = value }

    const current = chapters[chapter] ?? chapters[0]
    const screen = SCREENS[chapter] ?? SCREENS[0]
    const openLabel = (
        <>
            <span className="factory-open__text">{current.link ?? t('hero.factory.open', { name: current.title })}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
        </>
    )

    return (
        <div className="factory" role="group" aria-label={t('hero.factory.label')}>
            <div ref={stageRef} className="factory-stage"
                onPointerEnter={hold(true)} onPointerLeave={hold(false)} onFocus={hold(true)} onBlur={hold(false)}>
                <div className="factory-hud" key={chapter}>
                    <p className="factory-hud__meta">
                        <span>{t('hero.factory.build')} {pad(chapter + 1)}/{pad(chapters.length)}</span>
                        <span aria-hidden="true">·</span>
                        <span>{current.kicker}</span>
                    </p>
                    <p className="factory-hud__title">{current.title}</p>
                    <p className="factory-hud__line">{current.line}</p>
                </div>

                <div ref={sceneRef} className="factory-scene">
                    <span className="factory-numeral" key={`n${chapter}`} aria-hidden="true">{pad(chapter + 1)}</span>
                    <canvas ref={canvasRef} className="factory-cables" aria-hidden="true" />
                    {NODES.map((node, i) => (
                        <span
                            key={node.id}
                            ref={(el) => { nodeRefs.current[i] = el }}
                            className="factory-node"
                            data-side={node.side}
                            style={{ '--row': node.row, '--depth': node.depth, '--i': i } as CSSProperties}
                            aria-hidden="true"
                        >
                            {node.label || t('hero.factory.ai')}
                        </span>
                    ))}
                    <div className="factory-rig">
                        <div ref={phoneRef} className="factory-phone">
                            <span className="factory-phone__buttons" aria-hidden="true" />
                            <div className="factory-screen">
                                <div className="factory-wire" aria-hidden="true"><i /><i /><i /><i /><i /></div>
                                {SCREENS.map((item, i) => (
                                    <div key={item.src} className="factory-layer" aria-hidden="true"
                                        style={{ background: item.tone, clipPath: `inset(0 0 calc((1 - var(--r${i})) * 100%) 0)` }}>
                                        <img src={item.src} alt="" width={600} height={1301} decoding="async"
                                            loading={i === 0 ? 'eager' : 'lazy'} />
                                    </div>
                                ))}
                                <span className="factory-island" aria-hidden="true" />
                                <span className="factory-scan" aria-hidden="true" />
                            </div>
                            <img className="factory-sticker" src={ultramareLogo} alt="" width={240} height={240} aria-hidden="true" />
                            {screen.external ? (
                                <a href={screen.to} target="_blank" rel="noopener noreferrer" className="factory-phone__hit" tabIndex={-1} aria-hidden="true" />
                            ) : (
                                <Link to={screen.to} className="factory-phone__hit" tabIndex={-1} aria-hidden="true" />
                            )}
                        </div>
                    </div>
                </div>

                <div className="factory-controls">
                    <div className="factory-rail" role="group" aria-label={t('hero.factory.rail')}>
                        {chapters.map((item, i) => (
                            <button key={item.title} type="button" onClick={() => goTo(i)}
                                aria-current={i === chapter ? 'step' : undefined}
                                aria-label={`${pad(i + 1)} ${item.title}`}>
                                <span aria-hidden="true">{pad(i + 1)}</span>
                            </button>
                        ))}
                    </div>
                    {screen.external ? (
                        <a href={screen.to} target="_blank" rel="noopener noreferrer"
                            className={`factory-open ${current.link ? 'factory-open--cta' : ''}`}>{openLabel}</a>
                    ) : (
                        <Link to={screen.to} className="factory-open">{openLabel}</Link>
                    )}
                    {!reduced && (
                        <button type="button" className="scene-motion-toggle" onClick={onToggle}
                            aria-label={t(paused ? 'hero.motion_play' : 'hero.motion_pause')} aria-pressed={paused}>
                            {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

import Hero from '@/components/sections/Hero'
import Philosophy from '@/components/sections/Philosophy'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import BlogPreview from '@/components/sections/BlogPreview'
import Contact from '@/components/sections/Contact'
import { SectionErrorBoundary } from '@/components/ui/section-error-boundary'

export default function Home() {
    return (
        <div className="landing-page">
            <Hero />
            <Philosophy />
            <About />
            <Projects />
            <SectionErrorBoundary label="Blog preview">
                <BlogPreview />
            </SectionErrorBoundary>
            <Contact />
        </div>
    )
}

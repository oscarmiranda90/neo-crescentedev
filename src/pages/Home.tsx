import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import BlogPreview from '@/components/sections/BlogPreview'
import Contact from '@/components/sections/Contact'
import { SectionErrorBoundary } from '@/components/ui/section-error-boundary'

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Projects />
            <SectionErrorBoundary label="Blog preview">
                <BlogPreview />
            </SectionErrorBoundary>
            <Contact />
        </main>
    )
}

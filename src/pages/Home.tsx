import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import BlogPreview from '@/components/sections/BlogPreview'
import Contact from '@/components/sections/Contact'

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Projects />
            <BlogPreview />
            <Contact />
        </main>
    )
}

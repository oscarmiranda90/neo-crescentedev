import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import RibEye from '@/pages/RibEye'
import RibEyePrivacy from '@/pages/RibEyePrivacy'
import RibEyeTerms from '@/pages/RibEyeTerms'

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main id="main-content" className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                        <Route path="/ribeye" element={<RibEye />} />
                        <Route path="/ribeye/privacy" element={<RibEyePrivacy />} />
                        <Route path="/ribeye/terms" element={<RibEyeTerms />} />
                        <Route
                            path="*"
                            element={
                                <div className="flex items-center justify-center min-h-[60vh]">
                                    <div className="text-center">
                                        <h1 className="text-8xl font-bold text-main">404</h1>
                                        <p className="text-2xl font-bold mt-4">Page not found.</p>
                                        <a href="/" className="mt-6 inline-block underline font-bold">
                                            Go home →
                                        </a>
                                    </div>
                                </div>
                            }
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

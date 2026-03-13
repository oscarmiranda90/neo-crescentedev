import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Camera, 
  Users, 
  GraduationCap, 
  ShoppingCart, 
  Brain, 
  Sparkles,
  ChevronDown,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import ribeyeIcon from "@/assets/ribeye-icon.webp";
import ribeyeScreenshot from "@/assets/ribeye-screenshot.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RibEye = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/#projects">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2 ml-4">
              <img src={ribeyeIcon} alt="RibEye Icon" width={32} height={32} className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">RibEye</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-white/60 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-white/60 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-white/60 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-white/60 hover:text-white transition-colors">
              FAQ
            </a>
            <a href="https://apps.apple.com/us/app/ribeye-carnivore-diet/id6754494858" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-white text-black hover:bg-white/90">DOWNLOAD NOW!</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Track your carnivore journey with a T-Rex by your side.
              </h1>
              <p className="text-xl text-white/70">
                RibEye turns your carnivore diet into a game of streaks, mood tracking, and progress - without the hassle of calorie counting.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span>Daily carnivore purity score with a simple circular meter.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span>Feed your T-Rex and unlock primal badges.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span>Track mood, energy, and cravings with Mental State.</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://apps.apple.com/us/app/ribeye-carnivore-diet/id6754494858" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-white/90">
                    DOWNLOAD NOW!
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src={ribeyeScreenshot} 
                alt="RibEye App Screenshot" 
                loading="lazy"
                width={885}
                height={1920}
                className="max-w-sm mx-auto rounded-3xl border border-white/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/40" />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Three simple steps to track your carnivore journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border border-white/10 bg-white/5 p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold">Log your food</h3>
              <p className="text-white/60">
                Pick your meals and foods; RibEye scores how carnivore each day was.
              </p>
            </Card>
            <Card className="border border-white/10 bg-white/5 p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold">Fill the purity circle</h3>
              <p className="text-white/60">
                Your day gets a purity percentage. Hit 80–100% to keep your streak alive.
              </p>
            </Card>
            <Card className="border border-white/10 bg-white/5 p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold">Level up through stages</h3>
              <p className="text-white/60">
                Go from RESET to ADAPT, and finally THRIVE as you stack perfect carnivore days.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything you need to stay carnivore (and sane).
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="border border-white/10 bg-white/5 p-6 space-y-4 hover:scale-105 transition-transform">
              <Camera className="w-12 h-12 text-white" />
              <h3 className="text-xl font-bold">Camera Meal Scanner</h3>
              <p className="text-white/60">
                Snap a photo, check if it fits your carnivore rules, and log it without thinking.
              </p>
            </Card>
            <Card className="border border-white/10 bg-white/5 p-6 space-y-4 hover:scale-105 transition-transform">
              <Users className="w-12 h-12 text-white" />
              <h3 className="text-xl font-bold">Unlock RibEye the T-Rex</h3>
              <p className="text-white/60">
                Feed your T-Rex with good choices, unlock reactions, and keep him happy as your streak grows.
              </p>
            </Card>
            <Card className="border border-white/10 bg-white/5 p-6 space-y-4 hover:scale-105 transition-transform">
              <GraduationCap className="w-12 h-12 text-white" />
              <h3 className="text-xl font-bold">Trex University</h3>
              <p className="text-white/60">
                Bite-sized lessons on carnivore basics, electrolytes, refeeds, and troubleshooting plateaus.
              </p>
            </Card>
            <Card className="border border-white/10 bg-white/5 p-6 space-y-4 hover:scale-105 transition-transform">
              <ShoppingCart className="w-12 h-12 text-white" />
              <h3 className="text-xl font-bold">AI Grocery List</h3>
              <p className="text-white/60">
                Get smart grocery lists based on your preferred cuts, budget, and current phase (Reset, Adapt, or Thrive).
              </p>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border border-white/10 bg-white/5 p-6 space-y-3">
              <Brain className="w-10 h-10 text-white" />
              <h3 className="text-lg font-bold">Mental State Tracking</h3>
              <p className="text-white/60 text-sm">
                Log mood, sleep, and cravings. See how your mind changes as your streak grows.
              </p>
            </Card>
            <Card className="border border-white/10 bg-white/5 p-6 space-y-3">
              <Sparkles className="w-10 h-10 text-white" />
              <h3 className="text-lg font-bold">Strict and Omni Modes</h3>
              <p className="text-white/60 text-sm">
                Choose Strict (pure carnivore) or Omni (more flexible). Streak rules adapt to your style.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Streak System Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">From RESET to THRIVE.</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Build consistency through streak tiers that grow with you
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            <Card className="border border-white/10 bg-white/5 p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">R</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">RESET</h3>
                  <p className="text-white/60">
                    Starting out or coming back after a break. Shorter targets, gentle on-ramps.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border border-white/10 bg-white/5 p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">ADAPT</h3>
                  <p className="text-white/60">
                    You have some consistency. 15+ clean days move you into Adapt and unlock new badges.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="border border-white/10 bg-white/5 p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">T</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">THRIVE</h3>
                  <p className="text-white/60">
                    Top level. Long streaks of high purity and stable mood unlock premium badges and deeper analytics.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border border-white/10 bg-white/5 p-6">
              <h4 className="font-bold mb-3">Circular Purity Meter</h4>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Each day has a circular purity bar from 0–100%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Strict mode: 90–100% counts toward streak, less than 80% costs you points.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Omni mode: 80–100% keeps your streak alive; under 60% breaks it.</span>
                </li>
              </ul>
            </Card>
            <div className="grid grid-cols-3 gap-4">
              <Card className="border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-4xl mb-2">🔴</div>
                <div className="text-sm font-bold">RESET</div>
              </Card>
              <Card className="border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-4xl mb-2">🔵</div>
                <div className="text-sm font-bold">ADAPT</div>
              </Card>
              <Card className="border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-4xl mb-2">🟠</div>
                <div className="text-sm font-bold">THRIVE</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built for real people, not nutrition robots.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Replace with real testimonials later */}
            <Card className="border border-white/10 bg-white/5 p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10"></div>
                <div>
                  <div className="font-bold">Sarah M.</div>
                  <div className="text-sm text-white/60">34, busy parent</div>
                </div>
              </div>
              <p className="text-white/60 italic">
                RibEye made tracking carnivore simple and fun. The T-Rex keeps me motivated, and I love seeing my streak grow without obsessing over calories.
              </p>
            </Card>
            <Card className="border border-white/10 bg-white/5 p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10"></div>
                <div>
                  <div className="font-bold">Mike R.</div>
                  <div className="text-sm text-white/60">42, fitness enthusiast</div>
                </div>
              </div>
              <p className="text-white/60 italic">
                Finally, an app that gets it. No counting macros, just tracking how carnivore I stayed. The Mental State feature helped me understand my mood patterns.
              </p>
            </Card>
            <Card className="border border-white/10 bg-white/5 p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10"></div>
                <div>
                  <div className="font-bold">Jessica T.</div>
                  <div className="text-sm text-white/60">28, health coach</div>
                </div>
              </div>
              <p className="text-white/60 italic">
                The gamification is brilliant. I actually look forward to logging my meals because I want to see my T-Rex thrive. Best carnivore app hands down.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Start free. Upgrade when you are ready.</h2>
            <p className="text-white/60">Includes family sharing</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border border-white/10 bg-white/5 p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="text-4xl font-bold mb-4">$0</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Daily purity score</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Basic streak tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Mental State logging</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">Start Free</Button>
            </Card>
            <Card className="border border-white/10 bg-white/5 p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Weekly</h3>
                <div className="text-4xl font-bold mb-4">$2.99<span className="text-lg text-white/60">/wk</span></div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Camera Meal Scanner</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Trex University lessons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Advanced streak analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>AI Grocery List</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">Start Weekly</Button>
            </Card>
            <Card className="border border-white/10 bg-white/5 p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Monthly</h3>
                <div className="text-4xl font-bold mb-4">$8.99<span className="text-lg text-white/60">/mo</span></div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Camera Meal Scanner</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Trex University lessons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Advanced streak analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>AI Grocery List</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">Start Monthly</Button>
            </Card>
            <Card className="border border-white/30 bg-white/5 p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-xs font-bold">
                BEST VALUE
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Yearly</h3>
                <div className="text-4xl font-bold mb-4">$89.99<span className="text-lg text-white/60">/yr</span></div>
                <p className="text-sm text-white/60">Save 17% vs monthly</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Camera Meal Scanner</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Trex University lessons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>Advanced streak analytics and THRIVE badges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">✓</span>
                  <span>AI Grocery List</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-black hover:bg-white/90">Start Yearly</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Questions about RibEye.</h2>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 bg-white/5 px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                Is RibEye only for strict carnivore?
              </AccordionTrigger>
              <AccordionContent className="text-white/60">
                No. RibEye offers both Strict and Omni modes. Strict is for pure carnivore (meat, fish, eggs), while Omni allows more flexibility with your food choices. The streak rules adapt to whichever mode you choose.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-white/10 bg-white/5 px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                Do I need to count calories?
              </AccordionTrigger>
              <AccordionContent className="text-white/60">
                Not at all. RibEye focuses on purity and adherence to carnivore principles, not calorie counting. We track how carnivore your day was, not how many calories you consumed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-white/10 bg-white/5 px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                Can I use RibEye if I am keto, not full carnivore?
              </AccordionTrigger>
              <AccordionContent className="text-white/60">
                Yes. The Omni mode is flexible enough to work with keto or low-carb approaches. You can customize your tracking to fit your dietary preferences while still benefiting from the streak system and gamification.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-white/10 bg-white/5 px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                Will RibEye work offline?
              </AccordionTrigger>
              <AccordionContent className="text-white/60">
                Yes. You can log meals and track your progress offline. Your data will sync automatically when you reconnect to the internet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-white/10 bg-white/5 px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                How does Mental State tracking work?
              </AccordionTrigger>
              <AccordionContent className="text-white/60">
                Mental State lets you log your mood, energy levels, sleep quality, and cravings each day. Over time, you will see patterns and correlations between your carnivore adherence and how you feel mentally and physically.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border border-white/10 bg-white/5 px-6 rounded-lg">
              <AccordionTrigger className="text-left hover:no-underline">
                What happens if I break my streak?
              </AccordionTrigger>
              <AccordionContent className="text-white/60">
                Breaking your streak is not the end. You will return to the RESET stage, but all your previous progress and badges are saved. RibEye is designed to encourage you to get back on track without harsh penalties.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="download" className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Your next 30 days of carnivore can be different.
            </h2>
            <p className="text-xl text-white/70">
              Track your purity, mood, and streaks with a T-Rex that grows with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="https://apps.apple.com/us/app/ribeye-carnivore-diet/id6754494858" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 bg-white text-black hover:bg-white/90">
                  DOWNLOAD NOW!
                </Button>
              </a>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-white/40">
              <div className="text-sm">Available on iOS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src={ribeyeIcon} alt="RibEye Icon" width={32} height={32} className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">RibEye</span>
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <Link to="/ribeye/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/ribeye/terms" className="hover:text-white transition-colors">Terms</Link>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                X/Twitter
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RibEye;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Star, Swords, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import mythikaIcon from "@/assets/mythika-icon.webp";
import mythikaScr1 from "@/assets/mythika-scr1.webp";
import mythikaScr3 from "@/assets/mythika-scr3.webp";
import mythikaScr4 from "@/assets/mythika-scr4.webp";
import mythikaSlice2 from "@/assets/mythika-slice2.webp";
import mythikaSlice5 from "@/assets/mythika-slice5.webp";

const screenshots = [mythikaScr1, mythikaScr3, mythikaScr4, mythikaSlice2, mythikaSlice5];

const features = [
  {
    icon: Swords,
    title: "Puzzle Battles",
    description: "Match, strategize, and outsmart your opponents in real-time puzzle tournaments.",
  },
  {
    icon: Trophy,
    title: "Tournament Mode",
    description: "Compete in live tournaments and climb the ranks to earn exclusive rewards.",
  },
  {
    icon: Users,
    title: "Mythic Characters",
    description: "Unlock and upgrade legendary heroes, each with unique abilities and playstyles.",
  },
  {
    icon: Star,
    title: "Seasonal Events",
    description: "New challenges, limited-time modes, and fresh content every season.",
  },
];

const Mythika = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/#projects">
              <Button variant="ghost" size="sm" className="text-zinc-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2 ml-4">
              <img
                src={mythikaIcon}
                alt="Mythika Icon"
                width={32}
                height={32}
                className="w-8 h-8 rounded-xl"
              />
              <span className="text-xl font-bold">Mythika</span>
            </div>
          </div>
          <a
            href="https://apps.apple.com/us/app/mythika-puzzle-tournament/id6517363482"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-zinc-900 text-white hover:bg-zinc-800 rounded-full">
              Download
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-zinc-100 mb-6 shadow-sm">
              <img
                src={mythikaIcon}
                alt="Mythika"
                width={80}
                height={80}
                className="w-20 h-20 rounded-2xl"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Mythika: Puzzle Tournament
            </h1>
            <p className="text-lg md:text-xl text-zinc-500 max-w-xl mx-auto leading-relaxed">
              A puzzle game where strategy meets mythology. Compete in tournaments, unlock heroes,
              and rise through the ranks.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <a
              href="https://apps.apple.com/us/app/mythika-puzzle-tournament/id6517363482"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 px-10 py-6 text-lg rounded-full shadow-lg">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Download on the App Store
              </Button>
            </a>
          </div>

          {/* Screenshots Gallery */}
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-none justify-center">
            {screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Mythika screenshot ${i + 1}`}
                loading="lazy"
                className="w-48 md:w-56 flex-shrink-0 rounded-2xl shadow-md border border-zinc-200 snap-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
            Why you'll love Mythika
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((f) => (
              <Card key={f.title} className="border border-zinc-200 bg-white p-6 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-zinc-700" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to compete?
          </h2>
          <p className="text-lg text-zinc-500 mb-8 max-w-md mx-auto">
            Download Mythika and start your puzzle tournament journey today.
          </p>
          <a
            href="https://apps.apple.com/us/app/mythika-puzzle-tournament/id6517363482"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 px-10 py-6 text-lg rounded-full shadow-lg">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Download on the App Store
            </Button>
          </a>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm">
            <Link to="/mythika/privacy" className="text-zinc-400 hover:text-zinc-700 underline underline-offset-4 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-300">·</span>
            <Link to="/mythika/terms" className="text-zinc-400 hover:text-zinc-700 underline underline-offset-4 transition-colors">
              User Agreement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mythika;
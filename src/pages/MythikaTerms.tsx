import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import mythikaIcon from "@/assets/mythika-icon.png";

const MythikaTerms = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/mythika">
              <Button variant="ghost" size="sm" className="text-zinc-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <Link to="/mythika" className="flex items-center gap-2 ml-4">
              <img src={mythikaIcon} alt="Mythika Icon" className="w-8 h-8 rounded-xl" />
              <span className="text-xl font-bold">Mythika</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">User Agreement</h1>
        <p className="text-zinc-400 mb-12">Effective date: August 7, 2026</p>

        <div className="space-y-8 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading, accessing, or using Mythika: Puzzle Tournament (the "Game"), you agree to this User Agreement and our Privacy Policy. If you do not agree, do not use the Game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Eligibility and Account</h2>
            <p>
              You must be at least 13 years old, or the minimum age required to consent to online services where you live, to use the Game. If you are under the age of majority in your jurisdiction, you must have permission from a parent or legal guardian.
            </p>
            <p className="mt-3">
              Some features require sign-in with Apple or Google. You are responsible for keeping access to that account secure and for activity that occurs through it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. License to Use the Game</h2>
            <p>
              We grant you a limited, personal, non-exclusive, non-transferable, revocable license to download and use the Game for your own non-commercial entertainment. The Game is licensed, not sold. We and our licensors retain all rights not expressly granted to you.
            </p>
            <p className="mt-3">
              You may not copy, modify, distribute, sell, lease, reverse engineer, decompile, or create derivative works from the Game except where applicable law expressly permits it. You may not use cheats, bots, automation, exploits, or other methods that interfere with fair play.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Your Conduct</h2>
            <p>
              You must not use the Game to break the law, infringe intellectual-property or privacy rights, harass others, distribute malware, impersonate another person, or interfere with the Game's operation or security. We may suspend or terminate access when we reasonably believe you have violated this Agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. In-App Purchases</h2>
            <p>
              The Game may offer optional in-app purchases, including Lifetime Access and future downloadable content. Purchases are processed by Apple App Store or Google Play, as applicable, and are subject to that store's terms, conditions, and refund rules.
            </p>
            <p className="mt-3">
              Lifetime Access is a non-consumable entitlement for the content described at the time of purchase. It does not promise future content unless we expressly say so in writing. You can use the restore-purchases feature to restore eligible purchases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Privacy</h2>
            <p>
              Our handling of personal information is described in the{" "}
              <Link to="/mythika/privacy" className="text-zinc-900 underline">Privacy Policy</Link>.
              By using the Game, you acknowledge that the Game uses service providers for authentication, cloud saves, and purchases.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Disclaimers and Limitation of Liability</h2>
            <p>
              The Game is provided on an "as is" and "as available" basis. We do not promise that the Game will be uninterrupted, error-free, or secure. To the fullest extent permitted by law, our total liability for any claim related to the Game will not exceed the greater of the amount you paid us in the 12 months before the claim arose or USD $25.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">8. Contact</h2>
            <p>
              Oscar Miranda, publishing as Enrique Miranda Developer<br />
              <a href="mailto:hola@crescente.dev" className="text-zinc-900 underline">hola@crescente.dev</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MythikaTerms;
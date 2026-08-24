import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import mythikaIcon from "@/assets/mythika-icon.webp";

const MythikaPrivacy = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Privacy Policy</h1>
        <p className="text-zinc-400 mb-12">Effective date: August 7, 2026</p>

        <div className="space-y-8 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Introduction</h2>
            <p>
              Oscar Miranda, publishing as Enrique Miranda Developer ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we handle information when you use Mythika: Puzzle Tournament (the "Game").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mb-3 mt-6">Account Information</h3>
            <p>
              You sign in through Apple or Google. We receive and store the account identifier supplied through our authentication service. Depending on the sign-in method and what you choose to share, this may include your email address and profile image URL. We also store the username you choose for your Mythika profile.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mb-3 mt-6">Game and Account Progress</h3>
            <p>
              We store your game progress so it can be restored on another device or after reinstalling. This includes campaign completion, stars, experience, level, unlocked characters, abilities, skins, equipment selections, and related game settings.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mb-3 mt-6">Purchase Information</h3>
            <p>
              When you make or restore an in-app purchase, Apple or Google processes the payment. We do not receive or store your payment card number. RevenueCat receives purchase and entitlement information and associates it with your Game account identifier.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mb-3 mt-6">Device and Technical Information</h3>
            <p>
              Our service providers may process technical information such as IP address, device and operating-system information, app version, timestamps, and purchase or authentication events. We do not collect precise location, contacts, photos, microphone recordings, or advertising identifiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Create and secure your account</li>
              <li>Save and restore your progress across devices</li>
              <li>Provide purchased content and restore eligible purchases</li>
              <li>Operate, protect, troubleshoot, and improve the Game</li>
              <li>Respond to support requests</li>
              <li>Comply with legal obligations and enforce this policy and our User Agreement</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information. We do not use your information for third-party advertising or cross-app behavioral advertising.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Service Providers and Disclosures</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="text-left py-2 pr-4 font-semibold text-zinc-900">Provider</th>
                    <th className="text-left py-2 pr-4 font-semibold text-zinc-900">Purpose</th>
                    <th className="text-left py-2 font-semibold text-zinc-900">Information involved</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr>
                    <td className="py-3 pr-4 align-top">Supabase</td>
                    <td className="py-3 pr-4 align-top">Authentication and cloud saves</td>
                    <td className="py-3 align-top">Account identifier, sign-in profile data, username, game progress</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 align-top">Apple / Google</td>
                    <td className="py-3 pr-4 align-top">Sign-in and in-app purchase processing</td>
                    <td className="py-3 align-top">Sign-in information and purchase transactions</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 align-top">RevenueCat</td>
                    <td className="py-3 pr-4 align-top">Purchase entitlement and restoration</td>
                    <td className="py-3 align-top">Game account identifier and purchase/entitlement status</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              We may also disclose information when required by law, to protect security, or as part of a merger or acquisition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">5. Retention</h2>
            <p>
              We keep account and cloud-save information while your account remains active. We may retain limited information afterward when required for security, fraud prevention, dispute resolution, accounting, or legal compliance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">6. Your Choices and Rights</h2>
            <p>
              You can update your username in the Game and sign out at any time. To request access to, correction of, or deletion of your account information, contact us at <a href="mailto:hola@crescente.dev" className="text-zinc-900 underline">hola@crescente.dev</a> from the email associated with your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">7. Children</h2>
            <p>
              The Game is not directed to children under 13. If you believe a child provided personal information without appropriate consent, contact us at <a href="mailto:hola@crescente.dev" className="text-zinc-900 underline">hola@crescente.dev</a>.
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

export default MythikaPrivacy;
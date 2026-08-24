import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ribeyeIcon from "@/assets/ribeye-icon.webp";

const RibEyeTerms = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/ribeye">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <Link to="/ribeye" className="flex items-center gap-2 ml-4">
              <img src={ribeyeIcon} alt="RibEye Icon" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">RibEye</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        <p className="text-white/60 mb-12">Last updated: November 13, 2025</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using RibEye ("the App"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p>
              RibEye is a mobile application designed to help users track their carnivore diet adherence, mood, and progress through gamification and streak tracking. The App includes features such as meal logging, purity scoring, Mental State tracking, and educational content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <p className="mb-3">
              To use certain features of the App, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information to keep it accurate</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Subscription and Payment</h2>
            <p className="mb-3">
              RibEye offers both free and premium subscription options:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Free tier with basic features</li>
              <li>Weekly subscription at $2.99/week</li>
              <li>Monthly subscription at $8.99/month</li>
              <li>Yearly subscription at $89.99/year</li>
            </ul>
            <p className="mt-3">
              Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. You may cancel your subscription at any time through your iOS device settings. Refunds are handled according to Apple App Store policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Health Disclaimer</h2>
            <p>
              RibEye is not a medical application and does not provide medical advice. The App is designed for informational and tracking purposes only. Always consult with a qualified healthcare provider before making any changes to your diet or health regimen. The creators of RibEye are not responsible for any health issues that may arise from using the App or following any dietary approach.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. User Content</h2>
            <p>
              You retain ownership of any content you create or upload to the App (including meal logs, photos, and notes). By using the App, you grant us a license to use, store, and process this content solely for the purpose of providing the App's services to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Tracking and Analytics</h2>
            <p className="mb-3">
              To improve the App's functionality and user experience, we use Meta SDK and other analytics tools to track:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>App installs and uninstalls</li>
              <li>Subscription events (purchases, renewals, cancellations)</li>
              <li>User behavior within the App (features used, navigation patterns)</li>
              <li>App performance and crash data</li>
              <li>Usage patterns and engagement metrics</li>
            </ul>
            <p className="mt-3">
              This data helps us optimize the App, improve features, and provide you with a better experience. For more details on how we handle your data, please review our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. User Data Rights and Management</h2>
            <p className="mb-3">
              You have complete control over your data. At any time, you may:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access and download all your data stored in the App</li>
              <li>Edit or update your personal information and preferences</li>
              <li>Delete specific data entries (meal logs, photos, notes)</li>
              <li>Request complete deletion of your account and all associated data</li>
              <li>Export your data in a portable format</li>
            </ul>
            <p className="mt-3">
              You can manage your data directly through the App settings or by contacting us at tiamat.agency@gmail.com. When you delete your account, all your personal data will be permanently removed from our systems within 30 days, except where we are legally required to retain certain information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Prohibited Uses</h2>
            <p className="mb-3">You may not use the App to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Upload malicious code or attempt to hack the App</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Use the App for any commercial purpose without permission</li>
              <li>Share your account credentials with others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Intellectual Property</h2>
            <p>
              All content in the App, including text, graphics, logos, icons, images, and software, is the property of RibEye or its content suppliers and is protected by copyright and other intellectual property laws. The RibEye name, logo, and T-Rex mascot are trademarks and may not be used without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account and access to the App at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, RibEye and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes via the App or email. Your continued use of the App after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at tiamat.agency@gmail.com
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link to="/ribeye">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to RibEye
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src={ribeyeIcon} alt="RibEye Icon" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold">RibEye</span>
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              <Link to="/ribeye/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/ribeye/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RibEyeTerms;

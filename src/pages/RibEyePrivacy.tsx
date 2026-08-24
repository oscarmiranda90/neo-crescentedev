import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ribeyeIcon from "@/assets/ribeye-icon.webp";

const RibEyePrivacy = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-white/60 mb-12">Last updated: November 13, 2025</p>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              RibEye ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use the RibEye mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Account information (email address, name)</li>
              <li>Dietary preferences and goals</li>
              <li>Meal logs and food choices</li>
              <li>Photos of meals (if you choose to use the Camera Meal Scanner)</li>
              <li>Mental State data (mood, sleep, energy levels, cravings)</li>
              <li>Streak and progress data</li>
              <li>Notes and custom entries</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Device information (model, operating system version)</li>
              <li>Usage data (features used, time spent in app)</li>
              <li>App performance and crash data</li>
              <li>IP address and general location (for service improvement)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and improve the RibEye service</li>
              <li>Calculate your daily purity scores and streak progress</li>
              <li>Personalize your experience and recommendations</li>
              <li>Generate AI-powered features (Grocery Lists, Meal Scanner analysis)</li>
              <li>Send you important updates about your account and the App</li>
              <li>Analyze usage patterns to improve features</li>
              <li>Provide customer support</li>
              <li>Process subscription payments</li>
              <li>Ensure app security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Storage and Security</h2>
            <p>
              Your data is stored securely using industry-standard encryption. We use secure cloud infrastructure to store your information. Meal photos and personal data are encrypted both in transit and at rest. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
            <p className="mb-3">We do not sell your personal data. We may share your information only in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Providers:</strong> We work with third-party service providers (hosting, analytics, payment processing) who need access to your data to perform services on our behalf. These providers are bound by confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new owner.</li>
              <li><strong>With Your Consent:</strong> We may share your information for other purposes with your explicit consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. AI and Machine Learning</h2>
            <p>
              RibEye uses AI technology for features like the Camera Meal Scanner and AI Grocery Lists. When you use these features, your data (such as meal photos) may be processed by AI services. These services are selected for their strong privacy protections and do not use your data to train their general models without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Family Sharing</h2>
            <p>
              If you use family sharing for your subscription, members of your family group will be able to access the premium features of RibEye. However, your personal tracking data (meals, mood, streaks) remains private and is not shared with family members unless you explicitly choose to share it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights and Choices</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Data Portability:</strong> Request your data in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at tiamat.agency@gmail.com or use the settings within the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide you services. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal purposes. Anonymized usage data may be retained for analytical purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
            <p>
              RibEye is not intended for use by children under the age of 13 (or 16 in the European Economic Area). We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. International Data Transfers</h2>
            <p>
              Your data may be processed and stored in countries outside of your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy in the App and updating the "Last updated" date. Your continued use of RibEye after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. California Privacy Rights</h2>
            <p>
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. European Privacy Rights</h2>
            <p>
              If you are in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, data portability, and to object to processing. You also have the right to lodge a complaint with a supervisory authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-3">
              Email: tiamat.agency@gmail.com<br />
              For data subject requests: tiamat.agency@gmail.com
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

export default RibEyePrivacy;

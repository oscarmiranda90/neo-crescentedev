import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import repsetMark from "@/assets/repset-mark.webp";

const LIME = "#d7ff4f";
const GROUND = "#151714";
const LINE = "#2f342b";
const INK = "#f3f5ef";
const MUTED = "#969e8d";

const PAGE_TITLE = "Privacy Policy | RepSet";
const PAGE_DESCRIPTION =
  "How RepSet handles your data: workouts stay on your device, there is no account, and no training history is collected or sold.";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="flex flex-col gap-3">
    <h2
      className="text-2xl font-extrabold tracking-[-.025em]"
      style={{ color: INK }}
    >
      {title}
    </h2>
    <div className="flex flex-col gap-3 leading-relaxed" style={{ color: MUTED }}>
      {children}
    </div>
  </section>
);

const RepSetPrivacy = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previousDescription = meta?.content;

    document.title = PAGE_TITLE;
    if (meta) meta.content = PAGE_DESCRIPTION;

    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== undefined) {
        meta.content = previousDescription;
      }
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ background: GROUND, color: INK }}>
      <nav
        className="sticky top-0 z-50 backdrop-blur-xl"
        style={{
          borderBottom: `1px solid ${LINE}`,
          background: "rgba(21,23,20,.82)",
        }}
      >
        <div className="container mx-auto flex h-[72px] items-center px-6">
          <Link to="/repset">
            <Button variant="ghost" size="sm" style={{ color: INK }}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
          <Link to="/repset" className="ml-4 flex items-center gap-2.5">
            <img
              src={repsetMark}
              alt="RepSet Icon"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-xl font-extrabold tracking-tight">RepSet</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-3 text-4xl font-extrabold tracking-[-.035em] md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-4 text-sm" style={{ color: "#6e7666" }}>
          Last updated: August 24, 2026
        </p>

        <div
          className="mb-12 rounded-[22px] p-6"
          style={{ border: `1px solid ${LINE}`, background: "#1c1f1a" }}
        >
          <span
            aria-hidden="true"
            className="mb-3.5 block h-[3px] w-[26px] rounded-sm"
            style={{ background: LIME }}
          />
          <p className="leading-relaxed" style={{ color: MUTED }}>
            The short version: RepSet has no accounts and no servers holding
            your training. Your workouts are stored in a database on your own
            device. We do not collect, transmit, or sell your training history.
          </p>
        </div>

        <div className="flex flex-col gap-9">
          <Section title="1. Who this covers">
            <p>
              This policy covers the RepSet mobile application and this page on
              crescente.dev. RepSet is free and open source, so you can verify
              everything described here by reading the source.
            </p>
          </Section>

          <Section title="2. What stays on your device">
            <p>
              Everything you log lives locally, in an on-device database. That
              includes:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-1.5">
              <li>Workout sessions, sets, reps and weights</li>
              <li>Workout templates you create</li>
              <li>Training history and progress figures</li>
              <li>App settings and preferences</li>
            </ul>
            <p>
              None of this is uploaded anywhere. There is no account to create,
              no sign-in, and no cloud sync. If you uninstall the app, this data
              is deleted with it.
            </p>
          </Section>

          <Section title="3. What leaves your device">
            <p>
              RepSet makes network requests in only two cases, and neither one
              sends your training data:
            </p>
            <p style={{ color: INK }}>Exercise catalog and media</p>
            <p>
              The app downloads exercise data and demonstration media from
              media.crescente.dev. These are ordinary file requests for public
              content. As with any web request, the server sees the standard
              connection information a request carries, such as your IP address.
              The request does not include anything about your workouts.
            </p>
            <p style={{ color: INK }}>AI assistant, only if you use it</p>
            <p>
              The AI assistant is optional and off until you use it. When you
              ask it for a routine, the prompt you write and the parameters you
              choose, such as training days and available equipment, are sent to
              OpenRouter to generate a response. Your logged training history is
              not sent unless you include it in what you write. If you use your
              own OpenRouter key, the request goes from your device to
              OpenRouter and we are not part of it. Requests are handled under
              OpenRouter's own privacy policy.
            </p>
          </Section>

          <Section title="4. What we do not do">
            <ul className="ml-4 list-inside list-disc space-y-1.5">
              <li>No analytics or usage tracking in the app</li>
              <li>No crash or telemetry reporting</li>
              <li>No advertising and no ad identifiers</li>
              <li>No selling or sharing of personal data</li>
              <li>No account, so no email or name is collected</li>
            </ul>
          </Section>

          <Section title="5. Permissions">
            <p>
              RepSet requests notification permission so the rest timer can
              alert you when the app is in the background. You can decline it,
              and the rest of the app works normally. No other permission is
              requested.
            </p>
          </Section>

          <Section title="6. Children">
            <p>
              RepSet is not directed at children under 13 and does not knowingly
              collect information from them. Since the app collects no personal
              information at all, there is nothing for us to hold or delete.
            </p>
          </Section>

          <Section title="7. Your control over your data">
            <p>
              Because your data never leaves your device, you control it
              directly. You can delete individual sessions and templates in the
              app, or remove everything by uninstalling it. There is no request
              to file with us, because there is nothing on our side to erase.
            </p>
          </Section>

          <Section title="8. Changes to this policy">
            <p>
              If this policy changes, the updated version will be posted on this
              page with a new date above. Material changes to how the app
              handles data will also be visible in the public source history.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              Questions about this policy can be raised through the project
              repository, or by contacting Oscar Crescente through{" "}
              <a
                href="https://crescente.dev"
                className="underline underline-offset-4"
                style={{ color: LIME }}
              >
                crescente.dev
              </a>
              .
            </p>
          </Section>
        </div>

        <div
          className="mt-14 flex flex-wrap gap-6 pt-8 text-sm"
          style={{ borderTop: `1px solid ${LINE}`, color: "#6e7666" }}
        >
          <Link to="/repset" className="transition-colors hover:text-white">
            RepSet
          </Link>
          <Link
            to="/repset/terms"
            className="transition-colors hover:text-white"
          >
            Terms
          </Link>
          <Link to="/#projects" className="transition-colors hover:text-white">
            Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepSetPrivacy;

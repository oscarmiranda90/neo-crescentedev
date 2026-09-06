import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import supafilmMark from "@/assets/supafilm-mark.webp";

const PAPER = "#FFFCF6";
const CANVAS = "#F2F0EA";
const GRAPHITE = "#232528";
const STONE = "#EAE8E2";
const RUST = "#AE4A3E";
const MUTED = "#6B6E72";

const LAST_UPDATED = "6 September 2026";

const PAGE_TITLE = "Terms of Use | SupaFilm";
const PAGE_DESCRIPTION =
  "The terms that apply when you use SupaFilm: your content stays yours, how the Pro subscription is billed, and what the AI features do and do not promise.";

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
      style={{ color: GRAPHITE }}
    >
      {title}
    </h2>
    <div className="flex flex-col gap-3 leading-relaxed" style={{ color: MUTED }}>
      {children}
    </div>
  </section>
);

const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="flex list-disc flex-col gap-2 pl-5">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const SupaFilmTerms = () => {
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
    <div className="min-h-screen" style={{ background: PAPER, color: GRAPHITE }}>
      <nav
        className="sticky top-0 z-50 backdrop-blur-xl"
        style={{
          borderBottom: `1px solid ${STONE}`,
          background: "rgba(255,252,246,.85)",
        }}
      >
        <div className="container mx-auto flex h-[72px] items-center px-6">
          <Link to="/supafilm">
            <Button variant="ghost" size="sm" style={{ color: GRAPHITE }}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
          <Link to="/supafilm" className="ml-4 flex items-center gap-2.5">
            <img
              src={supafilmMark}
              alt="SupaFilm Icon"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-xl font-extrabold tracking-tight">
              SupaFilm
            </span>
          </Link>
        </div>
      </nav>

      <header
        className="border-b"
        style={{ background: CANVAS, borderColor: STONE }}
      >
        <div className="container mx-auto px-6 py-14 md:py-20">
          <span
            aria-hidden="true"
            className="mb-3.5 block h-[3px] w-[26px] rounded-sm"
            style={{ background: RUST }}
          />
          <h1 className="text-4xl font-extrabold tracking-[-.035em] md:text-6xl">
            Terms of Use
          </h1>
          <p className="mt-4 text-lg" style={{ color: MUTED }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </header>

      <main className="container mx-auto flex max-w-3xl flex-col gap-10 px-6 py-14 md:py-20">
        <Section title="Agreement">
          <p>
            These terms apply when you use the SupaFilm iOS app. By installing
            or using the app, you agree to them. If you do not agree, please do
            not use SupaFilm.
          </p>
        </Section>

        <Section title="What SupaFilm is">
          <p>
            SupaFilm is a teleprompter and recording app. It displays your
            script beside the camera while you record, and lets you review, trim
            and save your take. SupaFilm Pro adds AI-assisted script writing and
            AI video editing, which run in the cloud and require an internet
            connection.
          </p>
        </Section>

        <Section title="Your content stays yours">
          <p>
            You keep all rights to the scripts you write and the videos you
            record. We claim no ownership over them.
          </p>
          <p>
            When you request an AI feature, you give us permission to process
            the content you submitted for the limited purpose of producing that
            result and returning it to you: transcribing your take's audio,
            generating or rewriting a script, and rendering your edited video.
            That permission ends when the feature has done its work. We do not
            use your content to train AI models.
          </p>
        </Section>

        <Section title="Acceptable use">
          <p>You are responsible for what you record and publish. Do not use SupaFilm to:</p>
          <Bullets
            items={[
              "Record people without the consent required where you are.",
              "Create content that is unlawful, harassing, hateful, or that sexualises minors.",
              "Impersonate someone else or produce material designed to deceive people about who is speaking.",
              "Infringe someone else's copyright, trademark or other rights.",
              "Interfere with, overload or attempt to circumvent the service, its limits or its billing.",
            ]}
          />
          <p>
            We may suspend access to the cloud-based features if they are used
            in these ways.
          </p>
        </Section>

        <Section title="SupaFilm Pro and billing">
          <Bullets
            items={[
              "SupaFilm Pro is an auto-renewing subscription sold at $29.99 per year, or the equivalent in your local currency as shown in the App Store at the time of purchase.",
              "Payment is charged to your Apple ID at confirmation of purchase.",
              "The subscription renews automatically unless auto-renew is turned off at least 24 hours before the end of the current period, and your account is charged for renewal within 24 hours before that period ends.",
              "You can manage or cancel the subscription in your App Store account settings. Cancelling stops the next renewal; it does not retroactively refund the current period.",
              "Refunds are handled by Apple under the App Store terms, not by us directly.",
              "Prices may change. Any change applies to future renewals and will be communicated in advance as required by the App Store.",
            ]}
          />
        </Section>

        <Section title="About the AI features">
          <p>
            AI output is generated automatically and is not reviewed by a person
            before you see it. It may be inaccurate, may misinterpret what you
            said, and may mistime a caption. Review anything SupaFilm generates
            before you publish it, and treat scripts as a draft to make your
            own, not as verified fact or professional advice.
          </p>
          <p>
            AI video edits are designed for one vertical take of up to three
            minutes. Editing runs on shared infrastructure, so processing times
            vary and a job can occasionally fail. If a render fails, you can
            retry it. Your original take is never modified by an edit.
          </p>
        </Section>

        <Section title="Availability">
          <p>
            The free teleprompter works offline on your device. The cloud-based
            features may be unavailable during maintenance, outages or changes
            to the providers we depend on. We may add, change or remove features
            over time, and will avoid removing something you paid for during a
            period you have already been billed for.
          </p>
        </Section>

        <Section title="Your responsibility for your files">
          <p>
            Scripts and recordings are stored on your device, and SupaFilm does
            not back them up for you. Deleting the app deletes its local data.
            Save takes you want to keep to your photo library.
          </p>
        </Section>

        <Section title="Disclaimer and liability">
          <p>
            SupaFilm is provided "as is", without warranties of any kind to the
            extent permitted by law. We do not guarantee that the app will be
            uninterrupted or error-free, or that AI output will meet a
            particular standard.
          </p>
          <p>
            To the extent permitted by law, we are not liable for indirect or
            consequential losses, or for lost content, lost recordings or lost
            profits. Nothing in these terms limits liability that cannot be
            limited by law, and if you are a consumer you keep the statutory
            rights your local law gives you.
          </p>
        </Section>

        <Section title="Termination">
          <p>
            You can stop using SupaFilm at any time by deleting the app. We may
            suspend or end access to the cloud-based features if these terms are
            breached in a way that is unlawful or harmful to the service or its
            users.
          </p>
        </Section>

        <Section title="Changes to these terms">
          <p>
            If these terms change, the updated date at the top of this page will
            change and the new version will be published here. Continuing to use
            SupaFilm after that means you accept the updated terms.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about these terms? Write to{" "}
            <a
              href="mailto:oscar.dreamtheater@gmail.com"
              className="font-semibold underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: RUST }}
            >
              oscar.dreamtheater@gmail.com
            </a>
            .
          </p>
        </Section>
      </main>
    </div>
  );
};

export default SupaFilmTerms;

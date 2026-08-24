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

const PAGE_TITLE = "Terms of Use | RepSet";
const PAGE_DESCRIPTION =
  "Terms of use for RepSet: how the free and open-source training app is licensed, what the AI assistant does, and the limits of training advice.";

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

const RepSetTerms = () => {
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
          Terms of Use
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
            RepSet is free to use and its source is public. It is a logging
            tool, not a coach or a medical service. Train sensibly and stop if
            something hurts.
          </p>
        </div>

        <div className="flex flex-col gap-9">
          <Section title="1. Accepting these terms">
            <p>
              By installing or using RepSet, you agree to these terms. If you do
              not agree with them, do not use the app.
            </p>
          </Section>

          <Section title="2. What RepSet is">
            <p>
              RepSet is a training app for logging workouts. It provides an
              exercise library, reusable templates, live session tracking, a
              rest timer, and progress figures computed from the sessions you
              record. The app, its library and its features are free to use.
            </p>
          </Section>

          <Section title="3. Not medical or professional advice">
            <p>
              RepSet does not provide medical advice, diagnosis, or treatment,
              and it is not a substitute for a qualified coach, physician, or
              physiotherapist. Exercise descriptions, form cues and any routine
              produced by the AI assistant are general information, not a
              prescription for your body or your condition.
            </p>
            <p>
              Resistance training carries risk of injury. You are responsible
              for deciding what is appropriate for you, for using safe loads and
              technique, and for consulting a professional before starting or
              changing a training program, particularly if you have an injury,
              a medical condition, or are pregnant. If you feel pain, dizziness,
              or distress, stop and seek medical attention.
            </p>
          </Section>

          <Section title="4. The AI assistant">
            <p>
              The AI assistant is optional. It generates routine suggestions
              from language models provided by OpenRouter, and its output can be
              wrong, incomplete, or unsuitable for you. Treat every generated
              routine as a starting point to review with your own judgement, not
              as a plan validated for your situation.
            </p>
            <p>
              You may supply your own OpenRouter API key, in which case your use
              is governed by your agreement with OpenRouter and you are
              responsible for the costs it incurs. If instead you pay for hosted
              generations, that charge covers the model usage. Availability of
              any specific model depends on OpenRouter and may change.
            </p>
            <p>
              Keep your API key confidential. You are responsible for activity
              carried out with a key you enter into the app.
            </p>
          </Section>

          <Section title="5. Your data">
            <p>
              Your workouts are stored on your device rather than on a server.
              You are responsible for your own backups. Uninstalling the app, or
              losing or resetting your device, deletes that data, and we cannot
              recover it because we never held it. How data is handled is
              described in the{" "}
              <Link
                to="/repset/privacy"
                className="underline underline-offset-4"
                style={{ color: LIME }}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </Section>

          <Section title="6. Open source and reuse">
            <p>
              RepSet's source code is published so that anyone can read it, run
              it, learn from it, and build on it. Your rights to reuse, modify
              and redistribute the code are set by the license file in the
              project repository, and that license governs in case of any
              conflict with this page.
            </p>
            <p>
              The RepSet name and app icon are not covered by that grant. If you
              publish your own app built on this codebase, give it your own name
              and icon so users are not misled about who is responsible for it.
              Third-party components, exercise data and media may carry their
              own licenses and attribution requirements, which you must respect.
            </p>
          </Section>

          <Section title="7. Acceptable use">
            <p>You agree not to:</p>
            <ul className="ml-4 list-inside list-disc space-y-1.5">
              <li>Use the app for any unlawful purpose</li>
              <li>
                Present the app or a fork as an official or endorsed product
                when it is not
              </li>
              <li>
                Abuse hosted AI generation, including automated bulk requests or
                attempts to circumvent limits
              </li>
              <li>
                Interfere with the service that delivers exercise data and media
              </li>
            </ul>
          </Section>

          <Section title="8. Availability">
            <p>
              RepSet is provided as-is and free of charge. Features may change
              and the exercise catalog service may be modified or interrupted.
              The app's core logging works offline, so a service interruption
              does not prevent you from training or from reaching sessions you
              have already recorded.
            </p>
          </Section>

          <Section title="9. Disclaimer and limitation of liability">
            <p>
              To the fullest extent permitted by law, RepSet is provided without
              warranties of any kind, express or implied, including
              merchantability, fitness for a particular purpose, and
              non-infringement. We do not warrant that the app will be
              uninterrupted, error-free, or that any information it presents is
              accurate or suitable for you.
            </p>
            <p>
              To the fullest extent permitted by law, the author is not liable
              for any injury, loss of data, or indirect, incidental, or
              consequential damages arising from your use of the app. Some
              jurisdictions do not allow certain exclusions, so parts of this
              section may not apply to you.
            </p>
          </Section>

          <Section title="10. Changes to these terms">
            <p>
              These terms may be updated. The current version is always the one
              on this page, with its date shown above. Continuing to use the app
              after a change means you accept the updated terms.
            </p>
          </Section>

          <Section title="11. Contact">
            <p>
              Questions about these terms can be raised through the project
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
            to="/repset/privacy"
            className="transition-colors hover:text-white"
          >
            Privacy
          </Link>
          <Link to="/#projects" className="transition-colors hover:text-white">
            Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepSetTerms;

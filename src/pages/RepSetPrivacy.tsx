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
  "How RepSet handles your data: workouts stay on your device, accounts are optional, and training history is never collected or sold.";

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
          Last updated: August 25, 2026
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
            The short version: your workouts stay in a database on your own
            device, and we never collect, transmit, or sell your training
            history. An account is optional, and only exists to carry a
            subscription between your devices. The free app shows ads, which
            RepSet Max removes.
          </p>
        </div>

        <div className="flex flex-col gap-9">
          <Section title="1. Who this covers">
            <p>
              This policy covers the RepSet mobile application and this page on
              crescente.dev. RepSet's core workout logger is free and its source
              is public, so you can verify everything described here by reading
              the source.
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
              None of this is uploaded anywhere. An optional account identifies
              your subscription, but your workouts are never attached to it and
              there is no workout cloud sync. If you uninstall the app, this
              local data is deleted with it.
            </p>
          </Section>

          <Section title="3. What leaves your device">
            <p>
              Your training data is never uploaded. What follows is everything
              that does leave the device, and when.
            </p>

            <p style={{ color: INK }}>Exercise catalogue and media</p>
            <p>
              The app downloads exercise data and demonstration media from
              media.crescente.dev. These are ordinary requests for public files.
              As with any web request, the server sees the standard connection
              information a request carries, such as your IP address. Nothing
              about your workouts is included.
            </p>

            <p style={{ color: INK }}>Signing in, if you choose to</p>
            <p>
              Signing in is optional and the app works fully without it. It
              exists so a RepSet Max subscription follows you to a new device.
              Sign-in runs through Google or Apple, and Firebase Authentication
              stores the resulting account: an account identifier, the email
              address of the account you used, and the display name it provides.
              With Apple you may choose to hide your email, and RepSet then
              receives only Apple's relay address.
            </p>
            <p>
              Your workouts are never attached to that account, and never
              uploaded. The account identifies a subscriber, nothing else.
            </p>

            <p style={{ color: INK }}>Subscriptions</p>
            <p>
              RepSet Max is purchased through the App Store or Google Play, and
              they process the payment — RepSet never sees your card or billing
              details. Subscription status is managed by RevenueCat, which
              receives your account identifier and the purchase record so the
              app can tell whether Max is active.
            </p>

            <p style={{ color: INK }}>Advertising, in the free app</p>
            <p>
              The free version shows ads through Google AdMob, which may use a
              device advertising identifier to select and measure them. Where
              the law requires it, a consent form appears before any ad request
              is made, and your choice is respected; you can change it later
              from the app's privacy options. RepSet Max removes ads entirely.
              Ad data is handled under Google's own privacy policy.
            </p>

            <p style={{ color: INK }}>AI session planning, only if you use it</p>
            <p>
              Planning is part of RepSet Max and does nothing until you write a
              request. When you do, three things are sent to RepSet's planning
              service: the sentence you wrote, a list of exercise names from the
              catalogue for the model to choose from, and your account token so
              the service can confirm your subscription. The service passes the
              first two to OpenRouter, which generates the plan.
            </p>
            <p>
              Your training history, your body measurements, and your logged
              sets are never sent — the model only ever sees what you typed and
              a list of exercise names. Requests are not stored to build a
              profile of you. OpenRouter handles what it receives under its own
              privacy policy.
            </p>
          </Section>

          <Section title="4. What we do not do">
            <ul className="ml-4 list-inside list-disc space-y-1.5">
              <li>No uploading of your workouts, ever</li>
              <li>No selling of your personal data</li>
              <li>No analytics or usage tracking of your training</li>
              <li>No crash or telemetry reporting</li>
              <li>No ads during an active workout</li>
              <li>No training history sent to any AI provider</li>
            </ul>
          </Section>

          <Section title="5. Permissions">
            <p>
              RepSet requests notification permission so the rest timer can
              alert you when the app is in the background. You can decline it,
              and the rest of the app works normally.
            </p>
            <p>
              On iOS, the free version also asks for permission to track before
              showing personalised ads. Declining means you still see ads, just
              less relevant ones, and nothing else about the app changes. Both
              permissions can be changed at any time in your device settings.
            </p>
          </Section>

          <Section title="6. Children">
            <p>
              RepSet is not directed at children under 13 and does not knowingly
              collect information from them. If you believe a child has created
              an account, email hola@crescente.dev and it will be deleted.
            </p>
          </Section>

          <Section title="7. Your control over your data">
            <p>
              Your training data stays on your device, so you control it
              directly: delete individual sessions and templates in the app, or
              remove everything by uninstalling it.
            </p>
            <p>
              If you created an account, you can have it and the data tied to it
              erased. Email{" "}
              <a
                href="mailto:hola@crescente.dev?subject=RepSet%20account%20deletion"
                className="underline underline-offset-4"
                style={{ color: LIME }}
              >
                hola@crescente.dev
              </a>{" "}
              from the address you signed in with, and you may also ask what is
              held about you or request a copy of it. Cancel a subscription in
              your App Store or Google Play account.
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
          <Link
            to="/repset/support"
            className="transition-colors hover:text-white"
          >
            Support
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

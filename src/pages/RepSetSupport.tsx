import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Github, Bug, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import repsetMark from "@/assets/repset-mark.webp";

const LIME = "#d7ff4f";
const GROUND = "#151714";
const LINE = "#2f342b";
const INK = "#f3f5ef";
const MUTED = "#969e8d";

const SUPPORT_EMAIL = "hola@crescente.dev";

const PAGE_TITLE = "Support | RepSet";
const PAGE_DESCRIPTION =
  "Get help with RepSet: contact the developer, report a bug, ask about a subscription, or request account deletion.";

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

const ContactRow = ({
  icon,
  label,
  detail,
  href,
  action,
}: {
  icon: React.ReactNode;
  label: string;
  detail: string;
  href: string;
  action: string;
}) => (
  <a
    href={href}
    className="flex items-center gap-4 rounded-[18px] p-4 transition-colors hover:bg-[#22261e]"
    style={{ border: `1px solid ${LINE}`, background: "#1c1f1a" }}
  >
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
      style={{ background: "rgba(215,255,79,.14)", color: LIME }}
    >
      {icon}
    </span>
    <span className="flex min-w-0 flex-col">
      <span className="font-bold" style={{ color: INK }}>
        {label}
      </span>
      <span className="truncate text-sm" style={{ color: MUTED }}>
        {detail}
      </span>
    </span>
    <span
      className="ml-auto shrink-0 text-sm font-bold"
      style={{ color: LIME }}
    >
      {action}
    </span>
  </a>
);

const RepSetSupport = () => {
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
          Support
        </h1>
        <p className="mb-10 text-lg" style={{ color: MUTED }}>
          RepSet is built and maintained by one person. Write to me directly and
          you will get a reply, usually within two business days.
        </p>

        <div className="mb-12 flex flex-col gap-3">
          <ContactRow
            icon={<Mail className="h-[18px] w-[18px]" />}
            label="Email"
            detail={SUPPORT_EMAIL}
            href={`mailto:${SUPPORT_EMAIL}?subject=RepSet%20support`}
            action="Write"
          />
          <ContactRow
            icon={<Bug className="h-[18px] w-[18px]" />}
            label="Report a bug"
            detail="Open an issue on the public repository"
            href="https://github.com/oscarcrescente/open-repset/issues"
            action="GitHub"
          />
        </div>

        <div className="flex flex-col gap-9">
          <Section title="Developer">
            <p>
              <span style={{ color: INK }}>Oscar Crescente</span>
              <br />
              Independent developer
              <br />
              <a
                href="https://crescente.dev"
                className="transition-colors hover:underline"
                style={{ color: LIME }}
              >
                crescente.dev
              </a>
            </p>
            <p>
              For anything about the app — a bug, a question, a feature you
              wish existed — email{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="transition-colors hover:underline"
                style={{ color: LIME }}
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="Reporting a problem">
            <p>
              The more of this you can include, the faster it gets fixed:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-1.5">
              <li>Your device and its operating system version</li>
              <li>The RepSet version, shown in the app's settings</li>
              <li>What you did, and what happened instead</li>
              <li>A screenshot or recording, if the problem is visible</li>
            </ul>
          </Section>

          <Section title="Subscriptions and billing">
            <p>
              RepSet Max is billed by Apple or Google, not by RepSet. Manage or
              cancel it in your App Store or Play Store account — cancelling
              there stops any future renewal, and access continues until the
              period you already paid for ends.
            </p>
            <p>
              Refunds are handled by the store that took the payment. Apple
              refunds are requested at{" "}
              <a
                href="https://reportaproblem.apple.com"
                className="transition-colors hover:underline"
                style={{ color: LIME }}
              >
                reportaproblem.apple.com
              </a>
              ; Google refunds through the Play Store order history. If a charge
              looks wrong, email me and I will help you sort it out.
            </p>
          </Section>

          <Section title="Your account and your data">
            <p>
              Your workouts live on your device. An account is optional and only
              exists to carry a subscription across your devices.
            </p>
            <p>
              To delete your account and everything associated with it, email{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=RepSet%20account%20deletion`}
                className="transition-colors hover:underline"
                style={{ color: LIME }}
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              from the address you signed in with. Deleting the app removes the
              training data stored on that device.
            </p>
            <p>
              What is collected, and what never is, is set out in the{" "}
              <Link
                to="/repset/privacy"
                className="transition-colors hover:underline"
                style={{ color: LIME }}
              >
                privacy policy
              </Link>
              .
            </p>
          </Section>

          <Section title="Security">
            <p>
              Found a vulnerability? Please do not open a public issue. Email{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=RepSet%20security%20report`}
                className="transition-colors hover:underline"
                style={{ color: LIME }}
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              with a minimal reproduction, and leave out any personal data or
              credentials.
            </p>
            <p
              className="flex items-center gap-2 text-sm"
              style={{ color: "#6e7666" }}
            >
              <ShieldCheck className="h-4 w-4" style={{ color: LIME }} />
              Reports are answered before any fix is made public.
            </p>
          </Section>

          <Section title="Open source">
            <p>
              RepSet's application code is public, so you can read exactly how
              it handles your training data rather than take my word for it.
            </p>
            <p className="flex items-center gap-2">
              <Github className="h-4 w-4" style={{ color: LIME }} />
              <a
                href="https://github.com/oscarcrescente/open-repset"
                className="transition-colors hover:underline"
                style={{ color: LIME }}
              >
                github.com/oscarcrescente/open-repset
              </a>
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

export default RepSetSupport;

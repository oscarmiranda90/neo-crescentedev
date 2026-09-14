import { useEffect } from "react";
import { ArrowLeft, Bug, CreditCard, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import supafilmMark from "@/assets/supafilm-mark.webp";

const PAPER = "#FFFCF6";
const CANVAS = "#F2F0EA";
const GRAPHITE = "#232528";
const STONE = "#EAE8E2";
const RUST = "#AE4A3E";
const MUTED = "#6B6E72";
const SUPPORT_EMAIL = "hola@ultramare.dev";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="flex flex-col gap-3">
    <h2 className="text-2xl font-extrabold tracking-[-.025em]">{title}</h2>
    <div className="flex flex-col gap-3 leading-relaxed" style={{ color: MUTED }}>
      {children}
    </div>
  </section>
);

const ContactCard = ({
  icon,
  title,
  body,
  subject,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  subject: string;
}) => (
  <a
    href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`}
    className="flex items-center gap-4 rounded-[18px] p-4 transition-opacity hover:opacity-75"
    style={{ border: `1px solid ${STONE}`, background: CANVAS }}
  >
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
      style={{ background: "rgba(174,74,62,.12)", color: RUST }}
    >
      {icon}
    </span>
    <span className="min-w-0">
      <span className="block font-extrabold" style={{ color: GRAPHITE }}>
        {title}
      </span>
      <span className="block text-sm" style={{ color: MUTED }}>
        {body}
      </span>
    </span>
    <span className="ml-auto shrink-0 text-sm font-extrabold" style={{ color: RUST }}>
      Write
    </span>
  </a>
);

const SupaFilmSupport = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = meta?.content;
    document.title = "Support | SupaFilm";
    if (meta) {
      meta.content =
        "Get help with SupaFilm recording, AI edits, subscriptions, privacy or account deletion.";
    }
    return () => {
      document.title = previousTitle;
      if (meta && previousDescription !== undefined) meta.content = previousDescription;
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ background: PAPER, color: GRAPHITE }}>
      <nav
        className="sticky top-0 z-50 backdrop-blur-xl"
        style={{ borderBottom: `1px solid ${STONE}`, background: "rgba(255,252,246,.85)" }}
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
            <span className="text-xl font-extrabold tracking-tight">SupaFilm</span>
          </Link>
        </div>
      </nav>

      <header className="border-b" style={{ background: CANVAS, borderColor: STONE }}>
        <div className="container mx-auto max-w-4xl px-6 py-14 md:py-20">
          <span className="mb-3.5 block h-[3px] w-[26px] rounded-sm" style={{ background: RUST }} />
          <h1 className="text-4xl font-extrabold tracking-[-.035em] md:text-6xl">Support</h1>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: MUTED }}>
            Tell us what happened and we will help you get back to your script,
            recording or edit.
          </p>
        </div>
      </header>

      <main className="container mx-auto flex max-w-4xl flex-col gap-12 px-6 py-14 md:py-20">
        <div className="grid gap-3 md:grid-cols-2">
          <ContactCard
            icon={<Mail className="h-[18px] w-[18px]" />}
            title="General support"
            body={SUPPORT_EMAIL}
            subject="SupaFilm support"
          />
          <ContactCard
            icon={<Bug className="h-[18px] w-[18px]" />}
            title="Report a problem"
            body="Include your device, iOS version and what you were doing."
            subject="SupaFilm bug report"
          />
          <ContactCard
            icon={<CreditCard className="h-[18px] w-[18px]" />}
            title="Subscription help"
            body="Purchases, restoration, access or an unexpected charge."
            subject="SupaFilm subscription help"
          />
          <ContactCard
            icon={<ShieldCheck className="h-[18px] w-[18px]" />}
            title="Privacy or security"
            body="Data requests and responsible security reports."
            subject="SupaFilm privacy or security"
          />
        </div>

        <Section title="Before you write">
          <ul className="list-disc space-y-2 pl-5">
            <li>For an edit still processing, open Edits and pull to refresh.</li>
            <li>Cloud AI features require internet; recording and the teleprompter work offline.</li>
            <li>If Pro is missing after reinstalling, use Restore Purchases in Settings.</li>
            <li>Keep original takes in Photos before deleting the app or clearing local recordings.</li>
          </ul>
        </Section>

        <Section title="Subscriptions and refunds">
          <p>
            Apple handles billing. You can manage or cancel SupaFilm Pro from
            Settings → Apple Account → Subscriptions. A cancellation stops the
            next renewal and access continues through the paid period.
          </p>
          <p>
            Apple also decides refund requests. Submit one at{" "}
            <a
              href="https://reportaproblem.apple.com"
              className="font-semibold underline decoration-1 underline-offset-4"
              style={{ color: RUST }}
            >
              reportaproblem.apple.com
            </a>
            .
          </p>
        </Section>

        <Section title="Account and data">
          <p>
            Delete your account directly in SupaFilm under Settings → Delete
            Account. This removes backed-up scripts and account-linked edit data;
            it does not cancel an Apple subscription. If you cannot access the
            app, email us from the address attached to the account or include the
            anonymous account identifier shown in Settings.
          </p>
          <p>
            Read the{" "}
            <Link to="/supafilm/privacy" className="font-semibold underline" style={{ color: RUST }}>
              Privacy Policy
            </Link>{" "}
            for the full data and retention details.
          </p>
        </Section>

        <div className="flex flex-wrap gap-6 border-t pt-8 text-sm" style={{ borderColor: STONE, color: MUTED }}>
          <Link to="/supafilm">SupaFilm</Link>
          <Link to="/supafilm/privacy">Privacy</Link>
          <Link to="/supafilm/terms">Terms</Link>
          <Link to="/#projects">Back to portfolio</Link>
        </div>
      </main>
    </div>
  );
};

export default SupaFilmSupport;

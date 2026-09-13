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

const LAST_UPDATED = "13 September 2026";

const PAGE_TITLE = "Privacy Policy | SupaFilm";
const PAGE_DESCRIPTION =
  "How SupaFilm handles your data: scripts and recordings stay on your device, an account is optional, and a take is only uploaded when you ask for an AI edit.";

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

const SupaFilmPrivacy = () => {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg" style={{ color: MUTED }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </header>

      <main className="container mx-auto flex max-w-3xl flex-col gap-10 px-6 py-14 md:py-20">
        <Section title="The short version">
          <p>
            SupaFilm is built to work without an account. Your scripts and your
            recordings live on your device. You can optionally back up your
            scripts with an email address so they survive a lost or replaced
            phone — that is the only thing an account changes. A video only
            leaves your phone when you explicitly ask for an AI edit, and it is
            used for that edit and nothing else. We do not sell your data, and
            we do not use your recordings to train AI models.
          </p>
        </Section>

        <Section title="What stays on your device">
          <p>
            The following never leaves your phone unless you choose to send or
            share it yourself:
          </p>
          <Bullets
            items={[
              "Your scripts and their titles, stored in a local database on the device. If you turn on email backup, a copy is also synced to your account — see \"Optional account and script backup\" below.",
              "Your reading preferences: pace, text size, reading direction and the position of the reading panel.",
              "Videos you record, until you save them to Photos, share them, or request an AI edit.",
              "Trimmed versions of your takes produced on the device.",
            ]}
          />
          <p>
            Deleting the app removes this local data. Videos you already saved
            to Photos remain in your photo library, because they belong to you.
          </p>
        </Section>

        <Section title="Device permissions">
          <p>SupaFilm asks for these permissions only when a feature needs them:</p>
          <Bullets
            items={[
              <>
                <strong style={{ color: GRAPHITE }}>Camera</strong> — to show
                the live preview and record your take.
              </>,
              <>
                <strong style={{ color: GRAPHITE }}>Microphone</strong> — to
                record audio with your take, and to capture speech when you use
                voice-based script features.
              </>,
              <>
                <strong style={{ color: GRAPHITE }}>Photo library</strong> — to
                save a finished video. If you do not grant full access, SupaFilm
                falls back to a simple save.
              </>,
            ]}
          />
          <p>
            You can withdraw any of these at any time in the iOS Settings app.
            The teleprompter still works without camera access; you simply
            cannot record.
          </p>
        </Section>

        <Section title="What is sent when you use AI features">
          <p>
            AI features are optional and part of SupaFilm Pro. They run in the
            cloud, so they require an internet connection.
          </p>
          <Bullets
            items={[
              <>
                <strong style={{ color: GRAPHITE }}>Script tools</strong> — the
                text of the script you are working on, or a voice recording you
                choose to dictate, is sent so it can be written, rewritten or
                improved and returned to you.
              </>,
              <>
                <strong style={{ color: GRAPHITE }}>AI video edits</strong> —
                the take you select is uploaded to private storage. Its audio is
                transcribed to time the captions, an edit plan is generated, and
                the finished vertical video and its thumbnail are returned to
                you.
              </>,
            ]}
          />
          <p>
            Nothing is uploaded in the background. A video is transferred only
            after you request an edit for that specific take.
          </p>
        </Section>

        <Section title="How long uploads are kept">
          <p>
            Uploaded project source video is deleted automatically{" "}
            <strong style={{ color: GRAPHITE }}>one day</strong> after upload by
            a storage lifecycle rule, and uploads that never complete are
            discarded after seven days. Rendered results stay available until
            you delete them, so you have time to download them. You can delete
            an edit, and request deletion of its original, from inside the app
            at any time. Temporary working files created during rendering are
            deleted when the job finishes.
          </p>
          <p>
            Scripts you have backed up are kept until you delete them or delete
            your account. Cloud storage is not a backup service — keep your own
            copies of anything you need to retain.
          </p>
        </Section>

        <Section title="Service providers">
          <p>
            SupaFilm uses a small number of providers to deliver the features
            above. They process data on our instructions and only for these
            purposes:
          </p>
          <Bullets
            items={[
              "Cloud infrastructure, for the API, private file storage and the rendering that produces your edit.",
              "A managed database and authentication provider, which holds your anonymous account, your email address if you add one, and any scripts you back up.",
              "A bot-protection provider, used only to verify that backup and recovery email requests come from a person.",
              "AI model providers, to transcribe your take's audio and to generate scripts and edit plans.",
              "Apple, for App Store purchases, and a subscription management provider that records whether your Pro subscription is active.",
            ]}
          />
          <p>
            We do not sell your personal information, and we do not share it for
            advertising or cross-context behavioural advertising.
          </p>
        </Section>

        <Section title="Training">
          <p>
            Your recordings, your scripts and the videos SupaFilm produces for
            you are not used to train AI models.
          </p>
        </Section>

        <Section title="Optional account and script backup">
          <p>
            Recording does not require an account. On first launch SupaFilm
            creates an <strong style={{ color: GRAPHITE }}>anonymous account</strong>{" "}
            so the app can reach our services. It is identified by a random
            identifier — not your name, your email, or an advertising
            identifier.
          </p>
          <p>
            If you want your scripts to survive a lost or replaced phone, you
            can add an email address to that anonymous account. Adding an email
            does not change the account's identifier; it only adds a way to
            recover it. Backup is never required to write, record, edit or
            export.
          </p>
          <p>When — and only when — you turn on email backup, we store:</p>
          <Bullets
            items={[
              <>
                <strong style={{ color: GRAPHITE }}>Your email address</strong>{" "}
                — used to send you a sign-in link and restore your scripts on a
                new device.
              </>,
              <>
                <strong style={{ color: GRAPHITE }}>Your scripts</strong> — the
                title and full text of each script, so it can be given back to
                you.
              </>,
              <>
                <strong style={{ color: GRAPHITE }}>
                  Their reading settings
                </strong>{" "}
                — pace, text size, orientation, and the position and size of
                the reading panel, so a restored script reads the way you left
                it.
              </>,
            ]}
          />
          <p>
            Your scripts are protected by database rules that allow only your
            own account to read or change your rows. We do not read your
            scripts, sell them, or use them to train any model. If you never
            turn on backup, your scripts never leave the device.
          </p>
          <p>
            When you request a backup or recovery email, a bot-protection check
            runs first. Its provider receives the technical signals needed to
            tell a person from a bot, and returns a one-time token we use only
            to allow that single email.
          </p>
        </Section>

        <Section title="Deleting your account">
          <p>
            You can delete your account and everything stored for it at any
            time. Write to{" "}
            <a
              href="mailto:hola@ultramare.dev"
              className="font-semibold underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: RUST }}
            >
              hola@ultramare.dev
            </a>{" "}
            from the email address on the account, or, if the account is still
            anonymous, include the account identifier shown in the app under
            Settings. Deleting the account removes every script stored for it.
          </p>
          <p>
            You can also remove individual items yourself at any time: delete a
            script in the app to remove it from your synced library, and use
            Delete my data in Settings to remove the takes, projects and
            rendered videos the editor holds for you.
          </p>
        </Section>

        <Section title="Children">
          <p>
            SupaFilm is not directed at children under 13, and we do not
            knowingly collect personal information from them. If you believe a
            child has provided us information, contact us and we will delete it.
          </p>
        </Section>

        <Section title="Your rights">
          <p>
            Because most of your content stays on your device, you control it
            directly: delete a script, a take or an edit in the app and it is
            gone. For anything held on our side, you can request access,
            correction or deletion by contacting us at the address below.
            Depending on where you live, you may also have the right to object
            to or restrict processing, or to lodge a complaint with your local
            data protection authority.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            If this policy changes in a way that affects how your data is
            handled, the updated date at the top of this page will change and
            the new version will be published here before it takes effect.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about privacy, or a request about your data? Write to{" "}
            <a
              href="mailto:hola@ultramare.dev"
              className="font-semibold underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: RUST }}
            >
              hola@ultramare.dev
            </a>
            .
          </p>
        </Section>
      </main>
    </div>
  );
};

export default SupaFilmPrivacy;

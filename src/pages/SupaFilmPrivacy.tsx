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
  "How SupaFilm handles your data: original recordings stay on your device, email backup is optional, and a lightweight copy is uploaded only when you request an AI edit.";

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
            SupaFilm is built to work without a sign-in. Your original
            recordings stay on your device, and your scripts are stored there
            unless you choose email backup. Text you submit to an AI script tool
            is processed in the cloud. When you explicitly request an AI edit,
            the app uploads a reduced-resolution video copy and extracted audio
            for analysis; the full-quality original never leaves your phone.
            We do not sell your data, and we do not use your recordings to
            train AI models.
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
              "The full-quality videos you record, including when you request an AI edit. The app uploads only a smaller analysis copy for that feature.",
              "Trimmed takes and finished videos rendered by the editor on your device.",
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
                record audio with your take.
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
                idea or script text you submit is sent so it can be written,
                rewritten or improved and returned to you.
              </>,
              <>
                <strong style={{ color: GRAPHITE }}>AI video edits</strong> —
                the app creates and uploads a silent, reduced-resolution video
                copy plus a separate audio track. The audio is transcribed and
                cloud AI produces an edit plan containing captions, timing and
                visual directions. SupaFilm then applies that plan to your
                full-quality original and renders the finished video on your
                device.
              </>,
              <>
                <strong style={{ color: GRAPHITE }}>Optional gestures</strong>{" "}
                — when Gestures is on, hand poses are detected on your device.
                Only the gesture type and timing are added to the edit request;
                SupaFilm does not create or store a biometric identity template.
              </>,
            ]}
          />
          <p>
            An upload begins only after you request an edit for that specific
            take, and the app tells you to keep the upload screen open until the
            transfer finishes. Once it is uploaded, cloud analysis may continue
            while you use another part of the app or close it.
          </p>
        </Section>

        <Section title="How long uploads are kept">
          <p>
            The reduced-resolution project video is deleted automatically{" "}
            <strong style={{ color: GRAPHITE }}>one day</strong> after upload by
            a storage lifecycle rule, and incomplete multipart uploads are
            discarded after seven days. The separate audio file is removed
            after processing or cleanup. SupaFilm does not keep a cloud-rendered
            finished video: the final export is created on your device.
          </p>
          <p>
            The transcript, edit plan and job status are kept with your account
            so you can reopen and revise the edit. Scripts you back up are kept
            until you delete them or delete your account. Using Delete Account
            in Settings removes or anonymises the account records held by our
            services. Cloud storage is not a backup service — keep your own
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
              "Cloudflare, for the API, queue, private temporary file storage, bot protection and audio transcription.",
              "Supabase, for the anonymous account, authentication, your email address if you add one, and any scripts you choose to back up.",
              "OpenRouter and the AI model providers selected through it, to generate scripts and edit plans from the content you submit.",
              "Apple, for App Store purchases and optional push notifications, and RevenueCat, which records whether your Pro subscription is active.",
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

        <Section title="Notifications">
          <p>
            If you allow notifications, Apple gives SupaFilm a device token.
            The app sends that token with an edit request so our service can
            notify you when the edit is ready. It is not used for advertising,
            and you can disable notifications at any time in iOS Settings.
          </p>
        </Section>

        <Section title="Account and service records">
          <p>
            To operate the service, we keep a random account identifier, your
            subscription product and entitlement status, and records needed to
            track requested edits. An edit record can include its status,
            transcript, edit plan and timestamps. If you add email backup, the
            account also contains your email and synced scripts. If you enable
            notifications, it can also contain the Apple device token described
            above.
          </p>
          <p>
            Our network providers also process standard connection information,
            such as an IP address and request headers, to deliver requests,
            protect the service and diagnose failures. We do not use this
            information for advertising or cross-app tracking.
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
            time from <strong style={{ color: GRAPHITE }}>Settings → Delete Account</strong>{" "}
            in the app. If you cannot access the app, write to{" "}
            <a
              href="mailto:hola@ultramare.dev"
              className="font-semibold underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: RUST }}
            >
              hola@ultramare.dev
            </a>{" "}
            from the email address on the account, or include the account
            identifier shown in Settings. Deleting the account removes backed-up
            scripts, project media and account-linked edit data. Anonymous
            cancellation records may remain only after their owner and submitted
            content have been removed.
          </p>
          <p>
            You can also remove individual local items yourself. Deleting a
            synced script removes it from your script library; Delete Account is
            the control that erases the account-linked data held by our cloud
            services. Deleting your account does not cancel an App Store
            subscription, which you manage separately through Apple.
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
            Because most of your content stays on your device, you control local
            copies directly. For anything held on our side, use Delete Account
            or request access, correction or deletion by contacting us at the
            address below.
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

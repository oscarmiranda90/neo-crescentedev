import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import supafilmIcon from "@/assets/supafilm-icon.webp";
import supafilmMark from "@/assets/supafilm-mark.webp";
import scr1 from "@/assets/supafilm-scr1.webp";
import scr2 from "@/assets/supafilm-scr2.webp";
import scr3 from "@/assets/supafilm-scr3.webp";
import scr4 from "@/assets/supafilm-scr4.webp";

/**
 * Brand tokens lifted from the app's DESIGN.md so this page and the product
 * never drift: warm paper, graphite ink and muted cover colours. The app is an
 * editorial studio, not a glossy camera app, so this page commits to the same
 * light world rather than following the portfolio's dark project pages.
 */
const PAPER = "#FFFCF6";
const CANVAS = "#F2F0EA";
const GRAPHITE = "#232528";
const INK_BLUE = "#293137";
const STONE = "#EAE8E2";
const SAND = "#D5C5A7";
const RUST = "#AE4A3E";
const MUTED = "#6B6E72";

const screenshots = [
  {
    src: scr1,
    alt: "The SupaFilm script library, showing saved scripts as paper-coloured covers.",
    caption: "Your scripts, kept like a library.",
  },
  {
    src: scr2,
    alt: "The teleprompter running over a live camera preview, one word highlighted at the reading point.",
    caption: "One fixed reading point, beside the lens.",
  },
  {
    src: scr3,
    alt: "A finished vertical edit with large poster-style captions over the take.",
    caption: "Poster-style captions, timed to your take.",
  },
  {
    src: scr4,
    alt: "The AI script studio turning a short prompt into a finished spoken script.",
    caption: "An idea becomes a script in seconds.",
  },
];

const features = [
  {
    title: "Read without looking away",
    body: "The script sits beside the front lens, or docks under the Dynamic Island. Move it, resize it, and read horizontally or vertically.",
  },
  {
    title: "A fixed reading point",
    body: "Words pass through one marked spot instead of scrolling past. Your eyeline stays still however fast you speak, so it never reads as reading.",
  },
  {
    title: "Rehearse before you record",
    body: "Play the script at the real pace and text size without the camera running, then adjust both until the delivery feels like yours.",
  },
  {
    title: "Review, trim and save",
    body: "Play the take back, drag the range handles to cut it, and save to Photos. The original take is always kept intact.",
  },
];

const proFeatures = [
  {
    title: "AI Script Studio",
    body: "Describe the video you want and get a spoken script back. Paste an existing one to improve it, or rewrite it for 15, 30 or 60 seconds.",
  },
  {
    title: "Voice Dump",
    body: "Talk freely for a minute. SupaFilm strips the fillers, repetition and tangents, and returns a hook, a body and a CTA in your own voice.",
  },
  {
    title: "Script coaching",
    body: "Improve the hook, sharpen the CTA, make it conversational, shorten or expand it, and match the tone to the platform you post on.",
  },
  {
    title: "AI video edits",
    body: "Turn one vertical take into a post-ready edit: an opening hook, word-by-word captions, emphasis on the words that matter and editorial overlays.",
  },
  {
    title: "Three editorial styles",
    body: "Poster for large type that stops the scroll, Cuts for precise punch-ins on the pauses, and Calm for a single quiet caption and nothing else.",
  },
  {
    title: "Captions and sync",
    body: "Timed captions on your takes, advanced recording options, and your script library carried across your devices.",
  },
];

const freeFeatures = [
  "Unlimited local scripts",
  "Teleprompter with a fixed reading point",
  "Horizontal and vertical reading",
  "Dynamic Island docking",
  "Adjustable pace and text size",
  "Rehearsal mode",
  "Front and back camera recording",
  "Review, trim and save to Photos",
  "No account required",
];

const proList = [
  "Everything in Free",
  "AI Script Studio and Voice Dump",
  "Rewrite, shorten, expand and retone",
  "Hook and CTA coaching",
  "AI video edits in three styles",
  "Timed captions",
  "Advanced recording options",
  "Script sync across devices",
];

const faqs = [
  {
    q: "What makes this different from other teleprompters?",
    a: "Most teleprompters scroll a paragraph, so a fast reader runs ahead and their eyes drift down the block. On camera that reads plainly as reading. SupaFilm passes every word through a single fixed point, which keeps your eyeline still no matter how fast you deliver the line.",
  },
  {
    q: "Do I need an account?",
    a: "No. Scripts, the teleprompter, recording, review and trimming all work without signing in, and your scripts are stored locally on your device. An account is only involved when you use Pro features that run in the cloud.",
  },
  {
    q: "Is the free version actually usable?",
    a: "Yes. The free app is a complete teleprompter: write or paste a script, keep it beside the lens, set your pace, record, review, trim and save. Pro adds the writing tools and the AI edit, but it is never required to record a good take.",
  },
  {
    q: "What does an AI edit produce?",
    a: "You pick a style, and SupaFilm returns a vertical MP4 with an opening hook, captions timed to your words, emphasis on key ideas, up to three editorial overlays and a thumbnail. Your original take is never modified.",
  },
  {
    q: "How long can a take be?",
    a: "AI edits are designed for one vertical take of up to three minutes. Recording, trimming and saving in the free app are not limited that way.",
  },
  {
    q: "Does an AI edit need an internet connection?",
    a: "Yes. The edit is produced in the cloud, so it needs a connection. The teleprompter itself, and everything else in the free app, works entirely offline.",
  },
  {
    q: "What happens to my video?",
    a: "A take is only uploaded when you ask for an AI edit. It is used to produce that edit and nothing else, it is never used to train models, and you can delete the result and the original from the app.",
  },
];

/** Replaces an icon chip: a short accent rule that opens each block. */
const AccentRule = ({ color = RUST }: { color?: string }) => (
  <span
    aria-hidden="true"
    className="mb-3.5 block h-[3px] w-[26px] rounded-sm"
    style={{ background: color }}
  />
);

const PAGE_TITLE = "SupaFilm | Script to screen, in one take";
const PAGE_DESCRIPTION =
  "SupaFilm is an iOS teleprompter that keeps your eyeline on the lens, then turns one take into a post-ready vertical edit with AI captions, hooks and editorial overlays.";

const SupaFilm = () => {
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
      {/* Navbar */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-xl"
        style={{
          borderBottom: `1px solid ${STONE}`,
          background: "rgba(255,252,246,.85)",
        }}
      >
        <div className="container mx-auto flex h-[72px] items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Link to="/#projects">
              <Button variant="ghost" size="sm" style={{ color: GRAPHITE }}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <div className="ml-4 flex items-center gap-2.5">
              <img
                src={supafilmMark}
                alt="SupaFilm Icon"
                width={34}
                height={34}
                className="h-[34px] w-[34px] rounded-[9px]"
              />
              <span className="text-xl font-extrabold tracking-tight">
                SupaFilm
              </span>
            </div>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            {[
              ["#features", "Features"],
              ["#screens", "Screens"],
              ["#pro", "Pro"],
              ["#pricing", "Pricing"],
              ["#faq", "FAQ"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: MUTED }}
              >
                {label}
              </a>
            ))}
            <a href="#get-started">
              <Button
                size="sm"
                className="font-extrabold"
                style={{ background: GRAPHITE, color: PAPER }}
              >
                Get SupaFilm
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-[1.08fr_.92fr]">
          <div className="flex flex-col items-start gap-6">
            <span
              className="rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[.14em]"
              style={{ background: STONE, color: INK_BLUE }}
            >
              iOS · Teleprompter
            </span>
            <h1
              className="text-balance text-5xl font-extrabold leading-[1.04] tracking-[-.035em] md:text-7xl"
              style={{ maxWidth: "14ch" }}
            >
              From idea to video, in one{" "}
              <em className="not-italic" style={{ color: RUST }}>
                take
              </em>
              .
            </h1>
            <p className="text-lg" style={{ color: MUTED, maxWidth: "58ch" }}>
              SupaFilm keeps your script beside the lens so you speak naturally
              on camera. Then it turns that take into something people actually
              want to watch.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#get-started">
                <Button
                  size="lg"
                  className="font-extrabold"
                  style={{ background: GRAPHITE, color: PAPER }}
                >
                  Get SupaFilm
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#pro">
                <Button
                  size="lg"
                  variant="ghost"
                  className="font-extrabold"
                  style={{ border: `1px solid ${STONE}`, color: GRAPHITE }}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  See what Pro does
                </Button>
              </a>
            </div>
            <p className="text-sm" style={{ color: MUTED }}>
              Free to record. No account needed.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={supafilmIcon}
              alt="The SupaFilm app icon."
              width={380}
              height={380}
              className="block h-auto w-[min(380px,80%)] flex-none object-contain"
              style={{ aspectRatio: "1 / 1" }}
            />
          </div>
        </div>
      </section>

      {/* The idea */}
      <section
        className="border-y"
        style={{ background: CANVAS, borderColor: STONE }}
      >
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[.9fr_1.1fr]">
            <div>
              <AccentRule />
              <h2 className="text-3xl font-extrabold tracking-[-.03em] md:text-4xl">
                Scrolling text is why you look like you are reading.
              </h2>
            </div>
            <div
              className="flex flex-col gap-4 text-lg leading-relaxed"
              style={{ color: MUTED }}
            >
              <p>
                With a scrolling paragraph, a fast reader runs ahead and their
                eyes drift down the block. On camera that is unmistakable.
              </p>
              <p>
                SupaFilm passes every word through a single fixed point, marked
                on the reading panel. Each word warms and grows as it arrives,
                then settles as it passes. Your eyeline never moves, however
                fast you deliver the line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-16 md:py-24">
        <AccentRule />
        <h2 className="text-3xl font-extrabold tracking-[-.03em] md:text-4xl">
          Everything you need for a good take.
        </h2>
        <p className="mt-3 text-lg" style={{ color: MUTED, maxWidth: "62ch" }}>
          The free app is a complete teleprompter, not a trial.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[22px] p-6"
              style={{ background: CANVAS, border: `1px solid ${STONE}` }}
            >
              <AccentRule color={INK_BLUE} />
              <h3 className="text-xl font-extrabold tracking-[-.02em]">
                {feature.title}
              </h3>
              <p className="mt-2 leading-relaxed" style={{ color: MUTED }}>
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section
        id="screens"
        className="border-y"
        style={{ background: CANVAS, borderColor: STONE }}
      >
        <div className="container mx-auto px-6 py-16 md:py-24">
          <AccentRule />
          <h2 className="text-3xl font-extrabold tracking-[-.03em] md:text-4xl">
            Script, record, edit, post.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((shot) => (
              <figure key={shot.caption} className="flex flex-col gap-3">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width={620}
                  height={1344}
                  loading="lazy"
                  className="block h-auto w-full rounded-[18px]"
                  style={{
                    border: `1px solid ${STONE}`,
                    boxShadow: "0 24px 60px -32px rgba(35,37,40,.45)",
                  }}
                />
                <figcaption
                  className="text-sm font-semibold"
                  style={{ color: MUTED }}
                >
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pro */}
      <section id="pro" className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <AccentRule />
            <h2 className="text-3xl font-extrabold tracking-[-.03em] md:text-4xl">
              What SupaFilm Pro does.
            </h2>
            <p
              className="mt-3 text-lg leading-relaxed"
              style={{ color: MUTED, maxWidth: "48ch" }}
            >
              Free gets the take out of you. Pro handles the two parts that
              usually take longest: knowing what to say, and editing it
              afterwards.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {proFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[22px] p-6"
                style={{ background: PAPER, border: `1px solid ${STONE}` }}
              >
                <AccentRule color={SAND} />
                <h3 className="text-lg font-extrabold tracking-[-.02em]">
                  {feature.title}
                </h3>
                <p
                  className="mt-2 text-[15px] leading-relaxed"
                  style={{ color: MUTED }}
                >
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="border-y"
        style={{ background: CANVAS, borderColor: STONE }}
      >
        <div className="container mx-auto px-6 py-16 md:py-24">
          <AccentRule />
          <h2 className="text-3xl font-extrabold tracking-[-.03em] md:text-4xl">
            Pricing.
          </h2>
          <p className="mt-3 text-lg" style={{ color: MUTED, maxWidth: "58ch" }}>
            One subscription, billed yearly. The teleprompter itself stays free.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Free */}
            <div
              className="flex flex-col rounded-[22px] p-8"
              style={{ background: PAPER, border: `1px solid ${STONE}` }}
            >
              <h3 className="text-2xl font-extrabold tracking-[-.025em]">
                Free
              </h3>
              <p className="mt-1" style={{ color: MUTED }}>
                Everything you need to record.
              </p>
              <p className="mt-6 text-4xl font-extrabold tracking-[-.03em]">
                $0
              </p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {freeFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      aria-hidden="true"
                      className="mt-[3px] h-4 w-4 flex-none"
                      style={{ color: INK_BLUE }}
                    />
                    <span style={{ color: MUTED }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex-1" />
              <a href="#get-started">
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full font-extrabold"
                  style={{ border: `1px solid ${STONE}`, color: GRAPHITE }}
                >
                  Download SupaFilm
                </Button>
              </a>
            </div>

            {/* Pro */}
            <div
              className="relative flex flex-col rounded-[22px] p-8"
              style={{ background: GRAPHITE, color: PAPER }}
            >
              <span
                className="absolute right-8 top-8 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-[.14em]"
                style={{ background: SAND, color: GRAPHITE }}
              >
                Pro
              </span>
              <h3 className="text-2xl font-extrabold tracking-[-.025em]">
                SupaFilm Pro
              </h3>
              <p className="mt-1" style={{ color: "rgba(255,252,246,.62)" }}>
                Write it faster, edit it automatically.
              </p>
              <p className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-[-.03em]">
                  $29.99
                </span>
                <span style={{ color: "rgba(255,252,246,.62)" }}>/ year</span>
              </p>
              <p
                className="mt-1 text-sm"
                style={{ color: "rgba(255,252,246,.62)" }}
              >
                About $2.50 a month.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {proList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      aria-hidden="true"
                      className="mt-[3px] h-4 w-4 flex-none"
                      style={{ color: SAND }}
                    />
                    <span style={{ color: "rgba(255,252,246,.82)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex-1" />
              <a href="#get-started">
                <Button
                  size="lg"
                  className="w-full font-extrabold"
                  style={{ background: PAPER, color: GRAPHITE }}
                >
                  Go Pro
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          <p className="mt-6 text-sm" style={{ color: MUTED, maxWidth: "72ch" }}>
            Pro is billed through your App Store account and renews yearly
            unless cancelled at least 24 hours before the period ends. Manage or
            cancel it any time in your App Store settings. AI features need an
            internet connection, and AI video edits are designed for one
            vertical take of up to three minutes.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container mx-auto px-6 py-16 md:py-24">
        <AccentRule />
        <h2 className="text-3xl font-extrabold tracking-[-.03em] md:text-4xl">
          Questions.
        </h2>
        <Accordion type="single" collapsible className="mt-8 max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              value={`item-${index}`}
              style={{ borderColor: STONE }}
            >
              <AccordionTrigger className="text-left text-lg font-extrabold tracking-[-.02em]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent
                className="text-base leading-relaxed"
                style={{ color: MUTED }}
              >
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Get started */}
      <section
        id="get-started"
        className="border-t"
        style={{ background: CANVAS, borderColor: STONE }}
      >
        <div className="container mx-auto px-6 py-16 text-center md:py-24">
          <img
            src={supafilmMark}
            alt=""
            aria-hidden="true"
            width={64}
            height={64}
            className="mx-auto h-16 w-16 rounded-[16px]"
          />
          <h2 className="mt-6 text-3xl font-extrabold tracking-[-.03em] md:text-5xl">
            Say it once. Post it today.
          </h2>
          <p
            className="mx-auto mt-4 text-lg"
            style={{ color: MUTED, maxWidth: "52ch" }}
          >
            Write the script, keep your eyes on the lens, and let SupaFilm turn
            the take into a finished vertical video.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="font-extrabold"
              style={{ background: GRAPHITE, color: PAPER }}
            >
              Coming to the App Store
            </Button>
          </div>
          <div
            className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
            style={{ color: MUTED }}
          >
            <Link
              to="/supafilm/privacy"
              className="underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Privacy Policy
            </Link>
            <Link
              to="/supafilm/terms"
              className="underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupaFilm;

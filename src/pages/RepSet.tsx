import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight, Download, GitFork, Github } from "lucide-react";
import { Link } from "react-router-dom";
import repsetIcon from "@/assets/repset-icon.webp";
import repsetMark from "@/assets/repset-mark.webp";
import DotField from "@/components/repset/DotField";
import { Reveal, SweepReveal } from "@/components/repset/Reveal";

/**
 * Brand tokens lifted from the RepSet app's _theme() in
 * lib/app/repset_app.dart, so this page and the product never drift:
 * lime #d7ff4f on a #151714 ground, 22px cards and 13px controls.
 *
 * The app pins ThemeMode.dark, so this page commits to the same single
 * visual world rather than following the portfolio's light theme.
 */
const LIME = "#d7ff4f";
const GROUND = "#151714";
const RAISED = "#1c1f1a";
const LINE = "#2f342b";
const INK = "#f3f5ef";
const MUTED = "#969e8d";

const features = [
  {
    title: "Reusable templates",
    body: "Save a session, start it again in one tap. Build a push, pull and legs split once, run it every week.",
  },
  {
    title: "Live session tracking",
    body: "Log sets as you go, with a rest timer that keeps running and still alerts you when the app is in the background.",
  },
  {
    title: "Progress you can read",
    body: "Volume, sessions and personal records over time, computed from your real history and never from invented numbers.",
  },
  {
    title: "No account, no ads",
    body: "Nothing to sign up for and nothing to dismiss. Install it and start the first session.",
  },
];

const openSource = [
  {
    title: "Fork it and rebrand it",
    body: "Take the codebase, change the palette, ship your own training app under your own name.",
  },
  {
    title: "Use the library on its own",
    body: "The exercise dataset and the domain layer are separable from the UI, so you can build a different interface on top.",
  },
  {
    title: "Built to be read",
    body: "Clean architecture, domain-driven boundaries and a real test suite, not a tangle you inherit.",
  },
];

const faqs = [
  {
    q: "Is RepSet really free?",
    a: "Yes. The app, the 500+ exercise library, templates, tracking and progress history are free, with no account and no ads. The only thing that ever costs money is hosted AI generation, and even that is optional because you can use your own OpenRouter key instead.",
  },
  {
    q: "What does open source mean here in practice?",
    a: "The full source is public. You can read it, fork it, change it, and ship your own training app built on the same foundation, including the exercise library, the workout engine and the data layer.",
  },
  {
    q: "Do I need an OpenRouter key to use the app?",
    a: "No. The key only matters for the AI assistant. The library, templates, tracking and history all work without any key at all.",
  },
  {
    q: "Where is my training data stored?",
    a: "On your device, in a local database. RepSet works fully offline and there is no account to create, so your history is not sitting on someone else's server.",
  },
  {
    q: "Can I contribute exercises or code?",
    a: "That is the point. Exercise data, translations, bug fixes and features are all welcome through the repository.",
  },
];

/** Replaces an icon chip: a short accent rule that opens each block. */
const AccentRule = () => (
  <span
    aria-hidden="true"
    className="mb-3.5 block h-[3px] w-[26px] rounded-sm"
    style={{ background: LIME }}
  />
);

const PAGE_TITLE = "RepSet | Free, open-source training";
const PAGE_DESCRIPTION =
  "RepSet is a free, open-source training app: over 500 exercises, workout templates, live session tracking and progress history, with an AI assistant that builds routines.";

const RepSet = () => {
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
    <div
      className="relative min-h-screen"
      style={{ background: GROUND, color: INK }}
    >
      <DotField />

      <div className="relative z-10">
        {/* Navbar */}
        <nav
          className="sticky top-0 z-50 backdrop-blur-xl"
          style={{
            borderBottom: `1px solid ${LINE}`,
            background: "rgba(21,23,20,.82)",
          }}
        >
          <div className="container mx-auto flex h-[72px] items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <Link to="/#projects">
                <Button variant="ghost" size="sm" style={{ color: INK }}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              </Link>
              <div className="ml-4 flex items-center gap-2.5">
                <img
                  src={repsetMark}
                  alt="RepSet Icon"
                  width={34}
                  height={34}
                  className="h-[34px] w-[34px] rounded-[9px]"
                />
                <span className="text-xl font-extrabold tracking-tight">
                  RepSet
                </span>
              </div>
            </div>
            <div className="hidden items-center gap-6 md:flex">
              {[
                ["#features", "Features"],
                ["#assistant", "AI assistant"],
                ["#open-source", "Open source"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm transition-colors hover:opacity-100"
                  style={{ color: MUTED }}
                >
                  {label}
                </a>
              ))}
              <a href="#get-started">
                <Button
                  size="sm"
                  className="font-extrabold"
                  style={{ background: LIME, color: "#16190f" }}
                >
                  Get RepSet
                </Button>
              </a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1.08fr_.92fr]">
            <div className="flex flex-col items-start gap-6">
              <h1
                className="text-balance text-5xl font-extrabold leading-[1.04] tracking-[-.035em] md:text-7xl"
                style={{ maxWidth: "13ch" }}
              >
                Train with a real library, not a{" "}
                <em className="not-italic" style={{ color: LIME }}>
                  paywall
                </em>
                .
              </h1>
              <p className="text-lg" style={{ color: MUTED, maxWidth: "62ch" }}>
                Over 500 exercises, templates, live tracking and progress
                history. All free, all open source.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#get-started">
                  <Button
                    size="lg"
                    className="font-extrabold"
                    style={{ background: LIME, color: "#16190f" }}
                  >
                    Start training
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#open-source">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="font-extrabold"
                    style={{ border: `1px solid ${LINE}`, color: INK }}
                  >
                    <GitFork className="mr-2 h-4 w-4" />
                    Read the source
                  </Button>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img
                src={repsetIcon}
                alt="The RepSet app icon: a lime dumbbell on a dark ground."
                width={380}
                height={380}
                className="block h-auto w-[min(380px,80%)] flex-none rounded-[30px] object-contain"
                style={{
                  aspectRatio: "1 / 1",
                  boxShadow: "0 44px 100px -34px rgba(0,0,0,.9)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 50% 50%, #000 56%, transparent 78%)",
                  maskImage:
                    "radial-gradient(circle at 50% 50%, #000 56%, transparent 78%)",
                }}
              />
            </div>
          </div>
        </section>

        {/* Counters */}
        <section className="container mx-auto px-6" aria-label="RepSet at a glance">
          <SweepReveal className="overflow-hidden rounded-[22px]">
            <div
              className="grid gap-px sm:grid-cols-3"
              style={{ background: LINE, border: `1px solid ${LINE}` }}
            >
              {[
                ["500", "+", "Exercises"],
                ["$", "0", "Cost to train"],
                ["100", "%", "Open source"],
              ].map(([a, b, label]) => (
                <div key={label} className="px-6 py-5" style={{ background: RAISED }}>
                  <div className="text-4xl font-extrabold tabular-nums tracking-[-.045em]">
                    {a}
                    <span style={{ color: LIME }}>{b}</span>
                  </div>
                  <div
                    className="mt-2 text-[11.5px] font-semibold uppercase tracking-[.07em]"
                    style={{ color: "#6e7666" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </SweepReveal>
        </section>

        {/* Features */}
        <section id="features" className="container mx-auto px-6 py-20">
          <Reveal>
            <div className="mb-10 flex max-w-[60ch] flex-col gap-3.5">
              <h2 className="text-balance text-3xl font-extrabold tracking-[-.035em] md:text-5xl">
                Everything a training app should have. Nothing it shouldn't.
              </h2>
              <p className="text-lg" style={{ color: MUTED }}>
                Most fitness apps hide the exercise library, the templates, or
                the history behind a subscription. RepSet ships all of it in the
                free app.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3.5 md:grid-cols-3">
            {/* Anchor tile: the figure is its own mark, so no accent rule. */}
            <Reveal className="md:col-span-2">
              <article
                className="flex h-full flex-col justify-between rounded-[22px] p-6"
                style={{
                  border: `1px solid ${LINE}`,
                  background: `radial-gradient(120% 130% at 88% 8%, rgba(215,255,79,.12), transparent 58%), ${RAISED}`,
                }}
              >
                <div>
                  <div className="text-6xl font-black leading-[.88] tabular-nums tracking-[-.05em] md:text-8xl">
                    500<span style={{ color: LIME }}>+</span>
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold tracking-[-.022em]">
                    Exercises, browsable
                  </h3>
                  <p className="mt-2 text-[15.5px]" style={{ color: MUTED, maxWidth: "44ch" }}>
                    Filter by muscle group and equipment, with the form cues and
                    movement detail you need to actually run the set.
                  </p>
                </div>
              </article>
            </Reveal>

            <Reveal delay={70}>
              <article
                className="flex h-full flex-col rounded-[22px] p-6"
                style={{ border: `1px solid ${LINE}`, background: RAISED }}
              >
                <AccentRule />
                <h3 className="text-xl font-extrabold tracking-[-.022em]">
                  {features[0].title}
                </h3>
                <p className="mt-2.5 text-[15.5px]" style={{ color: MUTED }}>
                  {features[0].body}
                </p>
              </article>
            </Reveal>

            {/* Wide tile */}
            <Reveal delay={140} className="md:col-span-3">
              <article
                className="rounded-[22px] p-6"
                style={{ border: `1px solid ${LINE}`, background: RAISED }}
              >
                <AccentRule />
                <h3 className="text-xl font-extrabold tracking-[-.022em]">
                  Offline first, on your device
                </h3>
                <p className="mt-2.5 text-[15.5px]" style={{ color: MUTED, maxWidth: "58ch" }}>
                  Your workouts live in a local database, so a dead signal in the
                  basement gym changes nothing. There is no account to create and
                  no training history sold to anyone.
                </p>
              </article>
            </Reveal>

            {features.slice(1).map((f, i) => (
              <Reveal key={f.title} delay={210 + i * 70}>
                <article
                  className="flex h-full flex-col rounded-[22px] p-6"
                  style={{ border: `1px solid ${LINE}`, background: RAISED }}
                >
                  <AccentRule />
                  <h3 className="text-xl font-extrabold tracking-[-.022em]">
                    {f.title}
                  </h3>
                  <p className="mt-2.5 text-[15.5px]" style={{ color: MUTED }}>
                    {f.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* AI assistant */}
        <section id="assistant" className="container mx-auto px-6 py-20">
          <Reveal>
            <div className="mb-10 flex max-w-[60ch] flex-col gap-3.5">
              <p
                className="text-[11px] font-extrabold uppercase tracking-[.13em]"
                style={{ color: LIME }}
              >
                AI assistant
              </p>
              <h2 className="text-balance text-3xl font-extrabold tracking-[-.035em] md:text-5xl">
                Describe your goal. Get a routine.
              </h2>
              <p className="text-lg" style={{ color: MUTED }}>
                Tell the assistant your training days, equipment and target, and
                it builds a routine from the same 500+ exercise library the app
                already uses.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div
              className="grid gap-px overflow-hidden rounded-[22px] md:grid-cols-[1.1fr_.9fr]"
              style={{ background: LINE, border: `1px solid ${LINE}` }}
            >
              <div
                className="flex flex-col gap-4 p-8 md:p-10"
                style={{ background: LIME, color: "#16190f" }}
              >
                <h2 className="text-3xl font-extrabold tracking-[-.035em] md:text-4xl">
                  Two ways to run it.
                </h2>
                <p style={{ color: "rgba(22,25,15,.76)", maxWidth: "38ch" }}>
                  Plug in your own OpenRouter key and pay the model provider
                  directly at cost, or use ours and skip the setup. Same
                  assistant either way.
                </p>
              </div>
              <div
                className="flex flex-col gap-5 p-8 md:p-10"
                style={{ background: RAISED }}
              >
                {[
                  [
                    "YOUR KEY",
                    "Bring your own OpenRouter key",
                    "Paste your key into settings and pick any model OpenRouter offers. RepSet takes no cut, so you pay the provider directly.",
                  ],
                  [
                    "HOSTED",
                    "Use ours instead",
                    "No key to manage. Pay for hosted generations and the assistant works out of the box.",
                  ],
                ].map(([tag, title, body], i) => (
                  <div
                    key={tag}
                    className="flex flex-col gap-1.5"
                    style={
                      i > 0
                        ? { paddingTop: 20, borderTop: `1px solid ${LINE}` }
                        : undefined
                    }
                  >
                    <span
                      className="self-start rounded-md px-2 py-0.5 font-mono text-[10.5px] font-bold tracking-[.07em]"
                      style={{ background: "rgba(215,255,79,.12)", color: LIME }}
                    >
                      {tag}
                    </span>
                    <h3 className="text-[1.04rem] font-extrabold tracking-[-.022em]">
                      {title}
                    </h3>
                    <p className="text-[14.5px]" style={{ color: MUTED }}>
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Open source */}
        <section id="open-source" className="container mx-auto px-6 py-20">
          <Reveal>
            <div className="mb-11 flex max-w-[60ch] flex-col gap-4">
              <p
                className="text-[11px] font-extrabold uppercase tracking-[.13em]"
                style={{ color: LIME }}
              >
                Open source
              </p>
              <h2 className="text-balance text-3xl font-extrabold tracking-[-.035em] md:text-5xl">
                A platform, not just an app.
              </h2>
              <p className="text-lg" style={{ color: MUTED }}>
                The goal is not only to ship one training app. It is to give
                anyone the foundation to build their own: the exercise library,
                the session engine and the data layer, all readable and
                forkable.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3.5 md:grid-cols-3">
            {openSource.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div
                  className="flex h-full flex-col rounded-[22px] p-6"
                  style={{ border: `1px solid ${LINE}`, background: RAISED }}
                >
                  <AccentRule />
                  <h3 className="text-xl font-extrabold tracking-[-.022em]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15px]" style={{ color: MUTED }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Built with */}
        <div className="container mx-auto px-6">
          <Reveal>
            <div
              className="flex flex-wrap items-center gap-x-8 gap-y-3 py-7"
              style={{ borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}
            >
              <span
                className="text-[11px] font-extrabold uppercase tracking-[.13em]"
                style={{ color: "#6e7666" }}
              >
                Built with
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-2.5">
                {["Flutter", "Dart", "BLoC", "SQLite", "OpenRouter"].map((s) => (
                  <span key={s} className="font-mono text-[13.5px]" style={{ color: MUTED }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* FAQ */}
        <section id="faq" className="container mx-auto px-6 py-20">
          <Reveal>
            <h2 className="mb-10 text-balance text-3xl font-extrabold tracking-[-.035em] md:text-5xl">
              Straight answers.
            </h2>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3.5">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i + 1}`}
                  className="rounded-[22px] px-6"
                  style={{ border: `1px solid ${LINE}`, background: RAISED }}
                >
                  <AccordionTrigger className="text-left font-extrabold tracking-[-.018em] hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-[15.5px]"
                    style={{ color: MUTED, maxWidth: "70ch" }}
                  >
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </section>

        {/* Final CTA */}
        <section id="get-started" className="container mx-auto px-6 py-20">
          <Reveal>
            <div
              className="flex flex-col items-center gap-5 rounded-[22px] px-8 py-14 text-center md:px-16"
              style={{
                border: `1px solid ${LINE}`,
                background: `radial-gradient(100% 120% at 50% 0%, rgba(215,255,79,.08), transparent 60%), ${RAISED}`,
              }}
            >
              <h2
                className="text-balance text-3xl font-extrabold tracking-[-.035em] md:text-5xl"
                style={{ maxWidth: "17ch" }}
              >
                Free app. Free library. Free to fork.
              </h2>
              <p className="text-lg" style={{ color: MUTED, maxWidth: "62ch" }}>
                Install RepSet and train today, or clone the repo and start
                building the training app you actually wanted.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="font-extrabold"
                  style={{ background: LIME, color: "#16190f" }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download RepSet
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="font-extrabold"
                  style={{ border: `1px solid ${LINE}`, color: INK }}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: `1px solid ${LINE}` }}>
          <div className="container mx-auto px-6 py-11">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-2.5">
                <img
                  src={repsetMark}
                  alt="RepSet Icon"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg"
                />
                <span className="text-xl font-extrabold tracking-tight">
                  RepSet
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "#6e7666" }}>
                <a href="#features" className="transition-colors hover:text-white">
                  Features
                </a>
                <a href="#open-source" className="transition-colors hover:text-white">
                  Open source
                </a>
                <Link to="/repset/privacy" className="transition-colors hover:text-white">
                  Privacy
                </Link>
                <Link to="/repset/terms" className="transition-colors hover:text-white">
                  Terms
                </Link>
              </div>
              <Link
                to="/#projects"
                className="text-sm transition-colors hover:text-white"
                style={{ color: "#6e7666" }}
              >
                Back to portfolio
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RepSet;

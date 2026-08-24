import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * RepSetEntrance, ported from lib/core/motion/repset_motion.dart.
 *
 * The Flutter widget fades on a linear controller while the transform rides
 * easeOutBack, so a block overshoots by a hair and settles. Splitting the two
 * transitions here keeps that feel instead of flattening it into one curve.
 *
 * Durations come from RepSetMotion: expressive is 520ms.
 */
const EASE_OUT_BACK = "cubic-bezier(.175,.885,.32,1.275)";
const EXPRESSIVE = 520;

type RevealProps = {
  children: ReactNode;
  /** Per-child delay in ms, mirroring the delay argument the app widget takes. */
  delay?: number;
  className?: string;
};

const useInView = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setInView(true);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
};

export const Reveal = ({ children, delay = 0, className = "" }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(18px) scale(.985)",
        transformOrigin: "top center",
        transition: `opacity ${EXPRESSIVE}ms linear ${delay}ms, transform ${EXPRESSIVE}ms ${EASE_OUT_BACK} ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/**
 * RepSetDirectionalReveal: a lime panel sweeps across and uncovers the surface
 * behind it. 1000ms on the emphasized curve, as in the app.
 */
export const SweepReveal = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {children}
      {!reduced && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] bg-[#d7ff4f]"
          style={{
            transform: "translateX(-100%)",
            animation: inView
              ? "repset-sweep 1000ms cubic-bezier(.2,0,0,1) forwards"
              : undefined,
          }}
        />
      )}
    </div>
  );
};

export default Reveal;

import { useEffect, useRef } from "react";

/**
 * The dot backdrop from the RepSet app, ported from
 * lib/features/home/dot_pattern.dart so the page and the product share one
 * texture: two interfering sine waves, a radial fade, and a crest brightening
 * that reads as light moving across the surface.
 *
 * The canvas is fixed behind the page content and never handles pointer input.
 */
const SPACING = 16;
const RADIUS = 1.4;
const AMPLITUDE = 2.2;
const OPACITY = 0.42;
const TINT_STRENGTH = 0.85;
const PERIOD = 14000;

const BASE: [number, number, number] = [90, 98, 84];
const TINT: [number, number, number] = [215, 255, 79];
const TINTED: [number, number, number] = [
  BASE[0] + (TINT[0] - BASE[0]) * TINT_STRENGTH,
  BASE[1] + (TINT[1] - BASE[1]) * TINT_STRENGTH,
  BASE[2] + (TINT[2] - BASE[2]) * TINT_STRENGTH,
];

const PRIMARY_WAVELENGTH = 190;
const SECONDARY_WAVELENGTH = 310;
const SECONDARY_OFFSET = 2.4;
const TAU = Math.PI * 2;

const DotField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf: number | null = null;
    let start: number | null = null;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      if (width <= 0 || height <= 0) return;

      const columns = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      const offsetX = (width - (columns - 1) * SPACING) / 2;
      const offsetY = (height - (rows - 1) * SPACING) / 2;
      const cx = width / 2;
      const cy = height / 2;
      const maxDistance = Math.sqrt(cx * cx + cy * cy);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const baseX = offsetX + col * SPACING;
          const baseY = offsetY + row * SPACING;

          // Each wave travels its own diagonal, so crests sweep across the
          // field instead of pulsing the whole grid in unison.
          const primary = Math.sin(
            ((baseX + baseY) / PRIMARY_WAVELENGTH) * TAU + t,
          );
          const secondary = Math.sin(
            ((baseX - baseY * 0.6) / SECONDARY_WAVELENGTH) * TAU +
              SECONDARY_OFFSET -
              t * 2,
          );

          const x = baseX + primary * AMPLITUDE;
          const y = baseY + secondary * AMPLITUDE;

          const dx = x - cx;
          const dy = y - cy;
          const distance = Math.sqrt(dx * dx + dy * dy) / maxDistance;
          let strength = 1 - Math.pow(distance, 2.6);
          if (strength <= 0.02) continue;
          if (strength > 1) strength = 1;

          let crest = 0.86 + (primary + secondary) * 0.07;
          if (crest < 0) crest = 0;
          else if (crest > 1) crest = 1;

          // Lime concentrates where content sits and drains toward the edges,
          // so the tint reads as a glow rather than a flat green wash.
          const r = BASE[0] + (TINTED[0] - BASE[0]) * strength;
          const g = BASE[1] + (TINTED[1] - BASE[1]) * strength;
          const b = BASE[2] + (TINTED[2] - BASE[2]) * strength;

          ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${(
            OPACITY *
            strength *
            crest
          ).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(x, y, RADIUS, 0, TAU);
          ctx.fill();
        }
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced.matches) draw(0);
    };

    const frame = (now: number) => {
      if (start === null) start = now;
      // Wrapping on an exact multiple of 2pi keeps the loop seam invisible.
      const phase = ((now - start) % PERIOD) / PERIOD;
      draw(phase * TAU);
      raf = requestAnimationFrame(frame);
    };

    const sync = () => {
      if (raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
      if (reduced.matches) {
        draw(0);
        return;
      }
      start = null;
      raf = requestAnimationFrame(frame);
    };

    window.addEventListener("resize", resize);
    reduced.addEventListener("change", sync);
    resize();
    sync();

    return () => {
      window.removeEventListener("resize", resize);
      reduced.removeEventListener("change", sync);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
};

export default DotField;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import { site } from "@/content/site";
import { Magnetic } from "@/components/Magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const lenis = useLenis();
  const reduce = useReducedMotion();
  const words = site.tagline.split(" ");

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 50, damping: 20, mass: 0.3 });

  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "America/New_York",
        }),
      );
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2);
      my.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -80 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-32 pb-24 sm:px-10">
      <Backdrop sx={sx} sy={sy} />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal" />
            </span>
            <span className="text-accent">System status: operational</span>
          </motion.div>

          <h1 className="mt-8 max-w-2xl font-display text-[2rem] leading-[1.04] text-text sm:text-5xl lg:text-[3.4rem]">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
                <motion.span
                  className="inline-block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.07 }}
                >
                  {word === "real" || word === "users." ? (
                    <span className="italic text-accent">{word}</span>
                  ) : (
                    word
                  )}
                  {i < words.length - 1 ? " " : ""}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            {site.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                onClick={scrollTo("work")}
                className="group flex items-center gap-2.5 bg-accent px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-bg transition-all hover:opacity-90 active:scale-95"
              >
                Selected work
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </Magnetic>
            <a
              href={site.socials.resume}
              target="_blank"
              className="flex items-center gap-2 border border-line-strong px-7 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-text transition-colors hover:border-accent hover:text-accent"
            >
              Download resume ↗
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint"
          >
            <span className="text-signal">Open to 2026 new-grad roles</span>
            <span>·</span>
            <span suppressHydrationWarning>{time ?? "--:--"} EST</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          className="group relative lg:col-span-5"
        >
          <div className="absolute -inset-px bg-gradient-to-br from-accent/40 via-transparent to-blue/40 opacity-30 blur-md transition-opacity duration-700 group-hover:opacity-60" />
          <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
            <Image
              src="/headshot.jpg"
              alt={site.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover grayscale brightness-95 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-100"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 right-3 border border-line bg-bg/80 px-3 py-2 backdrop-blur-md">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-text">
                Loc: East Lansing, MI
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                CS @ MSU &rsquo;26
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Backdrop({ sx, sy }: { sx: MotionValue<number>; sy: MotionValue<number> }) {
  const x = useTransform(sx, [-1, 1], [-2, 2]);
  const y = useTransform(sy, [-1, 1], [-2, 2]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -inset-2"
        style={{
          x,
          y,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at 40% 40%, #000 25%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 40% 40%, #000 25%, transparent 80%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 12% 0%, rgba(204,255,0,0.07), transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, transparent 55%, rgba(10,10,10,0.85) 100%)",
        }}
      />
    </div>
  );
}

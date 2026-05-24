"use client";

import { useLenis } from "lenis/react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { Magnetic } from "@/components/Magnetic";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const lenis = useLenis();
  const reduce = useReducedMotion();
  const words = site.tagline.split(" ");

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("work");
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -80 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-32 pb-20 sm:px-10">
      <Backdrop reduce={!!reduce} />

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          <span className="flex items-center gap-2.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Open to 2026 new-grad roles
          </span>
          <span className="text-faint">/</span>
          <span>{site.focus}</span>
          <span className="text-faint">/</span>
          <span>{site.location}</span>
        </motion.div>

        <h1 className="mt-9 max-w-4xl font-display text-[1.75rem] font-medium leading-[1.08] tracking-tight text-text sm:text-4xl lg:text-[3.25rem]">
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
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
          className="mt-8 max-w-xl text-xl leading-relaxed text-muted"
        >
          {site.heroSub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Magnetic>
            <a
              href="#work"
              onClick={scrollToWork}
              className="group flex items-center gap-3 rounded-full bg-text px-7 py-3.5 text-sm font-medium text-bg transition-colors"
            >
              Selected work
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </Magnetic>
          <a
            href={`mailto:${site.contact.emails[0]}`}
            className="link-underline text-sm text-muted transition-colors hover:text-text"
          >
            Get in touch
          </a>
          <a
            href={site.socials.resume}
            target="_blank"
            className="link-underline text-sm text-muted transition-colors hover:text-text"
          >
            Résumé ↗
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
          Scroll
        </span>
        <span className="h-12 w-px overflow-hidden bg-line">
          <motion.span
            className="block h-1/2 w-full bg-accent"
            animate={reduce ? {} : { y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}

function Backdrop({ reduce }: { reduce: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
      <motion.div
        className="absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(224,164,92,0.16), transparent 60%)",
        }}
        animate={reduce ? {} : { x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-52 right-[-10rem] h-[38rem] w-[38rem] rounded-full opacity-40 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(90,110,180,0.14), transparent 60%)",
        }}
        animate={reduce ? {} : { x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 40%, rgba(10,10,11,0.6) 100%)",
        }}
      />
    </div>
  );
}

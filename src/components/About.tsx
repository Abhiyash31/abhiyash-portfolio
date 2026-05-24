import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <Reveal className="md:sticky md:top-28 md:self-start">
          <Link href="/about" className="group block">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line">
              <Image
                src="/headshot.jpg"
                alt={site.name}
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover grayscale brightness-[0.88] contrast-[1.08] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-30" />
              <div
                className="pointer-events-none absolute inset-0 mix-blend-color opacity-40 transition-opacity duration-700 group-hover:opacity-0"
                style={{ background: "var(--color-accent)" }}
              />
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-faint">
              {site.name} — {site.location}
            </p>
          </Link>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              ✦ About
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-7 font-display text-xl leading-snug text-text sm:text-[1.7rem]">
              {site.about[0]}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl leading-relaxed text-muted">{site.about[1]}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-3 rounded-full border border-line-strong px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-text transition-colors hover:border-accent hover:text-accent"
            >
              More about me
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

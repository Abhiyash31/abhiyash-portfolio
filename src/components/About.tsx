import Link from "next/link";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-line bg-surface px-6 py-28 sm:px-10 sm:py-36"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              ✦ 02 / Background
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-2xl uppercase leading-tight tracking-tight text-text sm:text-3xl">
              The unglamorous parts of building software.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 border border-line-strong px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-text transition-colors hover:border-accent hover:text-accent"
            >
              More about me
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">{site.about[0]}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <figure className="mt-8 border border-line bg-bg p-8 sm:p-10">
              <span className="font-display text-5xl leading-none text-accent">&ldquo;</span>
              <blockquote className="mt-2 font-display text-xl leading-snug text-text sm:text-2xl">
                {site.quote}
              </blockquote>
              <figcaption className="mt-6 text-muted">{site.quoteCaption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

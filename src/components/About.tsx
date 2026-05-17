import Image from "next/image";
import { site } from "@/content/site";
import { education } from "@/content/experience";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <Reveal className="md:sticky md:top-28 md:self-start">
          <div className="group relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line">
            <Image
              src="/headshot.jpg"
              alt={site.name}
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              className="object-cover grayscale brightness-[0.88] contrast-[1.08] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-100"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-30" />
            <div className="pointer-events-none absolute inset-0 mix-blend-color opacity-40 transition-opacity duration-700 group-hover:opacity-0" style={{ background: "var(--color-accent)" }} />
          </div>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-faint">
            {site.name} — {site.location}
          </p>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              ✦ About
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-7 font-display text-2xl leading-snug text-text sm:text-[2rem]">
              {site.about[0]}
            </p>
          </Reveal>
          {site.about.slice(1).map((para, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="mt-6 text-lg leading-relaxed text-muted">{para}</p>
            </Reveal>
          ))}

          <Reveal delay={0.15}>
            <div className="mt-12 border-t border-line pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                Education
              </p>
              <p className="mt-3 text-text">
                {education.degree}
                <span className="text-muted"> — {education.school}</span>
              </p>
              <p className="mt-1 font-mono text-sm text-muted">
                {education.period} · {education.detail}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

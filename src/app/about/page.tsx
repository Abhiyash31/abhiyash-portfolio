import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { education, experience, activities } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: site.about[0],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="px-6 pt-36 pb-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Link
            href="/"
            className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-text"
          >
            ← Home
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            ✦ About
          </p>
          <h1 className="mt-6 font-display text-[2rem] uppercase leading-[1.04] tracking-tight text-text sm:text-5xl">
            Engineer who likes the <span className="italic text-accent">unglamorous</span> parts.
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <Reveal className="md:sticky md:top-28 md:self-start">
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-br from-accent/40 via-transparent to-blue/40 opacity-30 blur-md transition-opacity duration-700 group-hover:opacity-60" />
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-line bg-surface">
                <Image
                  src="/headshot.jpg"
                  alt={site.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                  className="object-cover grayscale brightness-95 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
              </div>
            </div>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              {site.name} · {site.location}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.contact.emails[0]}`}
                className="bg-accent px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-bg transition-all hover:opacity-90 active:scale-95"
              >
                Email
              </a>
              <a
                href={site.socials.resume}
                target="_blank"
                className="border border-line-strong px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-text transition-colors hover:border-accent hover:text-accent"
              >
                Resume ↗
              </a>
            </div>
          </Reveal>

          <div>
            {site.about.map((para, i) =>
              i === 0 ? (
                <Reveal key={i} delay={0.05}>
                  <p className="font-display text-xl leading-snug text-text sm:text-[1.7rem]">
                    {para}
                  </p>
                </Reveal>
              ) : (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="mt-6 text-xl leading-relaxed text-muted">{para}</p>
                </Reveal>
              )
            )}

            <Reveal delay={0.15}>
              <div className="mt-12 border border-line bg-elevated p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  ✦ Education
                </p>
                <p className="mt-4 text-lg text-text">
                  {education.degree}
                  <span className="text-muted"> · {education.school}</span>
                </p>
                <p className="mt-1 font-mono text-sm text-muted">
                  {education.period} · {education.detail}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Relevant coursework: {education.coursework.join(", ")}.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-28">
          <Reveal>
            <div className="flex items-end justify-between border-b border-line pb-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                ✦ 01 / Stack
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                Tools I reach for
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.05}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {group.label}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:text-text"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <Reveal>
            <div className="flex items-end justify-between border-b border-line pb-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                ✦ 02 / Experience
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                Where I have worked
              </p>
            </div>
          </Reveal>
          <div className="mt-4 flex flex-col">
            {experience.map((job, i) => (
              <Reveal key={job.org} delay={i * 0.05}>
                <div className="grid gap-x-10 gap-y-4 border-b border-line py-10 md:grid-cols-[14rem_1fr]">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-blue">
                      {job.period}
                    </p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                      {job.location}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-text">{job.role}</h3>
                    <p className="mt-1 text-muted">{job.org}</p>
                    <ul className="mt-5 flex flex-col gap-3">
                      {job.points.map((pt, j) => (
                        <li key={j} className="flex gap-3 text-lg text-muted">
                          <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <div className="grid gap-x-10 gap-y-4 border-b border-line py-10 md:grid-cols-[14rem_1fr]">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-blue">
                  Activities
                </p>
                <ul className="flex flex-col gap-3">
                  {activities.map((a) => (
                    <li key={a} className="flex gap-3 text-lg text-muted">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                      <span className="leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

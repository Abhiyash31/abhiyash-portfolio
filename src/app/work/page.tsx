import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/content/projects";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects: capstone systems, full-stack builds, C++ games, and the AI work in progress.",
  alternates: { canonical: "/work" },
};

export default function WorkIndexPage() {
  const shipped = projects.filter((p) => p.status === "shipped");
  const building = projects.filter((p) => p.status === "building");

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
            ✦ Selected Work
          </p>
          <h1 className="mt-6 font-display text-[2rem] uppercase leading-[1.04] tracking-tight text-text sm:text-5xl">
            Projects that had to <span className="italic text-accent">work</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Production systems, full-stack builds, and the AI work I am heads-down on
            through 2026. Each card opens a deeper case study.
          </p>
        </Reveal>

        <SectionHeader label="Shipped" right={`${pad(shipped.length)} projects`} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {shipped.map((p, i) => (
            <Card key={p.slug} project={p} index={i + 1} />
          ))}
        </div>

        <SectionHeader
          label="Currently Building"
          right="shipping through 2026"
          className="mt-24"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {building.map((p, i) => (
            <Card key={p.slug} project={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

function SectionHeader({
  label,
  right,
  className = "",
}: {
  label: string;
  right: string;
  className?: string;
}) {
  return (
    <Reveal className={`mt-20 ${className}`}>
      <div className="flex items-end justify-between border-b border-line pb-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          {label}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
          {right}
        </p>
      </div>
    </Reveal>
  );
}

function Card({ project, index }: { project: Project; index: number }) {
  const building = project.status === "building";
  const tags = project.stack.flatMap((g) => g.items).slice(0, 4);

  return (
    <Reveal delay={index * 0.04}>
      <Link
        href={`/work/${project.slug}`}
        className="border-glow group flex h-full flex-col border border-line bg-elevated p-2"
      >
        <div className="relative aspect-video overflow-hidden">
          {project.thumb ? (
            <Image
              src={project.thumb}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 580px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 bg-surface" />
          )}
          <span className="absolute left-3 top-3 border border-line bg-bg/80 px-2 py-1 font-mono text-[11px] text-blue backdrop-blur-sm">
            {pad(index)}
          </span>
          {building && (
            <span className="absolute right-3 top-3 flex items-center gap-1.5 border border-accent/40 bg-bg/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              In progress
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl leading-tight text-text transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <span className="mt-1 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
              ↗
            </span>
          </div>

          <p className="mt-3 line-clamp-2 text-muted">{project.tagline}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="bg-surface px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-line pt-4 font-mono text-[11px] uppercase tracking-wider">
            <span className="text-faint">{project.role}</span>
            {building ? (
              <span className="text-blue">Building</span>
            ) : (
              <span className="text-accent">{project.year}</span>
            )}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

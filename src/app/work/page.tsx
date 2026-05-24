import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/content/projects";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects — capstone systems, full-stack builds, C++ games, and the AI work in progress.",
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
          <p className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            ✦ Selected Work
          </p>
          <h1 className="mt-6 font-display text-[1.8rem] leading-[1.05] tracking-tight text-text sm:text-5xl">
            Projects that had to <span className="italic text-accent">work</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted">
            Production systems, full-stack builds, and the AI work I’m heads-down on
            through 2026. Each card opens a deeper case study.
          </p>
        </Reveal>

        <div className="mt-20 flex items-end justify-between border-b border-line pb-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Shipped
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            {String(shipped.length).padStart(2, "0")} projects
          </p>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {shipped.map((p, i) => (
            <Card key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-24 flex items-end justify-between border-b border-line pb-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Currently Building
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            shipping through 2026
          </p>
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {building.map((p, i) => (
            <Card key={p.slug} project={p} index={i} building />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  project,
  index,
  building = false,
}: {
  project: Project;
  index: number;
  building?: boolean;
}) {
  const cover = project.media?.cover;

  return (
    <Reveal delay={index * 0.04}>
      <Link
        href={`/work/${project.slug}`}
        className="group block overflow-hidden rounded-2xl border border-line transition-colors hover:border-line-strong"
      >
        <div className="relative aspect-[16/10] w-full bg-elevated">
          {cover ? (
            <Image
              src={cover}
              alt={`${project.title} — cover artwork`}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <CardPlaceholder project={project} />
          )}
          <div
            className={`absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur-md ${
              building
                ? "border border-accent/40 bg-bg/40 text-accent"
                : "border border-line bg-bg/40 text-muted"
            }`}
          >
            {building ? "In progress" : project.year}
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl leading-tight tracking-tight text-text transition-colors group-hover:text-accent sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-muted">{project.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack
              .flatMap((g) => g.items)
              .slice(0, 4)
              .map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
                >
                  {t}
                </span>
              ))}
          </div>
          <div className="mt-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-faint transition-colors group-hover:text-accent">
            Read case study
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function CardPlaceholder({ project }: { project: Project }) {
  const initials = project.title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(224,164,92,0.18), transparent 55%), radial-gradient(circle at 70% 70%, rgba(90,110,180,0.18), transparent 55%)",
        }}
      />
      <span className="relative font-display text-6xl tracking-tight text-faint">
        {initials}
      </span>
    </div>
  );
}

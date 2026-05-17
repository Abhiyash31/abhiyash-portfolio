import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject, projectSlugs } from "@/content/projects";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title} — ${project.tagline}`;
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title,
      description: project.summary,
      url: `${site.url}/work/${project.slug}`,
    },
    twitter: { card: "summary_large_image", title, description: project.summary },
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const building = project.status === "building";

  return (
    <article className="px-6 pt-36 pb-28 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Link
            href="/#work"
            className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-text"
          >
            ← All work
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {project.context}
          </p>
          <h1 className="mt-6 font-display text-3xl leading-[1.08] tracking-tight text-text sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted">
            {project.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-12 grid grid-cols-2 gap-y-6 border-y border-line py-8 sm:grid-cols-4">
            {[
              ["Year", project.year],
              ["Role", project.role],
              ["Status", building ? "In progress" : "Shipped"],
              ["Type", project.context.split(" · ")[0]],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                  {k}
                </dt>
                <dd className="mt-2 text-sm text-text">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-16 font-display text-2xl leading-snug text-text sm:text-3xl">
            {project.summary}
          </p>
        </Reveal>

        <Section label="The problem">
          {project.problem.map((p, i) => (
            <p key={i} className="mt-4 text-lg leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </Section>

        <Section label="Approach">
          <ul className="mt-4 flex flex-col gap-4">
            {project.approach.map((a, i) => (
              <li key={i} className="flex gap-4 text-lg leading-relaxed text-muted">
                <span className="mt-3 h-px w-5 shrink-0 bg-accent" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label={building ? "What it proves" : "Impact"}>
          <ul className="mt-4 flex flex-col gap-4">
            {project.impact.map((a, i) => (
              <li key={i} className="flex gap-4 text-lg leading-relaxed text-text">
                <span className="mt-3 h-px w-5 shrink-0 bg-accent" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="Stack">
          <div className="mt-4 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {project.stack.map((g) => (
              <div key={g.group}>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {g.group}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-line px-3 py-1 text-sm text-muted"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {project.links && project.links.length > 0 && (
          <Reveal>
            <div className="mt-14 flex flex-wrap gap-4">
              {project.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  className="rounded-full border border-line-strong px-5 py-2.5 text-sm text-text transition-colors hover:border-accent hover:text-accent"
                >
                  {l.label} ↗
                </Link>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal>
          <Link
            href={`/work/${next.slug}`}
            className="group mt-28 flex items-center justify-between border-t border-line pt-8"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                Next
              </p>
              <p className="mt-2 font-display text-2xl text-text transition-colors group-hover:text-accent sm:text-3xl">
                {next.title}
              </p>
            </div>
            <span className="text-2xl text-faint transition-all group-hover:translate-x-1 group-hover:text-accent">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </article>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="mt-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
        {label}
      </p>
      {children}
    </Reveal>
  );
}

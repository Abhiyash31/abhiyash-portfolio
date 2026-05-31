"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { projects, type Project } from "@/content/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="scroll-mt-24 px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between border-b border-line pb-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              ✦ 01 / Selected work
            </p>
            <h2 className="mt-3 font-display text-2xl uppercase tracking-tight text-text sm:text-3xl">
              Things I have shipped
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent sm:block"
          >
            See all work →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <Card key={p.slug} project={p} index={i + 1} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 border border-line-strong px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-text transition-colors hover:border-accent hover:text-accent"
          >
            See all work
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Card({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const building = project.status === "building";
  const tags = project.stack.flatMap((g) => g.items).slice(0, 4);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE }}
    >
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
            {String(index).padStart(2, "0")}
          </span>
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
              <span className="flex items-center gap-1.5 text-blue">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-blue" />
                Building
              </span>
            ) : (
              <span className="text-accent">{project.year}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

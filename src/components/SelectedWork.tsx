"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { projects, type Project } from "@/content/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

export function SelectedWork() {
  const shipped = projects.filter((p) => p.status === "shipped");
  const building = projects.filter((p) => p.status === "building");

  return (
    <section id="work" className="scroll-mt-24 px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between border-b border-line pb-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            ✦ Selected Work
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            {String(shipped.length).padStart(2, "0")} shipped
          </p>
        </div>

        <ul>
          {shipped.map((p, i) => (
            <Row key={p.slug} project={p} index={i + 1} />
          ))}
        </ul>

        <div className="mt-24 flex items-end justify-between border-b border-line pb-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            ✦ Currently Building
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            shipping through 2026
          </p>
        </div>

        <ul>
          {building.map((p, i) => (
            <Row key={p.slug} project={p} index={i + 1} building />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Row({
  project,
  index,
  building = false,
}: {
  project: Project;
  index: number;
  building?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-line py-9 sm:grid-cols-[3rem_1fr_auto] sm:gap-x-10 sm:py-11"
      >
        <span className="absolute left-0 top-1/2 h-0 w-px -translate-y-1/2 bg-accent transition-all duration-500 group-hover:h-[60%]" />

        <span className="font-mono text-sm text-faint transition-colors duration-300 group-hover:text-accent">
          {String(index).padStart(2, "0")}
        </span>

        <div className="min-w-0 sm:pl-2">
          <h3 className="font-display text-2xl leading-tight tracking-tight text-text transition-transform duration-500 ease-out group-hover:translate-x-2 sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-muted">{project.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.flatMap((g) => g.items).slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="col-start-2 mt-6 flex items-center gap-5 sm:col-start-3 sm:mt-0 sm:flex-col sm:items-end sm:gap-3">
          <span
            className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${
              building
                ? "border border-accent/40 text-accent"
                : "border border-line text-muted"
            }`}
          >
            {building ? "In progress" : project.year}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-faint">
            {project.role}
          </span>
          <span className="text-2xl text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent">
            ↗
          </span>
        </div>
      </Link>
    </motion.li>
  );
}

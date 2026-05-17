import { skillGroups } from "@/content/skills";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";

export function Skills() {
  return (
    <section className="border-t border-line px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            ✦ Stack
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {group.label}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Marquee />
        </div>
      </div>
    </section>
  );
}

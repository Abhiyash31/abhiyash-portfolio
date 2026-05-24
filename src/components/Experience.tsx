import { experience, activities } from "@/content/experience";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-line px-6 py-28 sm:px-10 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            ✦ Experience
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col">
          {experience.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.05}>
              <div className="grid gap-x-10 gap-y-4 border-t border-line py-10 md:grid-cols-[14rem_1fr]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                    {job.period}
                  </p>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-faint">
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
            <div className="grid gap-x-10 gap-y-4 border-t border-line py-10 md:grid-cols-[14rem_1fr]">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
                Activities
              </p>
              <ul className="flex flex-col gap-3">
                {activities.map((a) => (
                  <li key={a} className="flex gap-3 text-muted">
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                    <span className="leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

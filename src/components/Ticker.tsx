import { projects } from "@/content/projects";

export function Ticker() {
  const shipped = projects.filter((p) => p.status === "shipped").length;
  const building = projects.filter((p) => p.status === "building").length;

  const items = [
    `${String(shipped).padStart(2, "0")} shipped · ${String(building).padStart(2, "0")} building`,
    "Open to 2026 new-grad roles",
    "Full-stack · ML · Infrastructure",
    "Next.js · Python · Docker · Postgres",
  ];
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-line bg-surface py-4">
      <div className="animate-ticker gap-16">
        {row.map((text, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-16 whitespace-nowrap pr-16 font-mono text-[11px] uppercase tracking-[0.22em] text-faint"
          >
            {text}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

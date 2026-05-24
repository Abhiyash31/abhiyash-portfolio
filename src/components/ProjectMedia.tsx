"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProjectMedia as ProjectMediaType } from "@/content/projects";
import { Reveal } from "@/components/Reveal";

export function ProjectHero({ media, title }: { media?: ProjectMediaType; title: string }) {
  if (!media?.cover) return null;
  return (
    <Reveal delay={0.05}>
      <div className="mt-12 overflow-hidden rounded-2xl border border-line">
        <div className="relative aspect-[16/9] w-full bg-elevated">
          <Image
            src={media.cover}
            alt={`${title} — cover artwork`}
            fill
            sizes="(max-width: 1024px) 100vw, 960px"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </Reveal>
  );
}

export function ProjectGallery({ media }: { media?: ProjectMediaType }) {
  if (!media?.gallery || media.gallery.length === 0) return null;
  return (
    <Reveal className="mt-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">Visuals</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {media.gallery.map((g) => (
          <div
            key={g.src}
            className="group relative overflow-hidden rounded-xl border border-line"
          >
            <div className="relative aspect-[16/10] w-full bg-elevated">
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export function ProjectVideo({ media }: { media?: ProjectMediaType }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!media?.video) return null;

  return (
    <Reveal className="mt-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">In motion</p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-elevated">
        <video
          ref={ref}
          src={media.video.src}
          poster={media.video.poster}
          muted
          loop
          playsInline
          preload={visible ? "auto" : "metadata"}
          className="block aspect-video w-full bg-bg object-cover"
        />
      </div>
      {media.video.caption && (
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-faint">
          {media.video.caption}
        </p>
      )}
    </Reveal>
  );
}

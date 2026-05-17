import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projectSlugs } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    ...projectSlugs.map((slug) => ({
      url: `${site.url}/work/${slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}

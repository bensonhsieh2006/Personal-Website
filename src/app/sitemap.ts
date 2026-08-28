import type { MetadataRoute } from "next";
import { posts } from "./posts/posts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bensonhsiehwebsite.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/projects",
    "/contact",
    "/posts",
    "/projects/sleepapnea",
    "/projects/ckhsprojectpresentation",
    "/projects/2025ntueeweekgame",
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const postPages: MetadataRoute.Sitemap = Object.keys(posts).map((slug) => ({
    url: `${siteUrl}/posts/${slug}`,
    lastModified: new Date(),
  }));

  return [...pages, ...postPages];
}

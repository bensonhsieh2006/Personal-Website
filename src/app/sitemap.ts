import type { MetadataRoute } from "next";
import { posts } from "./posts/posts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bensonhsiehwebsite.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/projects",
    "/contact",
    "/posts",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const postPages: MetadataRoute.Sitemap = Object.keys(posts).map((slug) => ({
    url: `${siteUrl}/posts/${slug}`,
    lastModified: new Date(),
  }));

  return [...pages, ...postPages];
}

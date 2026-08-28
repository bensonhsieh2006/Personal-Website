import type { ReactNode } from "react";
import Link from "next/link";

export type PostTemplateProps = {
  title: string;
  date: string;
  children: ReactNode;
};

export default function PostTemplate({
  title,
  date,
  children,
}: PostTemplateProps) {
  return (
    <article className="mx-auto max-w-4xl rounded-lg border border-gray-300 p-6 shadow-lg sm:p-8">
      <p className="mb-3 text-sm text-gray-500">{date}</p>
      <h1 className="mb-8 text-3xl font-bold sm:text-4xl">{title}</h1>
      <div className="space-y-5 text-base leading-8 sm:text-lg">{children}</div>
      <Link href="/posts" className="back-to-link">
        Back to posts
      </Link>
    </article>
  );
}

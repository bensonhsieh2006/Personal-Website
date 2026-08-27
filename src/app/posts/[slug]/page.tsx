"use client";

import { use } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Navbar from "../../components/Navbar";
import PostTemplate from "../PostTemplate";
import { posts } from "../posts";
import type { User } from "@auth0/nextjs-auth0/types";

const ROLE_CLAIM = "https://personal-website.example.com/roles";
type UserWithRoles = User & {
  roles?: string[];
  [ROLE_CLAIM]?: string[];
};

type PostSlug = keyof typeof posts;

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export default function PostPage({ params }: PostPageProps) {
  const { user, isLoading } = useUser();
  const { slug } = use(params);
  const post = posts[slug as PostSlug];
  const claims = user as UserWithRoles | null | undefined;
  const roles = claims?.[ROLE_CLAIM] ?? claims?.roles ?? [];
  const effectiveRoles = user && roles.length === 0 ? ["Member"] : roles;
  const canViewPost =
    roles.includes("Owner") ||
    post?.allowedRoles.some((role) => effectiveRoles.includes(role));

  return (
    <>
      <Navbar user={user} />
      <main
        data-page-shell="true"
        className="px-4 py-8 font-(family-name:--font-quicksand) sm:px-6 lg:px-10"
      >
        {isLoading ? (
          <section className="mx-auto max-w-4xl rounded-lg border border-gray-300 p-6 shadow-lg sm:p-8">
            <p>Checking your login status...</p>
          </section>
        ) : !user ? (
          <section className="mx-auto max-w-4xl rounded-lg border border-gray-300 p-6 shadow-lg sm:p-8">
            <h1 className="text-3xl font-bold">Login required</h1>
            <p className="mt-3">Please log in to read this post.</p>
          </section>
        ) : post && canViewPost ? (
          <PostTemplate title={post.title} date={post.date}>
            {post.children}
          </PostTemplate>
        ) : post ? (
          <section className="mx-auto max-w-4xl rounded-lg border border-gray-300 p-6 shadow-lg sm:p-8">
            <h1 className="text-3xl font-bold">Access denied</h1>
            <p className="mt-3">Your role cannot view this post.</p>
          </section>
        ) : (
          <section className="mx-auto max-w-4xl rounded-lg border border-gray-300 p-6 shadow-lg sm:p-8">
            <h1 className="text-3xl font-bold">Post not found</h1>
            <p className="mt-3">There is no post at this address.</p>
          </section>
        )}
      </main>
    </>
  );
}

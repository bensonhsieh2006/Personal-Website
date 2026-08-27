"use client";

import Navbar from "../components/Navbar";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import type { User } from "@auth0/nextjs-auth0/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { posts } from "./posts";

const ROLE_CLAIM = "https://personal-website.example.com/roles";
type UserWithRoles = User & {
  roles?: string[];
  [ROLE_CLAIM]?: string[];
};

export default function Projects() {
  const { user, isLoading } = useUser();
  const claims = user as UserWithRoles | null | undefined;
  const roles = claims?.[ROLE_CLAIM] ?? claims?.roles ?? [];
  const effectiveRoles = user && roles.length === 0 ? ["Member"] : roles;
  const isOwner = roles.includes("Owner");
  const isGirlfriend = roles.includes("Girlfriend");
  const roleLabel = isLoading
    ? "Loading..."
    : !user
      ? "Not logged in"
      : effectiveRoles.join(", ");
  const visiblePosts = Object.entries(posts).filter(([, post]) =>
    isOwner ||
    post.allowedRoles.some((role) => effectiveRoles.includes(role)),
  );

  return (
    <>
      <Navbar user={user} />
      <div
        data-page-shell="true"
        className="px-4 py-8 font-(family-name:--font-quicksand) sm:px-6 lg:px-10"
      >
        <div className="mx-auto max-w-4xl rounded-lg border border-gray-300 p-6 shadow-lg">
          <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Hi</h1>
          {(() => {
            switch (roleLabel) {
              case "Loading...":
                return <p>Checking your login status...</p>;
              case "Not logged in":
                return <p>You need to login to see the posts.</p>;
              case "Owner":
                return <p>You are the owner.</p>;
              case "Girlfriend":
                return (
                  <p className="flex items-center justify-center gap-2 text-pink-500">
                    <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
                    <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
                    <span className="text-white">
                      You are my cute adorable girlfriend {"<"}3333333
                    </span>
                    <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
                    <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
                  </p>
                );
              case "Member":
                return <p>You are a member.</p>;
              default:
                return <p>Your roles: {roleLabel}</p>;
            }
          })()}
        </div>
        <div>
          {user && !isLoading && (
            <div>
              {visiblePosts.map(([slug, post]) => (
                <div key={slug} className="last:mb-0 mx-auto my-5 max-w-4xl rounded-lg border border-gray-300 p-6 shadow-lg">
                  <Link
                    href={`/posts/${slug}`}
                    className="block text-2xl text-white hover:text-blue-500"
                  >
                    {post.title}
                  </Link>
                  {(isOwner ||
                    (isGirlfriend &&
                      post.allowedRoles.length === 1 &&
                      post.allowedRoles[0] === "Girlfriend")) && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {post.allowedRoles.map((role) => (
                        <span
                          key={role}
                          className={
                            role === "Owner"
                              ? "rounded-full bg-red-900 px-2.5 py-0.5 text-xs font-medium text-red-100"
                              : role === "Girlfriend"
                                ? "rounded-full bg-pink-200 px-2.5 py-0.5 text-xs font-medium text-pink-900"
                                : "rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                          }
                        >
                          {role}
                        </span>
                        ))}
                    </div>
                  )}
                </div>
              ))}
              {visiblePosts.length === 0 && (
                <p className="text-white">You do not have access to any posts.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
"use client";

import Navbar from "../components/Navbar";
import { useUser } from "@auth0/nextjs-auth0/client";
import type { User } from "@auth0/nextjs-auth0/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ROLE_CLAIM = "https://personal-website.example.com/roles";
type UserWithRoles = User & {
  roles?: string[];
  [ROLE_CLAIM]?: string[];
};

export default function Projects() {
  const { user, isLoading } = useUser();
  const claims = user as UserWithRoles | null | undefined;
  const roles = claims?.[ROLE_CLAIM] ?? claims?.roles ?? [];
  const roleLabel = isLoading
    ? "Loading..."
    : !user
      ? "Not logged in"
      : roles.join(", ") || "Member";

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
      </div>
    </>
  );
}
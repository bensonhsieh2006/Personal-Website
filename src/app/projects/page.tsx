"use client";

import Navbar from "../components/Navbar";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Projects() {
  const { user } = useUser();
  return (
    <>
      <Navbar user={user} />
      <div
        data-page-shell="true"
        className="px-4 py-8 font-(family-name:--font-quicksand) sm:px-6 lg:px-10"
      >
        <div className="mx-auto max-w-4xl rounded-lg border border-gray-300 p-6 shadow-lg">
          <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Hi</h1>
        </div>
      </div>
    </>
  );
}

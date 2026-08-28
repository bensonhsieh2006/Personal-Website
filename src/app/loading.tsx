"use client";

import Navbar from "./components/Navbar";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Loading() {
  const { user } = useUser();
  return (
    <div>
      <Navbar user={user}></Navbar>
      <p className="p-10 text-center text-2xl">Loading page...</p>
    </div>
  );
}

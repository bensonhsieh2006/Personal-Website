import type { ReactNode } from "react";

export type Post = {
  title: string;
  date: string;
  allowedRoles: string[];
  children: ReactNode;
};

export const posts = {
  "test-post": {
    title: "Test Post",
    date: "2026-08-26 UTC-7",
    allowedRoles: ["Girlfriend"],
    children: (
      <>
        <p>Hello, World!</p>
        <p>Add or edit the children in each post entry to customize it.</p>
      </>
    ),
  },
  "first-post": {
    title: "First Post",
    date: "2026-08-26 UTC-7",
    allowedRoles: ["Girlfriend", "Member"],
    children: (
      <>
        <p>This is the content of my first post.</p>
        <p>You can know more about me in the "About" section.</p>
        <p>You can see my projects in the "Projects" section.</p>
        <p>You can see my contact info in the "Contact" section.</p>
      </>
    ),
  },
  "second-post": {
    title: "Daily Reminder: ",
    date: "2026-08-26 UTC-7",
    allowedRoles: ["Girlfriend"],
    children: (
      <>
        <p>I love you sooooooooooooooo much!!!!!!!!!!!!!!</p>
        <p>Hehehehehe</p>
      </>
    ),
  },
  
} satisfies Record<string, Post>;

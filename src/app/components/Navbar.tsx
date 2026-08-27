'use client';
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useTransitionRouter } from "next-view-transitions";
import type { User } from "@auth0/nextjs-auth0/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";



export default function Navbar({ user }: { user?: User | null }) {
  const router = useTransitionRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const routes = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Contact",
      path: "/contact",
    },
    {
      label: "Posts",
      path: "/posts"
    }
  ];

  return (
    <nav className={styles.nav}>
      <button
        type="button"
        className={styles.menuButton}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <FontAwesomeIcon
          icon={faBars}
          className={isMenuOpen ? styles.menuIconHidden : styles.menuIcon}
          aria-hidden="true"
        />
        <FontAwesomeIcon
          icon={faXmark}
          className={isMenuOpen ? styles.menuIcon : styles.menuIconHidden}
          aria-hidden="true"
        />
      </button>
      <div className={`${styles.links} ${isMenuOpen ? styles.menuOpen : ""}`}>
        {routes.map((route) => (
          <Link 
            key={route.label} 
            href={route.path} 
            className={styles.link}
            onClick={(e) => {
              e.preventDefault();
              router.push(route.path, {
                onTransitionReady: pageAnimation,
              });
              setIsMenuOpen(false);
            }}>
            {route.label}
          </Link>
        ))}
      </div>
      <div className="m-2">
        {user ? (
          <div className="flex max-w-full items-center gap-2 m-2">
            <Profile user={user} />
            <LogoutButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
}

const pageAnimation = () => {
  const pageShell = document.querySelector('[data-page-shell="true"]') as HTMLElement | null;

  if (!pageShell) {
    return;
  }

  pageShell.animate(
    [
      {
        transform: "translateY(25%)",
        opacity: 0.8,
      },
      {
        transform: "translateY(0%)",
        opacity: 1,
      },
    ],
    {
      duration: 500,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "forwards",
    }
  );
};
'use client';
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useTransitionRouter } from "next-view-transitions";

export default function Navbar() {
  const router = useTransitionRouter();
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
  ];
  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
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
            }}>
            {route.label}
          </Link>
        ))}
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
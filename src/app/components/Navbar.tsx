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
  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      }
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};
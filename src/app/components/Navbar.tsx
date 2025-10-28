import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.links}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/about" style={styles.link}>About</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 8rem",
    backgroundColor: "#342a3d",
    color: "#fff",
    borderRadius: "1rem",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "3rem",
    fontSize: "1.5rem",
    fontWeight: "400",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    padding: "0.75rem 1.25rem",
    borderRadius: "0.5rem",
    '&:hover': {
      backgroundColor: "#000000",
      transition: "background-color 0.3s ease"
    }
  },
};
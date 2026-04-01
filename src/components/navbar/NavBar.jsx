import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      {/* LOGO */}
      <h2 className={styles.logo}>
        BM<span>Dev</span>
      </h2>

      {/* LINKS */}
      <div className={`${styles.links} ${open ? styles.active : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <a href="#services">Services</a> 
        <Link to="#">Work</Link>
        <a href="#about">About</a>
      </div>

      {/* BUTTON */}
      <button className={styles.btn}>Contact Us</button>

      {/* HAMBURGER */}
      <div
        className={`${styles.hamburger} ${open ? styles.open : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

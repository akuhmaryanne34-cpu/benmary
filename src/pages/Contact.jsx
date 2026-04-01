import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import { FaHome, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* HOME BUTTON */}
        <Link to="/" className={styles.homeBtn}>
          <FaHome />
        </Link>

        {/* CLOSE BUTTON (optional for now) */}
        <button className={styles.closeBtn}>×</button>

        <h1 className={styles.title}>Get In Touch.</h1>

        <p className={styles.subtitle}>
          I'm always open to new opportunities and collaborations.
        </p>

        {/* FORM */}
        <form className={styles.form}>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message" rows="4"></textarea>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>

        {/* SOCIALS */}
        <p className={styles.or}>OR FIND ME ON</p>

        <div className={styles.icons}>
          <button className={styles.iconBtn}>
            <FaLinkedinIn />
          </button>

          <button className={styles.iconBtn}>
            <FaGithub />
          </button>

          <button className={styles.iconBtn}>
            <FaInstagram />
          </button>

          <button className={styles.iconBtn}>
            <FaXTwitter />
          </button>
        </div>
      </div>
    </div>
  );
}

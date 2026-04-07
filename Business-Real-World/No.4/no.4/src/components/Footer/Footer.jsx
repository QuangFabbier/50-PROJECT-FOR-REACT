import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerWrapper}>
        <p>© 2024 Scholarly Canvas Identity System</p>
      </div>
    </footer>
  );
}

export default Footer;

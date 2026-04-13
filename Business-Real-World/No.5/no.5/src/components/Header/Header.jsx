import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className={styles.headerSection}>
      <div className={styles.topBar}>
        <div className={styles.brandBlock}>
          <div className={styles.brandIcon}>
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
          <p className={styles.brand}>Business Admin</p>
        </div>

        <div className={styles.searchBox}>
          <input type="text" placeholder="Search system configuration..." />
        </div>

        <div className={styles.topBarRight}>
          <button type="button" className={styles.topCircle} aria-label="menu">
            Icon 1
          </button>
          <button
            type="button"
            className={styles.topCircle}
            aria-label="notification"
          >
            Icon 2
          </button>
          <button type="button" className={styles.accountChip}>
            quang0325
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

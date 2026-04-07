import React from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className={styles.headerSection}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerIcon}>
          <FontAwesomeIcon icon={faGraduationCap} />
        </div>
        <h1>Scholarly Admin</h1>
      </div>
    </header>
  );
}

export default Header;

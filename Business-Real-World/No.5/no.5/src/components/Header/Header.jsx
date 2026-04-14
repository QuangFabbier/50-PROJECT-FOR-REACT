import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isUserMode = location.pathname.startsWith("/user");

  return (
    <header className={styles.headerSection}>
      <div className={styles.topBar}>
        <div className={styles.brandBlock}>
          <div className={styles.brandIcon}>
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
          <p className={styles.brand}>
            {isUserMode ? "Shopping Admin" : "Shopping"}
          </p>
        </div>

        <div className={styles.searchBox}>
          <input type="text" placeholder="Search system configuration..." />
        </div>

        <div className={styles.topBarRight}>
          <div className={styles.topBarIcon}>
            <FontAwesomeIcon icon={faBell} />
          </div>

          <button type="button" className={styles.accountChip}>
            Kwang
          </button>
          <button
            type="button"
            className={styles.accountChip}
            onClick={() => navigate(isUserMode ? "/home" : "/user/home")}
          >
            {isUserMode ? "Back to Admin" : "Back to User"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

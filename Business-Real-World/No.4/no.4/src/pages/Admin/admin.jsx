import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCells,
  faFile,
  faGear,
  faSliders,
  faBookOpen,
  faArrowLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleQuestion,
  faCircleUser,
  faBell,
} from "@fortawesome/free-regular-svg-icons";

function Admin() {
  const { logout, user } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div className={styles.adminPage}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <div className={styles.brandBlock}>
            <div className={styles.brandTitle}>
              <div className={styles.brandIcon}>
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <h2 className={styles.logo}>Scholarly Admin</h2>
            </div>
            <div className={styles.brandDesc}>
              <p className={styles.subText}>Management Suite</p>
            </div>
          </div>

          <nav className={styles.navBar}>
            <div className={styles.navWrapper}>
              <FontAwesomeIcon icon={faTableCells} className={styles.navIcon} />
              <NavLink
                to="/admin/overview"
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ""}`
                }
              >
                Overview
              </NavLink>
            </div>

            <div className={styles.navWrapper}>
              <FontAwesomeIcon icon={faFile} />
              <button className={styles.navItem}>Pages</button>
            </div>

            <div className={styles.navWrapper}>
              <FontAwesomeIcon icon={faSliders} />
              <NavLink
                to="/admin/configuration"
                className={({ isActive }) =>
                  `${styles.navItem} ${isActive ? styles.active : ""}`
                }
              >
                Configuration
              </NavLink>
            </div>

            <div className={styles.navWrapper}>
              <FontAwesomeIcon icon={faGear} />
              <button className={styles.navItem}>Settings</button>
            </div>
          </nav>
        </div>

        <div className={styles.sidebarBottom}>
          <div className={styles.sidebarBtn}>
            <button className={styles.newBtn}>+ New Brief</button>
          </div>

          <div className={styles.sidebarSetting}>
            <div className={styles.navWrapper}>
              <FontAwesomeIcon icon={faCircleQuestion} />
              <button className={styles.footerItem}>Support</button>
            </div>
            <div className={styles.navWrapper}>
              <FontAwesomeIcon icon={faCircleUser} />
              <button className={styles.footerItem}>Account</button>
            </div>
            <div className={styles.navWrapper}>
              <FontAwesomeIcon icon={faArrowLeft} />
              <button
                type="button"
                className={styles.logoutBtn}
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div className={styles.mainPanel}>
        <div className={styles.topBar}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search system configuration..." />
          </div>

          <div className={styles.topBarRight}>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon icon={faBell} />
            <div className={styles.blockAccount}>
              <img
                className={styles.accountImg}
                src={user.picture}
                alt={user.name}
              />
              <div className={styles.accountItem}>
                <button
                  type="button"
                  onClick={handleLogout}
                  className={styles.test}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;

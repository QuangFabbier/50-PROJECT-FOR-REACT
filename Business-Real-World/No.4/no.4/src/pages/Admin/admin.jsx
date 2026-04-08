import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Admin() {
  const { logout } = useAuth0();

  const [settings, setSettings] = useState({
    name: "",
    tagline: "",
    year: "",
    venue: "",
    description: "",
    regulatoryFramework: "",
    auditInterval: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("festivalSettings", JSON.stringify(settings));
    alert("Saved successfully");
  };

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
              <button className={styles.navItem}>Overview</button>
            </div>
            <div className={styles.navWrapper}>
              <FontAwesomeIcon icon={faFile} />
              <button className={styles.navItem}>Pages</button>
            </div>
            <div className={styles.navWrapper}>
              <FontAwesomeIcon icon={faSliders} />
              <button className={`${styles.navItem} ${styles.active}`}>
                Configuration
              </button>
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

      {/* SearchBox */}
      <div className={styles.mainPanel}>
        <div className={styles.topBar}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search system configuration..." />
          </div>

          <div className={styles.topBarRight}>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon icon={faBell} />
            <div className={styles.topCircle}>s</div>
          </div>
        </div>
        {/* Content */}
        <div className={styles.content}>
          <div className={styles.pageHeader}>
            <p className={styles.breadcrumb}>{`Admin  >  Configuration`}</p>
            <div className={styles.contentTitle}>
              <h1 className={styles.title}>Configuration</h1>
              <p className={styles.description}>
                Manage the global pedagogical parameters and administrative
                rulesets for the Scholarly Canvas ecosystem.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Box 1 */}
              <div className={styles.contentBox}>
                <div className={styles.contentHeader}>
                  <h3>Core Educational Parameters</h3>
                </div>

                <div className={styles.grid}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Institution Name</label>
                    <input
                      className={styles.formInput}
                      name="name"
                      value={settings.name}
                      onChange={handleChange}
                      placeholder="Scholarly Global University"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Academic Year</label>
                    <input
                      className={styles.formInput}
                      type="input"
                      name="year"
                      value={settings.year}
                      placeholder="2024-2025"
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Primary Domain</label>
                    <input
                      className={styles.formInput}
                      name="tagline"
                      value={settings.tagline}
                      onChange={handleChange}
                      placeholder="canvas.scholarly-global.edu"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Administrative Contact
                    </label>
                    <input
                      className={styles.formInput}
                      name="venue"
                      value={settings.venue}
                      onChange={handleChange}
                      placeholder="admin@scholarly-global.edu"
                    />
                  </div>
                </div>

                {/* Box 2 */}
                <div className={styles.contentBox}>
                  <div className={styles.contentHeader}>
                    <h3>Compliance & Regional Standards</h3>
                  </div>
                  <div className={styles.grid}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Regulatory Framework
                      </label>
                      <select
                        className={styles.formInput}
                        name="regulatoryFramework"
                        value={settings.regulatoryFramework || ""}
                        onChange={handleChange}
                        placeholder="Higher Education Standard B2"
                      >
                        <option value="">Select interval</option>
                        <option value="quarterly">
                          Higher Education Standard A1
                        </option>
                        <option value="semiannual">
                          Higher Education Standard A2
                        </option>
                        <option value="annual">
                          Higher Education Standard B1
                        </option>
                        <option value="quarterly">
                          Higher Education Standard B2
                        </option>
                        <option value="semiannual">
                          Higher Education Standard C1
                        </option>
                        <option value="annual">
                          Higher Education Standard C2
                        </option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>Audit Interval</label>
                      <select
                        className={styles.formInput}
                        name="auditInterval"
                        value={settings.auditInterval || ""}
                        onChange={handleChange}
                      >
                        <option value="">Select interval</option>
                        <option value="quarterly">Quarterly Review</option>
                        <option value="semiannual">Semiannual Review</option>
                        <option value="annual">Annual Review</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.contentDesc}>
                <div className={`${styles.formGroup} ${styles.full}`}>
                  <label className={styles.formLabel}>
                    Configuration Overview & Notes
                  </label>
                  <textarea
                    className={styles.formTextarea}
                    name="description"
                    value={settings.description}
                    onChange={handleChange}
                    placeholder="Enter detailed configuration notes here for archival purposes..."
                  />
                </div>
              </div>

              <div className={styles.actions}>
                <button type="button" className={styles.discardBtn}>
                  Discard
                </button>
                <div className={styles.save}>
                  <FontAwesomeIcon icon={faFloppyDisk} />
                  <button type="submit" className={styles.saveBtn}>
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;

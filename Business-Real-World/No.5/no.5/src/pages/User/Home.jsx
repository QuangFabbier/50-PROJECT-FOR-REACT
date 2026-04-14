import React from "react";
import styles from "./User.module.css";

function UserHome() {
  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>User &gt; Home</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>User Home</h1>
          <p className={styles.description}>
            Product browsing area for users. Product list and interactions will be
            rendered here when data is connected.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.panelHeader}>
          <h3>User Home Panel</h3>
        </div>

        <div className={styles.panelContent}>
          <div className={styles.contentPlaceholder}>
            User product list block will be rendered here when data is connected.
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserHome;

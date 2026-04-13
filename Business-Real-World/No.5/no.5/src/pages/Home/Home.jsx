import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Home</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Home</h1>
          <p className={styles.description}>
            Product management overview panel. Data section is intentionally empty
            for now.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.panelHeader}>
          <h3>Home Overview</h3>
        </div>

        <div className={styles.panelContent}>
          <div className={styles.contentPlaceholder}>
            Content block will be rendered here when data is connected.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

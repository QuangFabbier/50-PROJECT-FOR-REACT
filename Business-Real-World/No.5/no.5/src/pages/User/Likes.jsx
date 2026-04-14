import React from "react";
import styles from "./User.module.css";

function Likes() {
  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>User &gt; Likes</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Likes</h1>
          <p className={styles.description}>
            List of products liked by the user. This section will be connected to
            real like data in the next step.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.panelHeader}>
          <h3>Liked Products</h3>
        </div>

        <div className={styles.panelContent}>
          <div className={styles.contentPlaceholder}>
            Liked products block will be rendered here when data is connected.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Likes;

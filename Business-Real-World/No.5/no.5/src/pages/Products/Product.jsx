import React from "react";
import styles from "../Home/Home.module.css";

function Product() {
  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Home &gt; Detail</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Detail</h1>
          <p className={styles.description}>
            Product detail panel skeleton. Data fields will be added later.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.panelHeader}>
          <h3>Detail Panel</h3>
        </div>

        <div className={styles.panelContent}>
          <div className={styles.contentPlaceholder}>
            Detail content block will be rendered here when data is connected.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;

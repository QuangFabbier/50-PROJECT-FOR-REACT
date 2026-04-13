import React from "react";
import styles from "../Home/Home.module.css";

function Add() {
  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Home &gt; Add</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Add</h1>
          <p className={styles.description}>
            Add product panel skeleton. Form controls will be implemented later.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.panelHeader}>
          <h3>Add Panel</h3>
        </div>

        <div className={styles.panelContent}>
          <div className={styles.contentPlaceholder}>
            Add form block will be rendered here when data is connected.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Add;

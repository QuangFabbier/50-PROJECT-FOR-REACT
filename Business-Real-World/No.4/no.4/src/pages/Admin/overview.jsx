import { useNavigate } from "react-router-dom";
import { useConfig } from "../../context/ConfigContext";
import { useState } from "react";
import styles from "./admin.module.css";

function Overview() {
  const { configuration } = useConfig();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Admin &gt; Overview</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Overview</h1>
          <p className={styles.description}>
            Review the current global configuration for the Scholarly Canvas
            ecosystem.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.form}>
          <div className={styles.contentBox}>
            <div className={styles.contentHeader}>
              <h3>Current Configuration</h3>
            </div>

            <div className={styles.grid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Institution Name</label>
                <div className={styles.formInput}>
                  {configuration.institutionName}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Academic Year</label>
                <div className={styles.formInput}>
                  {configuration.academicYear}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Primary Domain</label>
                <div className={styles.formInput}>
                  {configuration.primaryDomain}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Administrative Contact
                </label>
                <div className={styles.formInput}>
                  {configuration.administrativeContact}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Regulatory Framework</label>
                <div className={styles.formInput}>
                  {configuration.regulatoryFramework}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Audit Interval</label>
                <div className={styles.formInput}>
                  {configuration.auditInterval}
                </div>
              </div>
            </div>

            <div className={styles.contentDesc}>
              <div className={`${styles.formGroup} ${styles.full}`}>
                <label className={styles.formLabel}>
                  Configuration Overview & Notes
                </label>
                <div className={styles.formTextarea}>
                  {configuration.configurationOverviewNotes}
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.saveBtn}
                onClick={() => navigate("/admin/configuration")}
              >
                Change Configuration
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;

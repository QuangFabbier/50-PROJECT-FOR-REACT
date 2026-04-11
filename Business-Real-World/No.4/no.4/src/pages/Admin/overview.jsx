import { useNavigate } from "react-router-dom";
import { useConfig } from "../../context/ConfigContext";
import { useState } from "react";
import styles from "./admin.module.css";

function Overview() {
  const { configurations } = useConfig();
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Admin &gt; Overview</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Overview</h1>
          <p className={styles.description}>
            Click an institution name to view full configuration details.
          </p>
        </div>
      </div>
      {/* Render danh sách */}
      <div className={styles.card}>
        {configurations.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id} className={styles.accordionItem}>
              <button
                type="button"
                className={styles.accordionHeader}
                onClick={() => handleToggle(item.id)}
              >
                <span>{item.institutionName}</span>
                <span>{isOpen ? "-" : "+"}</span>
              </button>
              {/* Item  */}
              <div
                className={`${styles.accordionPanel} ${
                  isOpen ? styles.open : styles.closed
                }`}
              >
                <div className={styles.accordionContent}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Institution Name</label>
                    <div className={styles.formInput}>{item.institutionName}</div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Academic Year</label>
                    <div className={styles.formInput}>{item.academicYear}</div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Primary Domain</label>
                    <div className={styles.formInput}>{item.primaryDomain}</div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Administrative Contact
                    </label>
                    <div className={styles.formInput}>
                      {item.administrativeContact}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Regulatory Framework
                    </label>
                    <div className={styles.formInput}>
                      {item.regulatoryFramework}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Audit Interval</label>
                    <div className={styles.formInput}>{item.auditInterval}</div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Configuration Overview & Notes
                    </label>
                    <div className={styles.formTextarea}>
                      {item.configurationOverviewNotes}
                    </div>
                  </div>

                  {/* ChangeBtn */}
                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={styles.saveBtn}
                      onClick={() => navigate(`/admin/configuration/${item.id}`)}
                    >
                      Change Configuration
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Overview;

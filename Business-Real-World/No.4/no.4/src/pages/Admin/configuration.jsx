import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useConfig } from "../../context/ConfigContext";
import styles from "./admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

function Configuration() {
  const { configuration, setConfiguration } = useConfig();
  const [formData, setFormData] = useState(configuration);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfiguration(formData);
    navigate("/admin/overview");
  };

  const handleDiscard = () => {
    setFormData(configuration);
  };

  return (
    <>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Admin &gt; Configuration</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Configuration</h1>
          <p className={styles.description}>
            Manage the global pedagogical parameters and administrative rulesets
            for the Scholarly Canvas ecosystem.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.contentBox}>
            <div className={styles.contentHeader}>
              <h3>Core Educational Parameters</h3>
            </div>

            <div className={styles.grid}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Institution Name</label>
                <input
                  className={styles.formInput}
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Academic Year</label>
                <input
                  className={styles.formInput}
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Primary Domain</label>
                <input
                  className={styles.formInput}
                  name="primaryDomain"
                  value={formData.primaryDomain}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Administrative Contact
                </label>
                <input
                  className={styles.formInput}
                  name="administrativeContact"
                  value={formData.administrativeContact}
                  onChange={handleChange}
                />
              </div>
            </div>

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
                    value={formData.regulatoryFramework}
                    onChange={handleChange}
                  >
                    <option value="">Select interval</option>
                    <option value="Higher Education Standard A1">
                      Higher Education Standard A1
                    </option>
                    <option value="Higher Education Standard A2">
                      Higher Education Standard A2
                    </option>
                    <option value="Higher Education Standard B1">
                      Higher Education Standard B1
                    </option>
                    <option value="Higher Education Standard B2">
                      Higher Education Standard B2
                    </option>
                    <option value="Higher Education Standard C1">
                      Higher Education Standard C1
                    </option>
                    <option value="Higher Education Standard C2">
                      Higher Education Standard C2
                    </option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Audit Interval</label>
                  <select
                    className={styles.formInput}
                    name="auditInterval"
                    value={formData.auditInterval}
                    onChange={handleChange}
                  >
                    <option value="">Select interval</option>
                    <option value="Quarterly Review">Quarterly Review</option>
                    <option value="Semiannual Review">Semiannual Review</option>
                    <option value="Annual Review">Annual Review</option>
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
                name="configurationOverviewNotes"
                value={formData.configurationOverviewNotes}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.discardBtn}
              onClick={handleDiscard}
            >
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
    </>
  );
}

export default Configuration;

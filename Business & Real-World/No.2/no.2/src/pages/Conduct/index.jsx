import festivalData from "../../data/festival";
import styles from "./Conduct.module.css";

function Conduct() {
  const { conductRules } = festivalData;
  return (
    <div className={styles.conductPage}>
      <section className={styles.conductSection}>
        <h1 className={styles.conductTitle}>Conduct</h1>
      </section>

      <section className={styles.conductContent}>
        <h2 className={styles.sectionTitle}>Rules</h2>
        <div className={styles.conductList}>
          {conductRules.map((rule) => {
            return (
              <div key={rule} className={styles.conductItem}>
                <p className={styles.conductName}>{rule}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default Conduct;

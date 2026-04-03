import festivalData from "../../data/festival";
import styles from "./Food.module.css";

function Food() {
  const { snacks, drinks, mealOptions } = festivalData.foodInfo;
  return (
    <div className={styles.foodPage}>
      <section className={styles.foodSection}>
        <h1 className={styles.foodTitle}>Food & Drinks</h1>
      </section>

      <section className={styles.foodContent}>
        <h2 className={styles.sectionTitle}>Snacks</h2>
        <div className={styles.foodList}>
          {snacks.map((snack) => {
            return (
              <div key={snack} className={styles.foodCard}>
                <h3 className={styles.foodName}>{snack}</h3>
              </div>
            );
          })}
        </div>

        <h2 className={styles.sectionTitle}>Meals</h2>
        <div className={styles.foodList}>
          {mealOptions.map((mealOption) => {
            return (
              <div key={mealOption} className={styles.foodCard}>
                <h3 className={styles.foodName}>{mealOption}</h3>
              </div>
            );
          })}
        </div>

        <h2 className={styles.sectionTitle}>Drinks</h2>
        <div className={styles.foodList}>
          {drinks.map((drink) => {
            return (
              <div key={drink} className={styles.foodCard}>
                <h3 className={styles.foodName}>{drink}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default Food;

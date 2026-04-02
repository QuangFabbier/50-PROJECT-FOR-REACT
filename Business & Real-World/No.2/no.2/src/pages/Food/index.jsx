import festivalData from "../../data/festival";
import styles from "./Food.module.css";

function Food() {
  const { snacks, drinks, mealOptions } = festivalData.foodInfo;
  return (
    <div className={styles.locationPage}>
      <section className={styles.locationSection}>
        <h1 className={styles.locationTitle}>Food</h1>
      </section>

      <section className={styles.hotelSection}>
        <h2 className={styles.sectionTitle}>Nearby Foods</h2>

        <div className={styles.hotelList}>
          {snacks.map((snack) => {
            return (
              <div className={styles.hotelCard}>
                <img
                  className={styles.hotelImage}
                  src={hotel.image}
                  alt={hotel.name}
                />
                <h3 className={styles.hotelName}>{hotel.name}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default Food;

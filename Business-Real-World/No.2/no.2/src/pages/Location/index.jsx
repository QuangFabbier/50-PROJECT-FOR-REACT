import festivalData from "../../data/festival";
import styles from "./Location.module.css";

function Location() {
  const { venueName, address, city, image, nearbyHotels } =
    festivalData.locationInfo;

  return (
    <div className={styles.locationPage}>
      <section className={styles.locationSection}>
        <h1 className={styles.locationTitle}>Location</h1>

        <img className={styles.locationImage} src={image} alt={venueName} />

        <h2 className={styles.locationName}>{venueName}</h2>
        <p className={styles.locationAddress}>{address}</p>
        <p className={styles.locationCity}>{city}</p>
      </section>

      <section className={styles.hotelSection}>
        <h2 className={styles.sectionTitle}>Nearby Hotels</h2>

        <div className={styles.hotelList}>
          {nearbyHotels.map((hotel) => {
            return (
              <div key={hotel.id} className={styles.hotelCard}>
                <img
                  className={styles.hotelImage}
                  src={hotel.image}
                  alt={hotel.name}
                />
                <div className={styles.hotelInfo}>
                  <h3 className={styles.hotelName}>{hotel.name}</h3>
                  <p className={styles.hotelPrice}>{hotel.priceRange}</p>
                  <p className={styles.hotelDescription}>{hotel.description}</p>
                  <p className={styles.hotelDistance}>{hotel.distance}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Location;

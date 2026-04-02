import festivalData from "../../data/festival";
import styles from "./Home.module.css";

function Home() {
  const { eventInfo, heroImages, featuredMovies } = festivalData;
  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{eventInfo.name}</h1>
        <img
          className={styles.heroImage}
          src={heroImages[0]}
          alt={eventInfo.name}
        />
        <p className={styles.heroTagLine}>{eventInfo.tagline}</p>
        <p className={styles.heroMeta}>{eventInfo.date}</p>
        <p className={styles.heroMeta}>{eventInfo.venue}</p>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>About our festival</h2>
        <p className={styles.aboutText}>{eventInfo.description}</p>
      </section>

      <section className={styles.featureList}>
        <h2>Upcoming This Year</h2>
        <div className={styles.movieList}>
          {featuredMovies.map((movie) => {
            return (
              <div key={movie.id}>
                <img src={movie.image} alt={movie.title} />
                <h3 className={styles.featureTitle}>{movie.title}</h3>
                <p className={styles.featureDesc}>{movie.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default Home;

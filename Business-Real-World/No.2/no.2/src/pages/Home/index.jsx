import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import festivalData from "../../data/festival";
import styles from "./Home.module.css";

function Home() {
  const { eventInfo, heroImages, featuredMovies } = festivalData;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        //callback, state mới phụ thuộc state cũ
        return (prevIndex + 1) % heroImages.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className={styles.homePage}>
      <section className={styles.heroSection}>
        <img
          className={styles.heroImage}
          src={heroImages[currentImageIndex]}
          alt={eventInfo.name}
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>{eventInfo.name}</h1>
          <p className={styles.heroTagLine}>{eventInfo.tagline}</p>
          <p className={styles.heroMeta}>{eventInfo.date}</p>
          <p className={styles.heroMeta}>{eventInfo.venue}</p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.aboutTitle}>About our festival</h2>
        <p className={styles.aboutText}>{eventInfo.description}</p>
      </section>

      <section className={styles.featureList}>
        <h2>Upcoming This Year</h2>
        <div className={styles.movieList}>
          {featuredMovies.map((movie) => {
            return (
              <div key={movie.id} className={styles.movieCard}>
                <img
                  className={styles.movieImage}
                  src={movie.image}
                  alt={movie.title}
                />
                <h3 className={styles.movieTitle}>{movie.title}</h3>
                <p className={styles.movieDesc}>{movie.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.ticketSection}>
        <div className={styles.buySection}>
          <button className={styles.ticketBtn}>Buy Ticket Now !</button>
        </div>
      </section>
    </div>
  );
}
export default Home;

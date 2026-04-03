import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import festivalData from "../../data/festival";

function Footer() {
  const { eventInfo } = festivalData;

  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <h2 className={styles.footerTitle}>{eventInfo.name}</h2>
          <p className={styles.footerText}>{eventInfo.tagline}</p>
          <p className={styles.footerMeta}>Date: {eventInfo.date}</p>
          <p className={styles.footerMeta}>Venue: {eventInfo.venue}</p>
        </div>

        <div className={styles.footerLinks}>
          <h3 className={styles.footerHeading}>Explore</h3>
          <Link className={styles.footerLink} to="/">
            Home
          </Link>
          <Link className={styles.footerLink} to="/location">
            Location
          </Link>
          <Link className={styles.footerLink} to="/food">
            Food
          </Link>
          <Link className={styles.footerLink} to="/conduct">
            Conduct
          </Link>
        </div>

        <div className={styles.footerNote}>
          <h3 className={styles.footerHeading}>Festival Note</h3>
          <p className={styles.footerText}>
            Enjoy open-air screenings, creative talks, and a warm community
            atmosphere all weekend long.
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.footerCopyright}>
          2026 Moonlight Film Festival. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo1 from "../../img/logo1.jpg";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img className={styles.navbarImage} src={logo1} alt="Festival logo" />
      </Link>
      <div className={styles.navLinks}>
        <div className={styles.navbarPath}>
          <Link className={styles.navbarText} to="/">
            Home
          </Link>
          <Link className={styles.navbarText} to="/location">
            Location
          </Link>
          <Link className={styles.navbarText} to="/food">
            Food
          </Link>
          <Link className={styles.navbarText} to="/conduct">
            Conduct
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

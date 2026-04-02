import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home Page</Link> \ <Link to="/location">Location</Link> \{" "}
      <Link to="/food">Food</Link> \ <Link to="/conduct">Conduct</Link>
    </nav>
  );
}

export default Navbar;

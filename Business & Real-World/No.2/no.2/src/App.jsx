import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Food from "./pages/Food";
import Conduct from "./pages/Conduct";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/food" element={<Food />} />
          <Route path="/conduct" element={<Conduct />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

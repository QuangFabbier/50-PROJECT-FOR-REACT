import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import Admin from "./pages/Admin/admin";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Quang from "./pages/Quang/quang";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function AppLayout() {
  const { pathname } = useLocation();
  const showHeader = pathname === "/login";

  return (
    <div className="appShell">
      {showHeader ? <Header /> : null}
      <main className="appContent">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/quang" element={<Quang />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;

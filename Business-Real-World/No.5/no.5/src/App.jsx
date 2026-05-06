import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Products/Detail";
import Add from "./pages/Products/Add";
import Edit from "./pages/Products/Edit";
import UserHome from "./pages/User/Home";
import Likes from "./pages/User/Likes";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function AppLayout() {
  const location = useLocation();
  const isUserMode = location.pathname.startsWith("/user");

  return (
    <div className="appShell">
      <Header />
      <Sidebar mode={isUserMode ? "user" : "admin"} />

      <main className="appContent">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />

          <Route path="/user" element={<Navigate to="/user/home" replace />} />
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/likes" element={<Likes />} />

          <Route path="*" element={<Navigate to="/home" replace />} />
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

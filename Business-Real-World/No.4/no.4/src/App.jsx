import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/login";
import Admin from "./pages/Admin/admin";
import Overview from "./pages/Admin/overview";
import Configuration from "./pages/Admin/configuration";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ConfigProvider } from "./context/ConfigContext";

function AppLayout() {
  const { pathname } = useLocation();
  const showHeader = pathname === "/login";
  // const showFooter = pathname === "/login";

  return (
    <div className="appShell">
      {showHeader ? <Header /> : null}

      <main className="appContent">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route path="configuration/:id" element={<Configuration />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>
      <Footer />
      {/* {showFooter ? <Footer /> : null} */}
    </div>
  );
}

function App() {
  return (
    <ConfigProvider>
      <Router>
        <AppLayout />
      </Router>
    </ConfigProvider>
  );
}

export default App;

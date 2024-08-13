import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PoliciesPage from "./pages/PoliciesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import AdminPage from "./pages/admin/AdminPage";
import EditProjectPage from "./pages/admin/EditProjectPage";
import AddProjectPage from "./pages/admin/AddProjectPage";
import PortfolioPage from "./pages/PortfolioPage";
import NotFoundPage from "./pages/NotFoundPage";

function AppWrapper() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="content-wrap">
          <App />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  const location = useLocation();
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    setShowPortfolio(location.pathname === "/");
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={showPortfolio ? <PortfolioPage /> : null} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/add" element={<AddProjectPage />} />
        <Route path="/admin/edit/:id" element={<EditProjectPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppWrapper;

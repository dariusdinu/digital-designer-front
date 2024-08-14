import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import AboutPage from "./pages/About/AboutPage";
import PoliciesPage from "./pages/Policies/PoliciesPage";
import ContactPage from "./pages/Contact/ContactPage";
import ProjectPage from "./pages/Project/ProjectPage";
import AddProjectPage from "./pages/admin/AddProjectPage";
import AdminPage from "./pages/admin/AdminPage";
import EditProjectPage from "./pages/admin/EditProjectPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

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
        {/* GENERAL */}
        <Route path="/" element={showPortfolio ? <PortfolioPage /> : null} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/add" element={<AddProjectPage />} />
        <Route path="/admin/edit/:id" element={<EditProjectPage />} />

        {/* NOT FOUND */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppWrapper;

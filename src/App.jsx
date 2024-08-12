import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AddProjectPage from "./admin/AddProjectPage";
import AdminPage from "./admin/AdminPage";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio"; // NavBar is now integrated within Portfolio
import Footer from "./components/Footer";
import PoliciesPage from "./pages/PoliciesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import EditProjectPage from "./admin/EditProjectPage";

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
        <Route path="/" element={showPortfolio ? <Portfolio /> : null} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/add" element={<AddProjectPage />} />
        <Route path="/admin/edit/:id" element={<EditProjectPage />} />
      </Routes>
    </>
  );
}

export default AppWrapper;

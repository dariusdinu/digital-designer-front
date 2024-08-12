import { Link } from "react-router-dom";
import "../styling/Header.css";
import { useEffect, useState } from "react";

function Header() {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrunk(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${isShrunk ? "small" : ""}`}>
      <div className="header-container">
        <Link to="/about" className="header-link">
          About
        </Link>
        <div className="designer-name">
          <Link to="/" className="main-link">
            Mila Hayes
          </Link>
        </div>
        <Link to="/contact" className="header-link">
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;

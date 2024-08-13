import { Link } from "react-router-dom";
import "./Header.css";
import { useCallback, useEffect, useState } from "react";

function Header() {
  const [isShrunk, setShrunk] = useState(false);

  const handleScroll = useCallback(() => {
    setShrunk((prevIsShrunk) => {
      const currentScrollY = window.scrollY;
      if (!prevIsShrunk && currentScrollY > 50) {
        return true;
      } else if (prevIsShrunk && currentScrollY < 10) {
        return false;
      }
      return prevIsShrunk;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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

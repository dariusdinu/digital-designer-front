import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
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

import { useState } from "react";
import "../styling/NavBar.css";

function NavBar({ onSelectCategory }) {
  const [isOpen, setIsOpen] = useState(false); // State to control visibility of NavBar items

  const categories = [
    { code: "logo", name: "Logo Design" },
    { code: "social", name: "Social Media" },
    { code: "branding", name: "Branding" },
    { code: "advertising", name: "Digital Advertising" },
    { code: "newsletter", name: "Newsletters" },
  ];

  return (
    <div className="nav-bar">
      <span onClick={() => setIsOpen(!isOpen)} className="nav-toggle">
        {isOpen ? "Close" : "Show Categories"}
      </span>
      <div className={`nav-bar--container ${isOpen ? "open" : ""}`}>
        <div className="nav-items">
          {categories.map((category, index) => (
            <a
              key={index}
              className="nav-item"
              onClick={() => {
                onSelectCategory(category.code);
                setIsOpen(false);
              }}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

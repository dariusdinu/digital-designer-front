import "../styling/NavBar.css";

function NavBar({ onSelectCategory }) {
  const categories = [
    { code: "logo", name: "Logo Design" },
    { code: "social", name: "Social Media" },
    { code: "branding", name: "Branding" },
    { code: "advertising", name: "Digital Advertising" },
    { code: "newsletter", name: "Newsletters" },
  ];

  return (
    <div className="nav-bar">
      <div className="nav-bar--container">
        <div className="nav-items">
          {categories.map((category, index) => (
            <a
              key={index}
              className="nav-item"
              onClick={() => onSelectCategory(category.code)}
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

import { useState } from "react";
import "../styling/Select.css";

function Select({ options, value, name, onChange, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || "");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div className="custom-select-container">
      <label>{label}</label>
      <div className="dropdown">
        <div className="dropdown-toggle" onClick={toggleDropdown}>
          {options.find((option) => option.code === selectedOption)?.name ||
            "Select an option"}
          <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option) => (
              <li
                key={option.code}
                className="dropdown-option"
                onClick={() => handleOptionClick(option.code)}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Select;

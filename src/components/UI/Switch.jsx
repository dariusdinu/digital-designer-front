import "./Switch.css";

function Switch({ handleInputChange, text, checked }) {
  return (
    <div className="switch-container">
      <span>{text}</span>
      <label className="switch">
        <input
          type="checkbox"
          name="isShown"
          checked={checked || false}
          onChange={handleInputChange}
          className="toggle"
        />
        <div></div>
      </label>
    </div>
  );
}

export default Switch;

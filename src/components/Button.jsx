import "../styling/Buttons.css";

function Button({ type, isDelete = false, text, handler }) {
  return (
    <button
      type={type}
      className={isDelete ? "delete-button" : "button"}
      onClick={handler}
    >
      {text}
    </button>
  );
}

export default Button;

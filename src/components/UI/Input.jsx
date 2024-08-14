import "./Input.css";

function Input({
  label,
  type = "text",
  id,
  name,
  value,
  onChange,
  placeholder,
  hasError,
  errorMessage,
}) {
  return (
    <div className={`input ${hasError ? "error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={hasError ? "error" : ""}
      />
      {hasError && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Input;

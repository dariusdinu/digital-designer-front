import "./TextArea.css";

function TextArea({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  hasError,
  errorMessage,
}) {
  return (
    <div className={`input ${hasError ? "input-error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <textarea
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

export default TextArea;

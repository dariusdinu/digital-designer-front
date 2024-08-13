import "../styling/Input.css";

function Input({
  label,
  type = "text",
  id,
  name,
  isRequired,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        required={isRequired}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;

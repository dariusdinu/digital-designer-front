import "./TextArea.css";

function TextArea({
  label,
  id,
  htmlFor,
  value,
  onChange,
  placeholder,
  name,
  rows,
}) {
  return (
    <div className="text-area">
      <label htmlFor={htmlFor}>{label}</label>
      <textarea
        id={id}
        rows={rows}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default TextArea;

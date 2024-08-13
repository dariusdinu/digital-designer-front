import { useRef, useState } from "react";
import "../styling/ImagePicker.css";

function ImagePicker({ image, onImageChange }) {
  const inputRef = useRef();
  const [preview, setPreview] = useState(image || "/test-image.jpg");

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onImageChange(file);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div
      className="image-picker"
      onClick={handleClick}
      style={{ backgroundImage: `url(${preview})` }}
    >
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleImageSelect}
        accept="image/*"
      />
    </div>
  );
}

export default ImagePicker;

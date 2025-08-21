import React, { useState, useEffect } from "react";

export default function InputField({ label, value, onChange, placeholder }) {
  const [displayValue, setDisplayValue] = useState(value);

  const handleBlur = (e) => {
    if (displayValue == "") {
      setDisplayValue(value);
    }
  };

  const handleFocus = (e) => {
    setDisplayValue("");
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue)) {
      if (inputValue === "" || parseInt(inputValue, 10) < 60) {
        setDisplayValue(inputValue);
        onChange(e);
      }
    }
  };

  return (
    <div className="text-3xl">
      <label className="text-white">{label}:</label>
      <input
        className="w-20 bg-white text-blue-400 bg-opacity-20 rounded-lg px-3 text-center"
        type="number"
        value={displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

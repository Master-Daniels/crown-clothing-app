import React from "react";
import "./FormInput.scss";

function FormInput({ handleChange, label, ...rest }) {
  return (
    <div className="group">
      <input
        autoComplete="off"
        onChange={handleChange}
        className="form-input"
        {...rest}
      />
      {label && (
        <label className={`${rest.value.length && "shrink"} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;

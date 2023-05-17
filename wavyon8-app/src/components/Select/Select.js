import React from "react";
import ReactSelect from "react-select";
import "./Select.css";

export default function Select({
  options,
  name,
  id,
  label,
  placeholder,
  required,
  disabled,
  className
}) {
  return (
    <div className="select-wrapper">
      <label className="select-label">
        {label}
        {required && <span className="required-field">&#42;</span>}
      </label>
      <ReactSelect
        options={options}
        name={name}
        id={id}
        label={label}
        disabled={disabled}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}

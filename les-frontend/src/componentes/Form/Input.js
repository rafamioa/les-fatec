import React from "react";

const Input = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  onClick,
  placeholder,
  error,
  campo,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
        className="form-control"
        campo={campo}
      />
      {error && <small className="text-danger">{error}</small>}
    </>
  );
};

export default Input;

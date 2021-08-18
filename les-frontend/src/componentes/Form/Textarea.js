import React from 'react';

const Textarea = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
        className="form-control"
      />
    {error && <small className="text-danger">{error}</small >}
    </>
  );
};

export default Textarea;
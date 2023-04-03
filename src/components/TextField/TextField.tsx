import React, { ChangeEventHandler } from 'react';
import { TextFieldProps } from './TextField.types';
import './TextField.css';

export function TextField({
  label,
  placeholder,
  containerClassName = '',
  inputType,
  value,
  onChange,
  onBlur,
  errorText,
}: TextFieldProps) {
  const onChangeField: ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (onChange) onChange(evt.target.value);
  };

  return (
    <div className={`mb-3 ${containerClassName}`}>
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        type={inputType}
        className="form-control"
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChangeField}
        onBlur={onBlur}
      />
      {errorText && <div className="invalid">{errorText}</div>}
    </div>
  );
}

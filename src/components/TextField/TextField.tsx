import React, { ChangeEventHandler } from 'react';
import { TextField } from '@mui/material';
import { TextFieldProps } from './TextField.types';
import { StyledBox } from './TextField.styled';

export function CustomTextField({
  label,
  inputType,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  errorText,
}: TextFieldProps) {
  const onChangeField: ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (onChange) onChange(evt.target.value);
  };

  return (
    <StyledBox>
      <TextField
        label={label}
        type={inputType}
        placeholder={placeholder}
        fullWidth
        value={value}
        onChange={onChangeField}
        onBlur={onBlur}
        error={error}
        helperText={errorText}
      />
    </StyledBox>
  );
}

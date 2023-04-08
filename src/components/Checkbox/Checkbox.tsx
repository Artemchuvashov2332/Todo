import React, { ChangeEventHandler } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { CheckboxProps } from './Checkbox.types';

export function CheckboxCustom({ label, color, checked, onChange, disabled }: CheckboxProps) {
  const onChangeCheckbox: ChangeEventHandler<HTMLInputElement> = (evt) => {
    if (onChange) onChange(evt.target.checked);
  };

  return (
    <FormControlLabel
      label={label}
      control={<Checkbox color={color} checked={checked} disabled={disabled} onChange={onChangeCheckbox} />}
    />
  );
}

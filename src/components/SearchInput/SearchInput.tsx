import React, { ChangeEventHandler, MouseEvent } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { SearchInputProps } from './SearchInput.types';
import { StyledBox, StyledIconButton, StyledTextFiled } from './SearchInput.styled';

export function SearchInput({ onChange, value, onReset }: SearchInputProps) {
  const onSearchInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => onChange(evt.target.value);

  const onResetBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (onReset) onReset();
  };

  return (
    <StyledBox>
      <StyledTextFiled label="search" onChange={onSearchInputChange} value={value} size="small" />
      <StyledIconButton onClick={onResetBtnClick}>
        <ClearIcon />
      </StyledIconButton>
    </StyledBox>
  );
}

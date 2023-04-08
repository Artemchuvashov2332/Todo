import React from 'react';
import { Button } from '@mui/material';
import { ISearchButtonProps } from './SearchButtons.types';

export function SearchButton({ children, variant, color }: ISearchButtonProps) {
  return (
    <Button type="button" variant={variant} color={color}>
      {children}
    </Button>
  );
}

import React from 'react';
import { ISearchButtonProps } from './SearchButtons.types';

export function SearchButton({ children, className }: ISearchButtonProps) {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

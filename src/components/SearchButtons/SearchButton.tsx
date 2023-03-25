import React from 'react';
import { ISearchButtonProps } from './SearchButtons.types';
import { FILTER_CLASSES } from 'modules/Tasks/components/SearchFilter/StatusFilter.constans';

export function SearchButton({ filterType, selectType, children }: ISearchButtonProps) {
  return (
    <button type="button" className={selectType === filterType ? FILTER_CLASSES.ACTIVE : FILTER_CLASSES.NOT_ACTIVE}>
      {children}
    </button>
  );
}

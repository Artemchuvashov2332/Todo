import React from 'react';
import { FiltersType } from 'domains/index';

export interface ISearchButtonProps {
  // type: 'button';
  filterType: FiltersType;
  selectType: FiltersType;
  children?: React.ReactNode;
}

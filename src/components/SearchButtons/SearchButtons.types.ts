import React from 'react';
import { FiltersType } from 'domains/Task.entity';

export interface ISearchButtonProps {
  // type: 'button';
  filterType: FiltersType;
  selectType: FiltersType;
  children?: React.ReactNode;
}

import { FILTER_TYPES } from 'constants/index';

export type FiltersType = typeof FILTER_TYPES[keyof typeof FILTER_TYPES];

export interface ISearchForm {
  searchInputValue: string;
  filterType: FiltersType;
}

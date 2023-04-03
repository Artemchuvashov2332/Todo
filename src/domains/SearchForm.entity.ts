import { FiltersType } from './Task.entity';

export interface ISearchForm {
  searchInputValue: string;
  filterType: FiltersType;
}

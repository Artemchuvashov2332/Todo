import { FiltersType } from 'domains/index';

export interface ISearchFilterProps {
  onChange: (taskStatus: FiltersType) => void;
  selectTypeTask: FiltersType;
}

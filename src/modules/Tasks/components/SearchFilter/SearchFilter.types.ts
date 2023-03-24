import { FiltersType } from 'domains/Task.entity';

export interface ISearchFilterProps {
  onChange: (taskStatus: FiltersType) => void;
  selectTypeTask: FiltersType;
}

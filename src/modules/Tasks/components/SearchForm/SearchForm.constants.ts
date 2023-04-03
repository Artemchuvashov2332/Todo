import { FILTER_TYPES } from 'constants/index';
import { ISearchForm } from 'domains/index';

export const SEARCH_FORM_DEFAULT_VALUES: ISearchForm = {
  searchInputValue: '',
  filterType: FILTER_TYPES.ALL,
};

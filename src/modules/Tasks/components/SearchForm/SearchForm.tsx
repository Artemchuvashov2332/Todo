import React, { MouseEvent } from 'react';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import { SearchFilter } from '../SearchFilter/index';
import { taskStoreInstance } from '../../store/index';
import { SEARCH_FORM_DEFAULT_VALUES } from './SearchForm.constants';
import { SearchInput } from 'components/index';
import { FiltersType, ISearchForm } from 'domains/index';

export const SearchFormProto = () => {
  const { control, handleSubmit, setValue } = useForm<ISearchForm>({
    defaultValues: SEARCH_FORM_DEFAULT_VALUES,
  });
  const changeHandler = (text: string) => {
    setValue('searchInputValue', text);
  };
  const resetHandler = () => {
    setValue('searchInputValue', '');
  };

  const changeTaskStatus = (taskStatus: FiltersType) => {
    setValue('filterType', taskStatus);
  };

  const submitHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    handleSubmit(async (data) => {
      await taskStoreInstance.loadTasks(data);
    })();
  };

  return (
    <form className="search-form d-flex justify-content-between">
      <Controller
        control={control}
        name="searchInputValue"
        render={({ field: { value } }) => <SearchInput onChange={changeHandler} value={value} onReset={resetHandler} />}
      />

      <Controller
        control={control}
        name="filterType"
        render={({ field: { value } }) => <SearchFilter onChange={changeTaskStatus} selectTypeTask={value} />}
      />
      <button type="submit" className="btn btn-primary" onClick={submitHandler}>
        Find
      </button>
    </form>
  );
};

export const SearchForm = observer(SearchFormProto);

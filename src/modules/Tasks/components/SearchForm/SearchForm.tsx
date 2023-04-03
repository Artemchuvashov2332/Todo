import React, { MouseEvent, useState } from 'react';
import { observer } from 'mobx-react';
import { SearchFilter } from '../SearchFilter';
import { SearchInput } from 'components/SearchInput';
import { FILTER_TYPES } from 'constants/statusFilterTypes';
import { FiltersType } from 'domains/Task.entity';
import { taskStoreInstance } from 'modules/Tasks/store';

export const SearchFormProto = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [filterType, setFilterType] = useState<FiltersType>(FILTER_TYPES.ALL);

  const changeHandler = (text: string) => {
    console.log(`Input controling ${text}`);
    setSearchInputValue(text);
  };

  const resetHandler = () => {
    console.log(`Input clean`);
    setSearchInputValue('');
  };

  const changeTaskStatus = (taskStatus: FiltersType) => {
    setFilterType(taskStatus);
  };

  const submitHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    taskStoreInstance.loadTasks({ searchInputValue, filterType });
    // console.log(`Поиск в категории ${filterType} ${searchInputValue}`);
  };

  return (
    <form className="search-form d-flex justify-content-between">
      <SearchInput onChange={changeHandler} value={searchInputValue} onReset={resetHandler} />
      <SearchFilter onChange={changeTaskStatus} selectTypeTask={filterType} />
      <button type="submit" className="btn btn-primary" onClick={submitHandler}>
        Find
      </button>
    </form>
  );
};

export const SearchForm = observer(SearchFormProto);

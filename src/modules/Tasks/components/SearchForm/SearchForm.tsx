import React, { MouseEvent, useState } from 'react';
import { SearchFilter } from '../SearchFilter';
import { SearchInput } from 'components/SearchInput';
import { FILTER_TYPES } from 'constants/statusFilterTypes';
import { FiltersType } from 'domains/Task.entity';

export function SearchForm() {
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

  const submitFormHandler = (evt: MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  const changeTaskStatus = (taskStatus: FiltersType) => {
    setFilterType(taskStatus);
  };

  const submitHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    console.log(`Поиск в категории ${filterType} ${searchInputValue}`);
  };

  return (
    <form className="search-form d-flex justify-content-between" onSubmit={submitFormHandler}>
      <SearchInput onChange={changeHandler} value={searchInputValue} onReset={resetHandler} />
      <SearchFilter onChange={changeTaskStatus} selectTypeTask={filterType} />
      <button type="submit" className="btn btn-primary" onClick={submitHandler}>
        Find
      </button>
    </form>
  );
}

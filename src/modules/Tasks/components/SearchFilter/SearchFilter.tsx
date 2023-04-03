import React, { MouseEvent } from 'react';
import { ISearchFilterProps } from './SearchFilter.types';
import { FILTER_TYPES } from 'constants/index';
import { FiltersType } from 'domains/index';
import { SearchButton } from 'components/index';

export function SearchFilter({ onChange, selectTypeTask }: ISearchFilterProps) {
  const onChangeTaskStatus = (evt: MouseEvent<HTMLDivElement> & { target: HTMLButtonElement }) => {
    onChange(evt.target.textContent as FiltersType);
  };

  return (
    <div className="btn-group" onClick={onChangeTaskStatus}>
      {Object.values(FILTER_TYPES).map((type) => (
        <SearchButton key={type} filterType={type} selectType={selectTypeTask}>
          {type}
        </SearchButton>
      ))}
      {/* <button
        type="button"
        className={selectTypeTask === FILTER_TYPES.ALL ? FILTER_CLASSES.ACTIVE : FILTER_CLASSES.NOT_ACTIVE}>
        {FILTER_TYPES.ALL}
      </button>
      <button
        type="button"
        className={selectTypeTask === FILTER_TYPES.ACTIVE ? FILTER_CLASSES.ACTIVE : FILTER_CLASSES.NOT_ACTIVE}>
        {FILTER_TYPES.ACTIVE}
      </button>
      <button
        type="button"
        className={selectTypeTask === FILTER_TYPES.DONE ? FILTER_CLASSES.ACTIVE : FILTER_CLASSES.NOT_ACTIVE}>
        {FILTER_TYPES.DONE}
      </button>
      <button
        type="button"
        className={selectTypeTask === FILTER_TYPES.IMPORTANT ? FILTER_CLASSES.ACTIVE : FILTER_CLASSES.NOT_ACTIVE}>
        {FILTER_TYPES.IMPORTANT}
      </button> */}
    </div>
  );
}

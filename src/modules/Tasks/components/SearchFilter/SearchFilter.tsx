import React, { MouseEvent } from 'react';
import { ISearchFilterProps } from './SearchFilter.types';
import { FILTER_CLASSES } from './SearchFilter.constans';
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
        <SearchButton
          key={type}
          className={selectTypeTask === type ? FILTER_CLASSES.ACTIVE : FILTER_CLASSES.NOT_ACTIVE}>
          {type}
        </SearchButton>
      ))}
    </div>
  );
}

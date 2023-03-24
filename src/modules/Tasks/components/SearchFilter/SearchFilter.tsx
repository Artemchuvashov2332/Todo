import React, { MouseEvent } from 'react';
import { ISearchFilterProps } from './SearchFilter.types';
import { FILTER_CLASSES } from './StatusFilter.constans';
import { FILTER_TYPES } from 'constants/statusFilterTypes';
import { FiltersType } from 'domains/Task.entity';

export function SearchFilter({ onChange, selectTypeTask }: ISearchFilterProps) {
  const onChangeTaskStatus = (evt: MouseEvent<HTMLDivElement> & { target: HTMLButtonElement }) => {
    onChange(evt.target.textContent as FiltersType);
  };

  return (
    <div className="btn-group" onClick={onChangeTaskStatus}>
      <button
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
      </button>
    </div>
  );
}

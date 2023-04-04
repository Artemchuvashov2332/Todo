import React from 'react';
import { useWatch } from 'react-hook-form';
import { ICheckboxWrapperProps } from './CheckboxWrapper.types';
import { Checkbox } from 'components/index';

export function CheckboxWrapper({ control, onTaskCompleted, onTaskImportant }: ICheckboxWrapperProps) {
  const isImportant = useWatch({
    control,
    name: 'isImportant',
  });

  const isDone = useWatch({
    control,
    name: 'isDone',
  });

  return (
    <>
      <Checkbox label="Intortant" checked={isImportant} disabled={isDone} onChange={onTaskImportant} />
      <Checkbox label="Complited" checked={isDone} disabled={isImportant} onChange={onTaskCompleted} />
    </>
  );
}

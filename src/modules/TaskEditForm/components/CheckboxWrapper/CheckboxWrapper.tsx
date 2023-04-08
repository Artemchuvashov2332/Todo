import React from 'react';
import { useWatch } from 'react-hook-form';
import { FormGroup } from '@mui/material';
import { ICheckboxWrapperProps } from './CheckboxWrapper.types';
import { CheckboxCustom } from 'components/index';

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
    <FormGroup>
      <CheckboxCustom
        label="Intortant"
        color="success"
        checked={isImportant}
        disabled={isDone}
        onChange={onTaskImportant}
      />
      <CheckboxCustom
        label="Complited"
        color="error"
        checked={isDone}
        disabled={isImportant}
        onChange={onTaskCompleted}
      />
    </FormGroup>
  );
}

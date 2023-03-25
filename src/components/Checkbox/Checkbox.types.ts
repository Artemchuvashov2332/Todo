import { ChangeEventHandler } from 'react';

export interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (isChange: boolean) => void;
  containerClassName?: string;
  disabled?: boolean;
}

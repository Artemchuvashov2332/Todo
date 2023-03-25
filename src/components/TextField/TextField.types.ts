import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export interface TextFieldProps {
  label: string;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  containerClassName?: string;
  value?: string;
  // onChange?: ChangeEventHandler<HTMLInputElement>;
  onChange?: (text: string) => void;
  errorText?: string;
}

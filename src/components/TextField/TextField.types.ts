import { FocusEventHandler, HTMLInputTypeAttribute } from 'react';

export interface TextFieldProps {
  label: string;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  containerClassName?: string;
  value?: string;
  onChange?: (text: string) => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  error?: boolean;
  errorText?: string;
}

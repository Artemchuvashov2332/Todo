export interface CheckboxProps {
  label: string;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
  checked?: boolean;
  onChange?: (isChange: boolean) => void;
  containerClassName?: string;
  disabled?: boolean;
}

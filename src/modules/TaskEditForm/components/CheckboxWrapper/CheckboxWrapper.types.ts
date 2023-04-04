import { Control } from 'react-hook-form';
import { TaskEditEntity } from 'domains/index';

export interface ICheckboxWrapperProps {
  control: Control<TaskEditEntity>;
  onTaskImportant: (value: boolean) => void;
  onTaskCompleted: (value: boolean) => void;
}

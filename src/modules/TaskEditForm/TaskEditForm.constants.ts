import { TaskEditEntity } from 'domains/index';

export const FORM_EDIT_DEFAULT_VALUES: TaskEditEntity = {
  name: '',
  info: '',
  isImportant: false,
  isDone: false,
};

import { TaskEntity } from 'domains/index';

export type TaskProps = {
  task: TaskEntity;
  onChangeImportant: (id: string, currentStatus: boolean) => Promise<void>;
  onChangeCompleted: (id: string, currentStatus: boolean) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
};

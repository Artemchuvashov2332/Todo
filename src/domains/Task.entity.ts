export interface TaskEntity {
  name: string;
  id: string;
  info: string;
  isImportant: boolean;
  isDone: boolean;
}

export type TaskEditEntity = Omit<TaskEntity, 'id'>;

export type TaskAddEntity = Omit<TaskEntity, 'id' | 'isDone'>;

export interface TasksStatsEntity {
  total: number;
  important: number;
  done: number;
}

import { FILTER_TYPES } from 'constants/index';
import { ISearchForm, TaskEditEntity, TaskEntity, TasksStatsEntity } from 'domains/index';
import {
  GetAllTasksQueryParams,
  GetAllTasksQueryResponse,
  GetTaskQueryResponse,
  UpdateTaskQueryRequestBoby,
} from 'http/model/index';

//фронтовый search в бек
export const mapToExternalParams = (params?: ISearchForm): GetAllTasksQueryParams | undefined => {
  if (!params) return undefined;

  const { searchInputValue, filterType } = params;
  let isCompleted: boolean | undefined = undefined;

  if (filterType === FILTER_TYPES.ACTIVE) isCompleted = false;
  if (filterType === FILTER_TYPES.DONE) isCompleted = true;

  return {
    isImportant: filterType === FILTER_TYPES.IMPORTANT ? true : undefined,
    isCompleted,
    name_like: searchInputValue ?? undefined,
  };
};

//бековые таски[] в фронтовые
export const mapToInterlanTasks = (tasks: GetAllTasksQueryResponse): TaskEntity[] => {
  const tasksArr: TaskEntity[] = [];

  tasks.forEach((task) => {
    //id стоит опционально. Странно конечно если её не будет, но ладно
    if (task.id) {
      tasksArr.push({
        id: String(task.id),
        name: task.name ?? 'Неизвестно',
        info: task.info ?? 'Неизвестно',
        isImportant: task.isImportant || false,
        isDone: task.isCompleted || false,
      });
    }
  });

  return tasksArr;
};

//фронтовую таску в бек
export const mapToExtermalTask = (task: TaskEditEntity): UpdateTaskQueryRequestBoby => {
  return {
    name: task.name,
    info: task.info,
    isImportant: task.isImportant,
    isCompleted: task.isDone,
  };
};

//бековую таксу в фронт
export const mapToInternalTask = (task: GetTaskQueryResponse): TaskEditEntity => {
  return {
    name: task.name ?? 'Неизвестно',
    info: task.info ?? 'Неизвестно',
    isImportant: task.isImportant || false,
    isDone: task.isCompleted || false,
  };
};

//Стата тасок
export const getInternalTasksStats = (tasks: GetAllTasksQueryResponse): TasksStatsEntity => {
  const stats = tasks.reduce(
    (statsAcc, taskStats) => {
      return {
        total: statsAcc.total + 1,
        important: taskStats.isImportant ? statsAcc.important + 1 : statsAcc.important,
        done: taskStats.isCompleted ? statsAcc.done + 1 : statsAcc.done,
      };
    },
    {
      total: 0,
      important: 0,
      done: 0,
    }
  );

  return stats;
};

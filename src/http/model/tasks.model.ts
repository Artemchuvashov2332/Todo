import { paths } from './todo.swagger';

export type GetAllTasksQueryParams = paths['/tasks']['get']['parameters']['query'];
export type GetAllTasksQueryResponse = paths['/tasks']['get']['responses']['200']['content']['application/json'];

export type GetTaskQueryResponse = paths['/tasks/{taskId}']['get']['responses']['200']['content']['application/json'];

export type UpdateTaskQueryRequestBoby =
  paths['/tasks/{taskId}']['patch']['requestBody']['content']['application/json'];
export type UpdateTaskQueryResponse =
  paths['/tasks/{taskId}']['patch']['responses']['200']['content']['application/json'];

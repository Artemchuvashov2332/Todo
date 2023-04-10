import { BasicAgent } from './BasicAgent';
import {
  GetAllTasksQueryParams,
  GetAllTasksQueryResponse,
  GetTaskQueryResponse,
  UpdateTaskQueryRequestBoby,
} from 'http/model/index';

class TaskAgent extends BasicAgent {
  constructor() {
    super(process.env.APP_API_LIGA as string);
  }

  getAllTasks = async (params?: GetAllTasksQueryParams): Promise<GetAllTasksQueryResponse> => {
    const res = await this._http.get<GetAllTasksQueryResponse>(`/tasks`, {
      params,
    });

    return res.data;
  };

  getTaskById = async (id: string): Promise<GetTaskQueryResponse> => {
    const res = await this._http.get<GetTaskQueryResponse>(`/tasks/${id}`);

    return res.data;
  };

  patchTask = async (id: string, task: UpdateTaskQueryRequestBoby): Promise<UpdateTaskQueryRequestBoby> => {
    const res = await this._http.patch<UpdateTaskQueryRequestBoby>(`/tasks/${id}`, task);

    return res.data;
  };

  postTask = async (task: UpdateTaskQueryRequestBoby): Promise<UpdateTaskQueryRequestBoby> => {
    const res = await this._http.post<UpdateTaskQueryRequestBoby>(`/tasks`, task);

    return res.data;
  };

  deleteTask = async (id: string): Promise<void> => {
    await this._http.delete(`/tasks/${id}`);
  };
}

export const taskAgentInstance = new TaskAgent();

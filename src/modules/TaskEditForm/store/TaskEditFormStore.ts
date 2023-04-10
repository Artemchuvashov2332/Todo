import { action, computed, makeObservable, observable } from 'mobx';
import { TaskEditEntity } from 'domains/index';
import { mapToExtermalTask, mapToInternalTask } from 'helpers/index';
import { taskAgentInstance } from 'http/index';

type TaskEditFormStoreField = '_isLoader' | '_taskId' | '_taskFormData';

class TaskEditFormStore {
  constructor() {
    makeObservable<this, TaskEditFormStoreField>(this, {
      _isLoader: observable,
      _taskId: observable,
      _taskFormData: observable,

      isLoader: computed,
      taskId: computed,
      taskFormData: computed,

      getTask: action,
      editTask: action,
    });
  }

  private _isLoader = true;
  private _taskId: string | null = null;
  private _taskFormData: TaskEditEntity = {
    name: '',
    info: '',
    isImportant: false,
    isDone: false,
  };

  get isLoader() {
    return this._isLoader;
  }

  get taskId() {
    return this._taskId;
  }

  set taskId(value: string | null) {
    this._taskId = value;
  }

  get taskFormData() {
    return this._taskFormData;
  }

  getTask = async () => {
    try {
      this._isLoader = true;
      if (this._taskId) {
        const task = await taskAgentInstance.getTaskById(this._taskId);
        this._taskFormData = mapToInternalTask(task);
      }
    } catch (error) {
      this._taskId = null;
    } finally {
      this._isLoader = false;
    }
  };

  editTask = async (task: TaskEditEntity): Promise<boolean | void> => {
    try {
      this._isLoader = true;
      if (this._taskId) {
        const externalTask = mapToExtermalTask(task);
        await taskAgentInstance.patchTask(this._taskId, externalTask);
      }
      return true;
    } catch (error) {
      this._taskId = null;
    } finally {
      this._isLoader = false;
    }
  };
}
export const taskEditStoreInstance = new TaskEditFormStore();

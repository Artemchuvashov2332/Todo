import { action, computed, makeObservable, observable } from 'mobx';
import { TaskAddEntity } from 'domains/index';
import { mapToExtermalTask } from 'helpers/mapper';
import { taskAgentInstance } from 'http/agent';

type TaskAddFormStoreField = '_isLoader' | '_isError';

class TaskAddFormStore {
  constructor() {
    makeObservable<this, TaskAddFormStoreField>(this, {
      _isLoader: observable,
      _isError: observable,

      isLoader: computed,
      isError: computed,

      postTask: action,
    });
  }

  private _isLoader = false;
  private _isError = false;

  get isLoader() {
    return this._isLoader;
  }

  get isError() {
    return this._isError;
  }

  postTask = async (task: TaskAddEntity) => {
    try {
      this._isLoader = true;
      const externalTask = mapToExtermalTask({ ...task, isDone: false });
      await taskAgentInstance.postTask(externalTask);
      return true;
    } catch (error) {
      this._isError = true;
    } finally {
      this._isLoader = false;
    }
  };
}

export const taskAddStoreInstance = new TaskAddFormStore();

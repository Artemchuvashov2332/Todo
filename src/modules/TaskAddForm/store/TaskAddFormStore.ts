import { action, computed, makeObservable, observable } from 'mobx';
import { TaskAddEntity } from 'domains/index';
import { TasksMock } from '__mocks__/index';
import { delay } from 'helpers/index';

type TaskAddFormStoreField = '_isLoader';

class TaskAddFormStore {
  constructor() {
    makeObservable<this, TaskAddFormStoreField>(this, {
      _isLoader: observable,

      isLoader: computed,

      postTask: action,
    });
  }

  private _isLoader = false;

  get isLoader() {
    return this._isLoader;
  }

  postTask = async (task: TaskAddEntity) => {
    this._isLoader = true;
    await delay(2500);

    TasksMock.push({
      id: `${Date.now()}`,
      name: task.name,
      info: task.info,
      isImportant: task.isImportant,
      isDone: false,
    });

    this._isLoader = false;
    return true;
  };
}

export const taskAddStoreInstance = new TaskAddFormStore();

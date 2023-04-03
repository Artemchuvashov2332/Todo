import { action, computed, makeObservable, observable } from 'mobx';
import { TaskEditEntity } from 'domains/index';
import { TasksMock } from '__mocks__/index';
import { delay } from 'helpers/index';

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

  private _isLoader = false;
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
    this._isLoader = true;
    await delay(2500);
    if (this._taskId) {
      const taskindex = TasksMock.findIndex((task) => task.id === this._taskId);

      this._taskFormData = TasksMock[taskindex];
      // console.log(+this._taskId);
    }
    this._isLoader = false;
  };

  editTask = async (task: TaskEditEntity) => {
    this._isLoader = true;
    await delay(2500);

    if (this._taskId) {
      TasksMock[+this._taskId] = {
        id: this._taskId,
        name: task.name,
        info: task.info,
        isImportant: task.isImportant,
        isDone: task.isDone,
      };
    }
    this._isLoader = false;
  };
}
export const taskEditStoreInstance = new TaskEditFormStore();

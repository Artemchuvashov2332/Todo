import { action, computed, makeObservable, observable } from 'mobx';
import { TaskEntity, TasksStatsEntity, ISearchForm } from 'domains/index';
import { TasksMock, TasksStatsMock } from '__mocks__/index';
import { delay } from 'helpers/index';

type TaskStoreField = '_isLoader' | '_tasks' | '_tasksStats';

class TaskStore {
  constructor() {
    makeObservable<this, TaskStoreField>(this, {
      _isLoader: observable,
      _tasks: observable,
      _tasksStats: observable,

      isLoader: computed,
      tasks: computed,
      tasksStats: computed,

      loadTasks: action,
      changeTaskImportant: action,
      changeTaskCompleted: action,
    });
  }

  private _isLoader = false;
  private _tasks: TaskEntity[] = [];
  private _tasksStats: TasksStatsEntity = {
    total: 0,
    important: 0,
    done: 0,
  };

  get isLoader() {
    return this._isLoader;
  }

  get tasks() {
    return this._tasks;
  }

  get tasksStats() {
    return this._tasksStats;
  }

  loadTasks = async (query?: ISearchForm) => {
    this._isLoader = true;
    this._tasksStats = TasksStatsMock;
    this._tasks = TasksMock;

    if (query) {
      const keyword = query.searchInputValue.toLowerCase();
      this._tasks = this._tasks.filter(
        (task) => task.info.toLowerCase().includes(keyword) || task.name.toLowerCase().includes(keyword)
      );

      if (query.filterType === 'Active') {
        this._tasks = this._tasks.filter(({ isDone }) => !isDone);
      } else if (query.filterType === 'Done') {
        this._tasks = this._tasks.filter(({ isDone }) => isDone);
      } else if (query.filterType === 'Important') {
        this._tasks = this._tasks.filter(({ isImportant }) => isImportant);
      }
    }

    await delay(3000);

    this._isLoader = false;
    return true;
  };

  changeTaskImportant = async (id: TaskEntity['id'], currentStatus: boolean) => {
    const taskindex = this._tasks.findIndex((task) => task.id === id);
    TasksMock[taskindex].isImportant = !currentStatus;

    await this.loadTasks();
  };

  changeTaskCompleted = async (id: TaskEntity['id'], currentStatus: boolean) => {
    const taskindex = this._tasks.findIndex((task) => task.id === id);
    TasksMock[taskindex].isImportant = false;
    TasksMock[taskindex].isDone = !currentStatus;

    await this.loadTasks();
  };
}

export const taskStoreInstance = new TaskStore();

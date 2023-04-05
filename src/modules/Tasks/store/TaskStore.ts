import { action, computed, makeObservable, observable } from 'mobx';
import { TaskEntity, TasksStatsEntity, ISearchForm } from 'domains/index';
import { getInternalTasksStats, mapToExternalParams, mapToInterlanTasks } from 'helpers/index';
import { taskAgentInstance } from 'http/index';
import { FILTER_TYPES } from 'constants/index';

type TaskStoreField = '_isLoader' | '_tasks' | '_tasksStats' | '_currentSearchForm';

class TaskStore {
  constructor() {
    makeObservable<this, TaskStoreField>(this, {
      _isLoader: observable,
      _tasks: observable,
      _tasksStats: observable,
      _currentSearchForm: observable,

      isLoader: computed,
      tasks: computed,
      tasksStats: computed,

      loadTasks: action,
      changeTaskImportant: action,
      changeTaskCompleted: action,
      deleteTask: action,
    });
  }

  private _isLoader = false;
  private _tasks: TaskEntity[] | null = [];
  private _tasksStats: TasksStatsEntity | null = {
    total: 0,
    important: 0,
    done: 0,
  };
  private _currentSearchForm: ISearchForm = {
    searchInputValue: '',
    filterType: FILTER_TYPES.ALL,
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
    try {
      this._isLoader = true;

      const externalParam = mapToExternalParams(query);
      const tasks = await taskAgentInstance.getAllTasks(externalParam);

      this._tasks = mapToInterlanTasks(tasks);
      this._tasksStats = getInternalTasksStats(tasks);

      this._currentSearchForm = {
        searchInputValue: query?.searchInputValue || '',
        filterType: query?.filterType || FILTER_TYPES.ALL,
      };
    } catch (error) {
      this._tasks = null;
      this._tasksStats = null;
    } finally {
      this._isLoader = false;
    }
  };

  changeTaskImportant = async (id: TaskEntity['id'], currentStatus: boolean) => {
    try {
      this._isLoader = true;
      await taskAgentInstance.patchTask(id, {
        isImportant: !currentStatus,
      });
      await this.loadTasks(this._currentSearchForm);
    } catch (error) {
      this._tasks = null;
      this._tasksStats = null;
    } finally {
      this._isLoader = false;
    }
  };

  changeTaskCompleted = async (id: TaskEntity['id'], currentStatus: boolean) => {
    try {
      this._isLoader = true;
      await taskAgentInstance.patchTask(id, {
        isImportant: false,
        isCompleted: !currentStatus,
      });
      await this.loadTasks(this._currentSearchForm);
    } catch (error) {
      this._tasks = null;
      this._tasksStats = null;
    } finally {
      this._isLoader = false;
    }
  };

  deleteTask = async (id: string) => {
    try {
      this._isLoader = true;
      await taskAgentInstance.deleteTask(id);
      await this.loadTasks(this._currentSearchForm);
    } catch (error) {
      this._tasks = null;
      this._tasksStats = null;
    } finally {
      this._isLoader = false;
    }
  };
}

export const taskStoreInstance = new TaskStore();

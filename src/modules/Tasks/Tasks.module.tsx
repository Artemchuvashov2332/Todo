import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { TasksStats, TasksList, SearchForm } from './components/index';
import { taskStoreInstance } from './store';

const TasksProto = () => {
  useEffect(() => {
    taskStoreInstance.loadTasks();
  }, []);
  return (
    <>
      <SearchForm />
      <TasksStats />
      <TasksList />
    </>
  );
};

export const Tasks = observer(TasksProto);

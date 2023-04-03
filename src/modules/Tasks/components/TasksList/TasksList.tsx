import React from 'react';
import { observer } from 'mobx-react';
import { Task } from '../Task/index';
import { taskStoreInstance } from '../../store/index';
import { Loader } from 'components/index';
import './TasksList.css';

export const TasksListProto = () => {
  const { tasks, isLoader, changeTaskImportant, changeTaskCompleted } = taskStoreInstance;
  return (
    <div className="tasks-wrapper d-flex align-items-center justify-content-center">
      <Loader isLoading={isLoader} variant="circle">
        <ul className="list-group todo-list mb-3">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item">
              <Task
                key={task.id}
                task={task}
                onChangeImportant={changeTaskImportant}
                onChangeCompleted={changeTaskCompleted}
              />
            </li>
          ))}
        </ul>
      </Loader>
    </div>
  );
};

export const TasksList = observer(TasksListProto);

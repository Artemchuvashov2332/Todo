import React, { MouseEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { taskEditStoreInstance } from './store/index';
import { TextField } from 'components/TextField';
import { Checkbox } from 'components/Checkbox';
import { PATH_LIST } from 'constants/paths';
import { Loader } from 'components/index';
import './TaskEditForm.css';

function TaskEditFormProto() {
  const [taskNameValue, setTaskNameValue] = useState('');
  const [taskDescriptionValue, setTaskDescriptionValue] = useState('');
  const [taskIsImportant, setTaskIsImportant] = useState(false);
  const [taskIsCompleted, setTaskIsCompleted] = useState(false);
  const { taskId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    taskEditStoreInstance.taskId = taskId ?? null;
    if (taskEditStoreInstance.taskId) {
      taskEditStoreInstance.getTask();
    }
  }, []);

  useEffect(() => {
    setTaskNameValue(taskEditStoreInstance.taskFormData.name);
    setTaskDescriptionValue(taskEditStoreInstance.taskFormData.info);
    setTaskIsImportant(taskEditStoreInstance.taskFormData.isImportant);
    setTaskIsCompleted(taskEditStoreInstance.taskFormData.isDone);
  }, [taskEditStoreInstance.taskFormData]);

  const onTaskNameChange = (text: string) => {
    setTaskNameValue(text);
  };

  const onTaskDescriptionChange = (text: string) => {
    setTaskDescriptionValue(text);
  };

  const onTaskImportant = (value: boolean) => {
    setTaskIsImportant(value);
  };

  const onTaskCompleted = (value: boolean) => {
    setTaskIsCompleted(value);
  };

  const onSubmitTaskFors = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    taskEditStoreInstance.editTask({
      name: taskNameValue,
      info: taskDescriptionValue,
      isImportant: taskIsImportant,
      isDone: taskIsCompleted,
    });

    navigate(PATH_LIST.ROOT);
  };

  return (
    <div className="form-container d-flex align-items-center justify-content-center">
      <Loader isLoading={taskEditStoreInstance.isLoader} variant="circle">
        <form className="w-100">
          <TextField
            label="Task name"
            placeholder="Enter the name of the task"
            inputType="text"
            onChange={onTaskNameChange}
            value={taskNameValue}
          />
          <TextField
            label="Task description"
            placeholder="What do you want to do"
            inputType="text"
            onChange={onTaskDescriptionChange}
            value={taskDescriptionValue}
          />
          <Checkbox label="Important" checked={taskIsImportant} disabled={taskIsCompleted} onChange={onTaskImportant} />
          <Checkbox label="Complited" checked={taskIsCompleted} disabled={taskIsImportant} onChange={onTaskCompleted} />
          <button className="btn btn-secondary d-block ml-auto w-100" onClick={onSubmitTaskFors}>
            Edit task
          </button>
        </form>
      </Loader>
    </div>
  );
}

export const TaskEditForm = observer(TaskEditFormProto);

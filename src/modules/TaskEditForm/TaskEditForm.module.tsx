import React, { MouseEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TextField } from 'components/TextField';
import { TasksMock } from '__mocks__/Tasks.mock';
import { Checkbox } from 'components/Checkbox';
import { PATH_LIST } from 'constants/paths';

export function TaskEditForm() {
  const [taskNameValue, setTaskNameValue] = useState('');
  const [taskDescriptionValue, setTaskDescriptionValue] = useState('');
  const [taskIsImportant, setTaskIsImportant] = useState(false);
  const [taskIsCompleted, setTaskIsCompleted] = useState(false);
  const { taskId } = useParams();
  const navigate = useNavigate();
  const taskindex = TasksMock.findIndex((task) => task.id === taskId);

  useEffect(() => {
    setTaskNameValue(TasksMock[taskindex].name);
    setTaskDescriptionValue(TasksMock[taskindex].info);
    setTaskIsImportant(TasksMock[taskindex].isImportant);
    setTaskIsCompleted(TasksMock[taskindex].isDone);
  }, []);

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
    TasksMock[taskindex].name = taskNameValue;
    TasksMock[taskindex].info = taskDescriptionValue;
    TasksMock[taskindex].isImportant = taskIsImportant;
    TasksMock[taskindex].isDone = taskIsCompleted;
    console.log(TasksMock[taskindex]);

    navigate(PATH_LIST.ROOT);
  };

  return (
    <form>
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
  );
}

import React, { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from 'components/TextField';
import { TasksMock } from '__mocks__/Tasks.mock';
import { Checkbox } from 'components/Checkbox';
import { PATH_LIST } from 'constants/paths';

export function TaskAddForm() {
  const [taskNameValue, setTaskNameValue] = useState('');
  const [taskDescriptionValue, setTaskDescriptionValue] = useState('');
  const [taskIsImportant, setTaskIsImportant] = useState(false);
  const navigate = useNavigate();

  const onTaskNameChange = (text: string) => {
    setTaskNameValue(text);
  };

  const onTaskDescriptionChange = (text: string) => {
    setTaskDescriptionValue(text);
  };

  const onTaskImportant = (value: boolean) => {
    setTaskIsImportant(value);
  };

  const onSubmitTaskFors = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    TasksMock.push({
      id: `${Date.now()}`,
      name: taskNameValue,
      info: taskDescriptionValue,
      isImportant: taskIsImportant,
      isDone: false,
    });
    console.log(TasksMock[TasksMock.length - 1]);

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
      <Checkbox label="Important" checked={taskIsImportant} onChange={onTaskImportant} />
      <button className="btn btn-secondary d-block ml-auto w-100" onClick={onSubmitTaskFors}>
        Add task
      </button>
    </form>
  );
}

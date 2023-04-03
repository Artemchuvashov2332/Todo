import React, { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { taskAddStoreInstance } from './store/index';
import { TextField } from 'components/TextField';
import { Checkbox } from 'components/Checkbox';
import { PATH_LIST } from 'constants/paths';
import { Loader } from 'components/index';

function TaskAddFormProto() {
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

  const onSubmitTaskFors = async (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    const res = await taskAddStoreInstance.postTask({
      name: taskNameValue,
      info: taskDescriptionValue,
      isImportant: taskIsImportant,
    });

    if (res) navigate(PATH_LIST.ROOT);
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
        <Loader isLoading={taskAddStoreInstance.isLoader} variant="dot">
          Add task
        </Loader>
      </button>
    </form>
  );
}

export const TaskAddForm = observer(TaskAddFormProto);

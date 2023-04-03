import React, { MouseEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskEditStoreInstance } from './store/index';
import { FORM_EDIT_DEFAULT_VALUES } from './TaskEditForm.constants';
import { editFormValidationSchema } from './TaskEditForm.validation';
import { TaskEditEntity } from 'domains/index';
import { TextField, Checkbox, Loader } from 'components/index';
import { PATH_LIST } from 'constants/index';
import './TaskEditForm.css';

function TaskEditFormProto() {
  const { control, handleSubmit, reset, setValue } = useForm<TaskEditEntity>({
    mode: 'onBlur',
    defaultValues: FORM_EDIT_DEFAULT_VALUES,
    resolver: yupResolver(editFormValidationSchema),
  });
  const { taskId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    taskEditStoreInstance.taskId = taskId ?? null;
    if (taskEditStoreInstance.taskId) {
      taskEditStoreInstance.getTask();
    }
  }, []);

  useEffect(() => {
    reset(taskEditStoreInstance.taskFormData);
  }, [taskEditStoreInstance.taskFormData]);

  const onTaskNameChange = (text: string) => {
    setValue('name', text);
  };

  const onTaskDescriptionChange = (text: string) => {
    setValue('info', text);
  };

  const onTaskImportant = (value: boolean) => {
    setValue('isImportant', value);
  };

  const onTaskCompleted = (value: boolean) => {
    setValue('isDone', value);
  };

  const onSubmitTaskFors = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    handleSubmit(async (data) => {
      const res = await taskEditStoreInstance.editTask(data);
      if (res) navigate(PATH_LIST.ROOT);
    })();
  };

  return (
    <div className="form-container d-flex align-items-center justify-content-center">
      <Loader isLoading={taskEditStoreInstance.isLoader} variant="circle">
        <form className="w-100">
          <Controller
            control={control}
            name="name"
            render={({ field: { value, onBlur }, fieldState: { error } }) => (
              <TextField
                containerClassName="text-field"
                label="Task name"
                placeholder="Enter the name of the task"
                inputType="text"
                onChange={onTaskNameChange}
                onBlur={onBlur}
                value={value}
                errorText={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="info"
            render={({ field: { value, onBlur }, fieldState: { error } }) => (
              <TextField
                label="Task description"
                placeholder="What do you want to do"
                inputType="text"
                onChange={onTaskDescriptionChange}
                onBlur={onBlur}
                value={value}
                errorText={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="isImportant"
            render={({ field: { value } }) => <Checkbox label="Important" checked={value} onChange={onTaskImportant} />}
          />
          <Controller
            control={control}
            name="isDone"
            render={({ field: { value } }) => <Checkbox label="Complited" checked={value} onChange={onTaskCompleted} />}
          />
          <button className="btn btn-secondary d-block ml-auto w-100" onClick={onSubmitTaskFors}>
            Edit task
          </button>
        </form>
      </Loader>
    </div>
  );
}

export const TaskEditForm = observer(TaskEditFormProto);

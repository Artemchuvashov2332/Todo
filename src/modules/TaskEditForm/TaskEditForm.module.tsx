import React, { MouseEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { taskEditStoreInstance } from './store/index';
import { FORM_EDIT_DEFAULT_VALUES } from './TaskEditForm.constants';
import { editFormValidationSchema } from './TaskEditForm.validation';
import { CheckboxWrapper } from './components/index';
import { StyledEditForm, StyledFormWrapperBox } from './TaskEditForm.styled';
import { TaskEditEntity } from 'domains/index';
import { CustomTextField, Loader, ErrorDialog } from 'components/index';
import { PATH_LIST } from 'constants/index';

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
    if (value) setValue('isDone', false);
  };

  const onTaskCompleted = (value: boolean) => {
    setValue('isDone', value);
    if (value) setValue('isImportant', false);
  };

  const onSubmitTaskFors = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    handleSubmit(async (data) => {
      const res = await taskEditStoreInstance.editTask(data);
      if (res) navigate(PATH_LIST.ROOT);
    })();
  };

  return (
    <StyledFormWrapperBox>
      <Loader isLoading={taskEditStoreInstance.isLoader}>
        {taskEditStoreInstance.taskId ? (
          <StyledEditForm>
            <Controller
              control={control}
              name="name"
              render={({ field: { value, onBlur }, fieldState: { error } }) => (
                <CustomTextField
                  label="Task name"
                  placeholder="Enter the name of the task"
                  inputType="text"
                  onChange={onTaskNameChange}
                  onBlur={onBlur}
                  value={value}
                  error={!!error}
                  errorText={error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="info"
              render={({ field: { value, onBlur }, fieldState: { error } }) => (
                <CustomTextField
                  label="Task description"
                  placeholder="What do you want to do"
                  inputType="text"
                  onChange={onTaskDescriptionChange}
                  onBlur={onBlur}
                  value={value}
                  error={!!error}
                  errorText={error?.message}
                />
              )}
            />

            {/* Обёртка над чекбоксами, там useWatch, чтобы чекбоксы следили из изменениями друг друга,
          и небыло перерендера всей формы */}
            <CheckboxWrapper control={control} onTaskImportant={onTaskImportant} onTaskCompleted={onTaskCompleted} />

            <Button variant="contained" fullWidth onClick={onSubmitTaskFors}>
              Edit task
            </Button>
          </StyledEditForm>
        ) : (
          <ErrorDialog info="Что-то пошло не так" redirect={navigate} homePath={PATH_LIST.ROOT} />
        )}
      </Loader>
    </StyledFormWrapperBox>
  );
}

export const TaskEditForm = observer(TaskEditFormProto);

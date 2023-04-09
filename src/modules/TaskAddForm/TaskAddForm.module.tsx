import React, { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { taskAddStoreInstance } from './store/index';
import { FORM_ADD_DEFAULT_VALUES } from './TaskAddForm.constants';
import { addFormValidationSchema } from './TaskAddForm.validation';
import { StyledAddForm, StyledFormWrapperBox } from './TaskAddForm.styled';
import { CustomTextField, CheckboxCustom, Loader, ErrorDialog } from 'components/index';
import { PATH_LIST } from 'constants/index';
import { TaskAddEntity } from 'domains/index';

function TaskAddFormProto() {
  const { control, handleSubmit, setValue } = useForm<TaskAddEntity>({
    mode: 'onBlur',
    defaultValues: FORM_ADD_DEFAULT_VALUES,
    resolver: yupResolver(addFormValidationSchema),
  });
  const navigate = useNavigate();

  const onTaskNameChange = (text: string) => {
    setValue('name', text);
  };

  const onTaskDescriptionChange = (text: string) => {
    setValue('info', text);
  };

  const onTaskImportant = (value: boolean) => {
    setValue('isImportant', value);
  };

  const onSubmitTaskFors = async (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    handleSubmit(async (data) => {
      const res = await taskAddStoreInstance.postTask(data);
      if (res) navigate(PATH_LIST.ROOT);
    })();
  };

  return (
    <StyledFormWrapperBox>
      <Loader isLoading={taskAddStoreInstance.isLoader}>
        {!taskAddStoreInstance.isError ? (
          <StyledAddForm>
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

            <Controller
              control={control}
              name="isImportant"
              render={({ field: { value } }) => (
                <CheckboxCustom color="success" label="Important" checked={value} onChange={onTaskImportant} />
              )}
            />

            <Button variant="contained" fullWidth onClick={onSubmitTaskFors} disabled={taskAddStoreInstance.isLoader}>
              Add task
            </Button>
          </StyledAddForm>
        ) : (
          <ErrorDialog info="Что-то пошло не так" redirect={navigate} homePath={PATH_LIST.ROOT} />
        )}
      </Loader>
    </StyledFormWrapperBox>
  );
}

export const TaskAddForm = observer(TaskAddFormProto);

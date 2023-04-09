import React from 'react';
import { observer } from 'mobx-react';
import { Typography } from '@mui/material';
import { Task } from '../index';
import { taskStoreInstance } from '../../store/index';
import { StyledList, StyledListItem, StyledTasksBox } from './TasksList.styled';
import { CustomLoader } from 'components/index';

export const TasksListProto = () => {
  const { tasks, isLoader, changeTaskImportant, changeTaskCompleted, deleteTask } = taskStoreInstance;
  return (
    <StyledTasksBox>
      <CustomLoader isLoading={isLoader}>
        {tasks?.length ? (
          <StyledList>
            {tasks.map((task) => (
              <StyledListItem key={task.id}>
                <Task
                  key={task.id}
                  task={task}
                  onChangeImportant={changeTaskImportant}
                  onChangeCompleted={changeTaskCompleted}
                  deleteTask={deleteTask}
                />
              </StyledListItem>
            ))}
          </StyledList>
        ) : (
          <Typography component="p" variant="h5">
            Ничего не найдено
          </Typography>
        )}
      </CustomLoader>
    </StyledTasksBox>
  );
};

export const TasksList = observer(TasksListProto);

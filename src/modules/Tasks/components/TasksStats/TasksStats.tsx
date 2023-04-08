import React from 'react';
import { observer } from 'mobx-react';
import { Box, Skeleton, Typography } from '@mui/material';
import { taskStoreInstance } from '../../store/index';
import { StyleStatsNumber, StyledTasksStatsStack } from './TasksStats.styled';

const TasksStatsProto = () => {
  const { tasksStats, isLoader } = taskStoreInstance;
  return (
    <StyledTasksStatsStack direction="row">
      {isLoader ? (
        <>
          <Skeleton variant="rounded" width={100} height={25} />
          <Skeleton variant="rounded" width={100} height={25} />
          <Skeleton variant="rounded" width={100} height={25} />
        </>
      ) : (
        <>
          {tasksStats ? (
            <>
              <Box>
                Total: <StyleStatsNumber variant="body1">{tasksStats.total}</StyleStatsNumber>
              </Box>
              <Box>
                Important: <StyleStatsNumber variant="body1">{tasksStats.important}</StyleStatsNumber>
              </Box>
              <Box>
                Done: <StyleStatsNumber variant="body1">{tasksStats.done}</StyleStatsNumber>
              </Box>
            </>
          ) : (
            <Typography component="p" variant="body1">
              Ооооооооййёёёёёёёёёй!
            </Typography>
          )}
        </>
      )}
    </StyledTasksStatsStack>
  );
};

export const TasksStats = observer(TasksStatsProto);

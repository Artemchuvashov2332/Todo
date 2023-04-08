import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { PageContainer } from 'components/index';
import { TaskEditForm } from 'modules/index';

export function TaskEditPage() {
  const { taskId } = useParams();

  return (
    <PageContainer>
      <Typography component="h1" variant="h4" fontWeight="600" align="center">
        TODO EDIT | TASK {taskId}
      </Typography>
      <TaskEditForm />
    </PageContainer>
  );
}

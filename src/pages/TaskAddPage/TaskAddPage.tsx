import React from 'react';
import { Typography } from '@mui/material';
import { PageContainer } from 'components/index';
import { TaskAddForm } from 'modules/index';

export function TaskAddPage() {
  return (
    <PageContainer>
      <Typography component="h1" variant="h4" fontWeight="600" align="center">
        TODO LIST | ADD TASK
      </Typography>
      <TaskAddForm />
    </PageContainer>
  );
}

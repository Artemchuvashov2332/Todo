import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { PageContainer } from 'components/index';
import { Tasks } from 'modules/index';
import { PATH_LIST } from 'constants/index';

export function TasksPage() {
  return (
    <PageContainer>
      <Typography component="h1" variant="h3" fontWeight="600">
        TODO LIST
      </Typography>
      <Tasks />
      <Link className="btn btn-secondary d-block ml-auto" to={PATH_LIST.ADD}>
        Add task
      </Link>
    </PageContainer>
  );
}

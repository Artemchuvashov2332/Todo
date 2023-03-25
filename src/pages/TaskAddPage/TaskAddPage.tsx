import React from 'react';
import { PageContainer } from 'components/PageContainer';
import { TaskAddForm } from 'modules/index';

export function TaskAddPage() {
  return (
    <PageContainer>
      <h1>TODO LIST | ADD TASK</h1>
      <TaskAddForm />
    </PageContainer>
  );
}

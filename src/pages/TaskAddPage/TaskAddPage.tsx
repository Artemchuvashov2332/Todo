import React from 'react';
import { PageContainer } from 'components/index';
import { TaskAddForm } from 'modules/index';

export function TaskAddPage() {
  return (
    <PageContainer>
      <h1 className="text-center">TODO LIST | ADD TASK</h1>
      <TaskAddForm />
    </PageContainer>
  );
}

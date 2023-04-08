import React from 'react';
import { PageContainerProps } from './PageContainer.types';
import { StyledConpainer } from './PageContainer.styled';

export function PageContainer({ children }: PageContainerProps) {
  return <StyledConpainer maxWidth={false}>{children}</StyledConpainer>;
}

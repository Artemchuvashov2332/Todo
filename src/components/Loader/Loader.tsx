import React from 'react';
import { CircularProgress } from '@mui/material';
import { LoaderProps } from './Loader.types';

export function CustomLoader({ isLoading, children }: LoaderProps) {
  return isLoading ? <CircularProgress variant="indeterminate" color="primary" /> : <>{children}</>;
}

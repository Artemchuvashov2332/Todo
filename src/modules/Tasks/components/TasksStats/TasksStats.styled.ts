import styled from '@emotion/styled';
import { Stack, Typography } from '@mui/material';

export const StyledTasksStatsStack = styled(Stack)({
  marginTop: '0.5rem',
  width: '100%',
  justifyContent: 'space-between',
});

export const StyleStatsNumber = styled(Typography)({
  display: 'inline-block',
  padding: '0.35em 0.65em',
  fontSize: '0.75rem',
  fontWeight: '700',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '0.25rem',
  backgroundColor: '#6c757d',
});

import { IconButton, ListItemText } from '@mui/material';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { TaskEntity } from 'domains/index';

type StyledListItemTextProps = Pick<TaskEntity, 'isImportant' | 'isDone'>;
type StyledImportantButtonProps = Pick<TaskEntity, 'isImportant'>;
type StyledCompletedButtonProps = Pick<TaskEntity, 'isDone'>;

export const StyledTaskBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.5rem',
});

export const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'isImportant' && prop !== 'isDone',
})<StyledListItemTextProps>(({ isImportant, isDone }) => ({
  '& span': {
    wordBreak: 'break-word',
    ...(isImportant && {
      color: '#198754',
      fontWeight: '700',
    }),
    ...(isDone && {
      textDecoration: 'line-through',
      color: '#6c757d',
    }),
  },
}));

const buttonStyles = {
  borderRadius: '0.2rem',
  border: '1px solid',
  backgroundColor: 'transparent',
};

export const StyledImportantButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isImportant',
})<StyledImportantButtonProps>(({ isImportant }) => ({
  ...buttonStyles,
  color: '#198754',
  borderColor: '#198754',
  ...(isImportant && {
    color: '#fff',
    backgroundColor: '#198754',
  }),

  '&:hover': {
    color: '#fff',
    backgroundColor: '#198754',
  },
}));

export const StyledCompletedButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isDone',
})<StyledCompletedButtonProps>(({ isDone }) => ({
  ...buttonStyles,
  color: '#dc3545',
  borderColor: '#dc3545',
  ...(isDone && {
    color: '#fff',
    backgroundColor: '#dc3545',
  }),

  '&:hover': {
    color: '#fff',
    backgroundColor: '#dc3545',
  },
}));

export const StyledDeleteButton = styled(IconButton)({
  ...buttonStyles,
  color: '#dc3545',
  borderColor: '#dc3545',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#dc3545',
  },
});

export const StyledLinkButton = styled(IconButton)({
  ...buttonStyles,
  color: '#6c757d',
  borderColor: '#6c757d',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#6c757d',
  },
});

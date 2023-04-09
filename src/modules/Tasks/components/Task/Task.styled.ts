import { IconButton, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
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
})<StyledListItemTextProps>(({ theme, isImportant, isDone }) => ({
  '& span': {
    wordBreak: 'break-word',
    ...(isImportant && {
      color: theme.palette.success.main,
      fontWeight: '700',
    }),
    ...(isDone && {
      textDecoration: 'line-through',
      color: theme.palette.grey[700],
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
})<StyledImportantButtonProps>(({ isImportant, theme }) => ({
  ...buttonStyles,
  color: theme.palette.success.main,
  borderColor: theme.palette.success.main,
  ...(isImportant && {
    color: '#fff',
    backgroundColor: theme.palette.success.main,
  }),

  '&:hover': {
    color: '#fff',
    backgroundColor: theme.palette.success.main,
  },
}));

export const StyledCompletedButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isDone',
})<StyledCompletedButtonProps>(({ isDone, theme }) => ({
  ...buttonStyles,
  color: theme.palette.error.main,
  borderColor: theme.palette.error.main,
  ...(isDone && {
    color: '#fff',
    backgroundColor: theme.palette.error.main,
  }),

  '&:hover': {
    color: '#fff',
    backgroundColor: theme.palette.error.main,
  },
}));

export const StyledDeleteButton = styled(IconButton)(({ theme }) => ({
  ...buttonStyles,
  color: theme.palette.error.main,
  borderColor: theme.palette.error.main,
  '&:hover': {
    color: '#fff',
    backgroundColor: theme.palette.error.main,
  },
}));

export const StyledLinkButton = styled(IconButton)(({ theme }) => ({
  ...buttonStyles,
  color: theme.palette.grey[700],
  borderColor: theme.palette.grey[700],
  '&:hover': {
    color: '#fff',
    backgroundColor: theme.palette.grey[700],
  },
}));

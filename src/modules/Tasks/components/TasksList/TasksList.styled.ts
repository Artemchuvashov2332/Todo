import { styled } from '@mui/material/styles';
import { List, ListItem } from '@mui/material';
import { Box } from '@mui/system';

export const StyledList = styled(List)({
  width: '100%',
  marginBottom: '1rem',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: 0,
});

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'block',
  padding: '0.5rem 1rem',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  border: '1px solid rgba(0,0,0,.125)',
  backgroundColor: theme.palette.background.paper,
  '&:first-of-type': {
    borderRadius: '0.25rem 0.25rem 0 0',
  },
  '&:last-of-type': {
    borderRadius: '0 0 0.25rem 0.25rem',
  },
}));

export const StyledTasksBox = styled(Box)({
  minHeight: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

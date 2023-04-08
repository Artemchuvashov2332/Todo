import { Box, IconButton, TextField } from '@mui/material';
import styled from '@emotion/styled';

export const StyledBox = styled(Box)({
  position: 'relative',
});

export const StyledTextFiled = styled(TextField)({
  width: 'auto',
  flexGrow: 1,
  marginRight: 3,
  '& input': {
    paddingRight: '45px',
  },
});

export const StyledIconButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  right: 5,
  transform: 'translateY(-50%)',
  border: 'none',
  backgroundColor: 'inherit',
});

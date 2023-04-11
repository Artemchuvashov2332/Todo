import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { IErrorDialog } from './ErrorDialog.types';
import { StyledDiallogButton } from './ErrorDiagol.styled';

export function ErrorDialog({ info, homePath, redirect }: IErrorDialog) {
  const onClickThisHandler = () => redirect(0);

  const onClickHomeHandler = () => {
    if (homePath) redirect(homePath);
  };

  return (
    <Stack>
      <Typography component="h3" variant="h5" align="center">
        {info}
      </Typography>
      <Box mt={8}>
        <StyledDiallogButton variant="contained" fullWidth color="error" onClick={onClickThisHandler}>
          Попробовать ещё раз
        </StyledDiallogButton>
        {homePath && (
          <StyledDiallogButton variant="contained" fullWidth color="primary" onClick={onClickHomeHandler}>
            На главную
          </StyledDiallogButton>
        )}
      </Box>
    </Stack>
  );
}

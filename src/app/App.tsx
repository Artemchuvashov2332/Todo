import React, { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, IconButton } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Router } from 'router/index';
import { getDesingToken } from 'src/theme/index';

export function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toogleThemeMode = () => {
    setMode((prevValue) => (prevValue === 'light' ? 'dark' : 'light'));
  };
  const theme = createTheme(getDesingToken(mode));

  return (
    <ThemeProvider theme={theme}>
      <IconButton color="inherit" onClick={toogleThemeMode}>
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <BrowserRouter>
        <CssBaseline />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

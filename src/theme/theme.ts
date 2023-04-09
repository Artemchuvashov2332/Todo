import { PaletteMode } from '@mui/material';

export const getDesingToken = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'dark' && {
      primary: {
        main: '#cebb0e',
      },
      success: {
        main: '#1b5e20',
      },
      error: {
        main: '#c62828',
      },
      text: {
        primary: '#cecece',
      },
      background: {
        paper: '#1c1c1e',
      },
    }),
  },
});

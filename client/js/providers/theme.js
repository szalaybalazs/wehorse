import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#87B726'
    },
    secondary: {
      main: '#cFcEcE',
    },
    background: '#fff',
  },
});

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  );
}

export default Provider;
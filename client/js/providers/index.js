import React from 'react';
import ThemeProvider from './theme';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';

const Providers = ({ children }) => (
  <ReduxProvider store={store}>
    <ThemeProvider>
      { children }
    </ThemeProvider>
  </ReduxProvider>
)

export default Providers;
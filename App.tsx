import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Router from './src/Router';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Router />
      </PaperProvider>
    </Provider>
  );
};

export default App;

import React from 'react';
import Routes from '~/routes';
import history from '~/routes/history';
import GlobalStyles from '~/assets/styles/global';
import { Router } from 'react-router-dom';
import { Toast } from '~/app/components';
import { Provider } from 'react-redux';
import store from '~/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Toast />
        <GlobalStyles />
        <Routes />
      </Router>
    </Provider>
  );
}

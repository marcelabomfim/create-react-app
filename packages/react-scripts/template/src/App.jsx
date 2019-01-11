import React, { Fragment } from 'react'
import { Provider } from 'react-redux';

import Home from './containers/Home';
import GlobalStyle from './utils/styles/global';
import store from './store';

export default () => (
  <Provider store={store}>
    <Fragment>
      <Home />
      <GlobalStyle />
    </Fragment>
  </Provider>
);

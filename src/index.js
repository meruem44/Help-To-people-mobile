import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes/routes';

import Store from './store';

export default function src() {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
}

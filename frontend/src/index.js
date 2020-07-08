import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import Store from './store';
import TokenRefresher from './Components/TokenRefresher';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <TokenRefresher />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


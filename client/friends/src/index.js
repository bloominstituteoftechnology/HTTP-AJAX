import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import { App } from './components';
import reducers from './reducers';
import './styles/index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ) }>
    <App />
  </Provider>,
  document.getElementById('root')
);

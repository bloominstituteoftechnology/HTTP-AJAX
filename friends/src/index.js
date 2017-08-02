import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // <---- AJAX MiddleWare
import ReduxPromise from 'redux-promise';

import './css/index.css';
import App from './components/App';

import friendsReducer from './reducers'; // <--- ./reducers/index.js


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const STORAGE_WAREHOUSE = createStoreWithMiddleware(friendsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={STORAGE_WAREHOUSE}>
    <App />
  </Provider>,
  document.getElementById('root'));

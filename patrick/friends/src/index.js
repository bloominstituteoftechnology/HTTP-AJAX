import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import friendsReducer from './reducers'; // <--- ./reducers/index.js


let STORAGE_WAREHOUSE = createStore(friendsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={STORAGE_WAREHOUSE}>
    <App />
  </Provider>,
  document.getElementById('root'));

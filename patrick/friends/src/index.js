import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import friendsReducer from './reducers'; // <--- ./reducers/index.js



// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

let STORAGE_WAREHOUSE = createStore(friendsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={STORAGE_WAREHOUSE}>
    {/* <a href="https://youtu.be/v2f8kd1d278?t=7s">ROOT</a> */}
    <App />
  </Provider>,
  document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import ReduxPromise from 'redux-promise'
// const middleware = []
// if ('somecondition') {
//   middleware.push(createLogger())
// }
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer);
// const store = createStore(
//   reducer,
//   applyMiddleware(ReduxPromise) // <=promise ??
// )

ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


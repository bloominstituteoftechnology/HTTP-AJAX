import React, { Component } from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import Friends from './components/Friends';
import { Provider } from 'react-redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
          <Friends />
        </Provider>
      </div>
    );
  }
}

export default App;
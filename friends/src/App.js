import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import FriendList from './components/FriendList';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          path='/friendlist'
          render = {(props) => <FriendList {...props} />}
        />
      </div>
    );
  }
}

export default App;

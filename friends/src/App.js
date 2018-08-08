import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import FriendList from './components/FriendList';
import Navigation from './components/Navigation';
import AddNewFriend from './components/AddNewFriend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          path='/friendlist'
          render = {(props) => <FriendList {...props} />}
        />
        <Route
          path='/add-new-contact'
          render = {(props) => <AddNewFriend {...props} />}
        />

      </div>
    );
  }
}

export default App;

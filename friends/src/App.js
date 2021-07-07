import React, { Component } from 'react';
import { Route } from "react-router-dom";

import FriendList from './components/FriendList';
import FriendPage from './components/FriendPage';

 class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={FriendList} />
        <Route path="/friends/:id" component={FriendPage} />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';

import './App.css';
import { Route } from 'react-router-dom';
import FriendList from './component/FriendList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path='/friends/:id' component={FriendList} 
      render={props => <FriendList {...props} friends={this.state.friends} />} />
      </div>
    );
  }
}

export default App;

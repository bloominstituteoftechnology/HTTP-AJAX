import React, { Component } from 'react';
import FriendList from './FriendsList';

class App extends Component {
  state = {
    friends: []
  };

  render() {
    return (
      <div>
        <h1>Your Friends</h1>
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import FriendsList from 'FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state={
      friendsData:[],
      friend:""
    };
  }

  handleData = data => this.setState ({friendsData:data});

  render() {
    return (
      <div className="App">
        <FriendsList
          handleData={this.handleData}
          friends={this.state.friendsData}
        />
      </div>
    );
  }
}

export default App;

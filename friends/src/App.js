import React, { Component } from 'react';
import './App.css';
import FriendForm from './components/FriendForm';
import FriendList from './components/FriendList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendForm: []
    };
  }

  addToFriendForm = friend => {
    const friendForm = this.state.friendForm;
    friendForm.push(friend);
    this.setState({friendForm})
  }

  render() {
    return (
      <div className="App">
        <FriendForm form={this.state.friendForm} />
        <FriendList />
      </div>
    );
  }
}

export default App;

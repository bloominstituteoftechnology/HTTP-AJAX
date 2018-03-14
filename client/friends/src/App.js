import React, { Component } from 'react';
import logo from './lambda.jpg';
import './App.css';
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';
import axios from 'axios';

class App extends Component {
  state = {
    friends: []
  };

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.log(`There was an error getting friends: ${error}`);
    });
  }

  updateMaster = (newFriend) => {
    this.setState({
      friends: [...this.state.friends, newFriend ]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends</h1>
        </header>
        <div className="divFriendsList">
        <FriendsList masterList={this.state.friends} />
        </div>
        <div className="divNewFriend">
        <NewFriend updateFunc={this.updateMaster} onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  }
}

export default App;

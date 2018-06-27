import React, { Component, Fragment } from 'react';
import axios from 'axios';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: ''
    };
  }

  // componentDidMount() {
  //   axios.get('http://localhost:5000/friends')
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  handleChange = e => {
    this.setState({friend: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const friendsData = this.state.friendsData;
    const friend = {
      "name": this.state.friend
    };
    friendsData.push(friend);
    this.setState({friendsData, friend: ''});
  }
  
  render() {
    return (
      <Fragment>
        <div className="App">
          <h1>Friends App</h1>
          <FriendsForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            friend={this.state.friend}
          />
          <FriendsList />
        </div>
      </Fragment>
    );
  }
}

export default App;

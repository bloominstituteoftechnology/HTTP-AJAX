import React, { Component, Fragment } from 'react';
import axios from 'axios';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <Fragment>
        <div className="App">
          <h1>Friends App</h1>
          <FriendsForm />
          <FriendsList />
        </div>
      </Fragment>
    );
  }
}

export default App;

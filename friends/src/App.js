import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from "axios";

import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import SingleFriendPage from './components/SingleFriendPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }
  addFriend = (newFriend) => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }
  changeInfo = () => {

  }

  render() {
    return (
      <div className="App">
        <h1 className="header">Friends List</h1>
        <div className="content">
          <AddFriendForm addFriend={this.addFriend} />
          <Route exact path="/" render={(props) => <FriendsList {...props} friends={this.state.friends} />} />
          <Route path="/friends/:id" render={(props) => <SingleFriendPage {...props} changeInfo={this.changeInfo} />} />
        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from "axios";

import FriendsList from './components/FriendsList';
import SingleFriendPage from './components/SingleFriendPage';
import EditFriendForm from './components/EditFriendForm';

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
  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => {
        console.log(err);
      })
  }
  editFriend = (id, updatedFriend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(response => {
        this.setState({ friends: response.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <Link to="/"><h1 className="header">Friends List</h1></Link>
        <Route exact path="/" render={(props) => <FriendsList {...props} friends={this.state.friends} addFriend={this.addFriend} />} />
        <Route exact path="/friends/:id" render={(props) => <SingleFriendPage {...props} deleteFriend={this.deleteFriend} />} />
        <Route path="/friends/:id/edit" render={(props) => <EditFriendForm {...props} editFriend={this.editFriend} />} />
      </div>
    );
  }
}

export default App;

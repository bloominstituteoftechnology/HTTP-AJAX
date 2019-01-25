import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import Friend from "./components/Friend";

import axios from 'axios';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }


  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => console.log(err));
  }

  createFriend = friend => {
    axios.post('http://localhost:5000/friends', friend)
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => console.log(err));
  }

  updateFriend = (friend, id) => {
    axios.put(`http://localhost:5000/friends/${id}`, friend)
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => console.log(err));
  }

  deleteFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ friends: response.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/"
          render={props => (
            <Link to={'/friends'}>
              <button>Go to Friends</button>
            </Link>
          )}
        />
        <Route 
          exact path="/friends"
          render={props => (
            <div>
              <FriendsList 
                friends={this.state.friends}
                createFriend={this.createFriend}
                deleteFriend={this.deleteFriend}
              />
            </div>
          )} 
        />
        <Route
          path="/friends/:id"
          render={props => (
            <div>
              <Friend
                updateFriend={this.updateFriend}
                {...props}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;

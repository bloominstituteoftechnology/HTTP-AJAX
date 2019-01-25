import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm';
import Friend from "./components/Friend";

import axios from 'axios';
import { Route } from 'react-router-dom';

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
        // console.log(this.state);
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
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        
        <Route 
          exact path="/friends"
          render={props => (
            <div>
              {/* <NewFriendForm
                create
                createFriend={this.createFriend}
              /> */}
              <FriendsList 
                friends={this.state.friends}
                createFriend={this.createFriend}
              />
            </div>
          )} 
        />
        <Route
          path="/friends/:id"
          render={props => (
            <div>
              {/* <NewFriendForm 
                update
                // updateFriend={this.updateFriend}
              /> */}
              <Friend
                updateFriend={this.updateFriend}
                match={props.match}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;

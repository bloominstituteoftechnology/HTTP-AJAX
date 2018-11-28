import React, { Component } from 'react';
import Friends from './Friends';
import axios from 'axios';
import FriendsForm from './FriendsForm';

class FriendsList extends Component {

    constructor() {
        super();
        this.state = {
          friendsList: []
        };
      }

      componentDidMount() {
        axios
          .get("http://localhost:5000/friends")
          .then(response => {
            console.log(response);
            this.setState({ friendsList: response.data });
          })
    
          .catch(err => {
            console.log(err);
          });
      }
    



  render() {

    return (
      <div className="FriendsList">
        <FriendsForm />
        
        {this.state.friendsList.map(friend => (
          <Friends key={friend.id} friends={friend} />

        ))}
        
      </div>
    );
  }
}

export default FriendsList;
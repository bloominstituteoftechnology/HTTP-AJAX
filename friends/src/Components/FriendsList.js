import React, { Component } from 'react';
import Friends from './Friends';
import axios from 'axios';
import FriendsForm from './FriendsForm';

class FriendsList extends Component {

    constructor() {
        super();
        this.state = {
          friendList: []
        };
      }

      componentDidMount() {
        axios
          .get("http://localhost:5000/friends")
          .then(response => {
            console.log(response);
            this.setState({ friendList: response.data });
          })
    
          .catch(err => {
            console.log(err);
          });
      }
    
      addNewFriend = data => {
        {
          axios
            .post("http://localhost:5000/friends", data)
            .then(response => {
              console.log(response);
              this.setState({
                friendList: response.data
              });
            })
            .catch(err => console.log(err));
        }
      };
    


  render() {

    return (
      <div className="FriendsList">
        <FriendsForm addNewFriend={this.addNewFriend}/>
        
        {this.state.friendList.map(friend => (
          <Friends key={friend.id} friends={friend} />

        ))}
        
      </div>
    );
  }
}

export default FriendsList;
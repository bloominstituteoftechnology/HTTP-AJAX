import React, { Component } from 'react';
import axios from 'axios';
import './Friends.css';
import AddFriend from './AddFriend';
import OriginalFriends from './OriginalFriends';

export default class FriendsList extends Component {
   constructor() {
      super();
      this.state = {
         friends: []
      };
   }

   componentDidMount() {
      axios
         .get('http://localhost:5000/friends')
         .then(response => {
            this.setState({ friends: response.data });
         })
         .catch(error => console.log(error));
   }

   deleteFriend = id => {
      axios
         .delete(`http://localhost:5000/friends/${id}`)
         .then(response => this.setState({ friends: response.data }));
   };

   render() {
      return (
         <div>
            <AddFriend />
            <OriginalFriends
               originalState={this.state}
               delete={this.deleteFriend}
            />
         </div>
      );
   }
}

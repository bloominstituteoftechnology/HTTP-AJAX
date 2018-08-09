import React, { Component } from 'react';
import axios from 'axios';

import './friends.css';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [] 
    };
  }

  componentDidMount() {
    const endpoint = 'http://localhost:5000/friends';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  }

  render() {
   return (
      <div className="container">
         <h1 className="custom-title">Submit your information!</h1>
         <form className="custom-form">
            <input placeholder="name" type="text"/>
            <input placeholder="age" type="number"/>
            <input placeholder="email" type="text"/>
         </form>
         <ul className="friend-grid">
            {this.state.friends.map(friend => {
               return <li key={friend.id} className="friend">
                  <div className="friend-name">{`Name: ${friend.name}`}</div>
                  <div className="friend-age">{`Age: ${friend.age}`}</div>
                  <div className="friend-email">{`email: ${friend.email}`}</div>
               </li>;
            })}
         </ul>
      </div>
   )};
}
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import NewFriend from './NewFriend'

export default class MovieList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        friends: [] 
      };
    }

    componentDidMount() {
        axios
          .get('http://localhost:5000/friends')
          .then(response => {
            this.setState(() => ({ friends: response.data }));
          })
          .catch(error => {
            console.error('Server Error', error);
          });
    }

    render() {
        const newFriendFormData = new FormData();
        return (
            <div className="friend-list">
                {this.state.friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
                ))}
                <NewFriend />
            </div>
        );
    }
}

function Friend({ friend }) {
    const { name, age, email } = friend;
    return (
      <div className="friend-card">
        <h2>{name}</h2>
          <div className="email">
            Email: <em>{email}</em>
          </div>
          <div className="age">
            Age: <strong>{age}</strong>
          </div>
      </div> 
    );
} 
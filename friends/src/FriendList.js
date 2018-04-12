import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Number } from 'core-js/library/web/timers';
import Friend from './Friend';

class FriendList extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }


  componentDidMount(){
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
      .catch(error => {
        console.error('Server Error', error)
      });
    }

  render() {
    return (
        <div>
          <div className="friend-title">Lambda Friends</div>
          <ul className="friend-grid">
            {this.state.friends.map(friend => {
              return (
                <Friend friend={friend} key={friend.id} />
              );
            })}
          </ul>
        </div>
      );
    }
}



export default FriendList;

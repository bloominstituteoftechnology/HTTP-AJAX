import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    render() {
        return (
          <div>
            <div >Lambda Friends</div>
            <ul>
              {this.state.friends.map(friend => {
                return (
                  <li key={friend.id}>
                    <div>{friend.name}</div>
                    <div>{`Age: ${friend.age}`}</div>
                    <div>{`Email: ${friend.email}`}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }

      componentDidMount() {
        axios.get('http://localhost:5000/friends')
          .then(response => {
            this.setState({ friends: response.data });
          })
          .then(response => response)
          .catch(error => {
            console.log(`Error getting friends: ${error}`);
          })
      }
}
export default FriendsList;
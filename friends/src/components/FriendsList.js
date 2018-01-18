import React from 'react';
import axios from 'axios';
import './FriendsList.css';

class FriendsList extends React.Component {
  state = {
    friends: [],
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
      })
  }

  render() {
    return (
      <div>
        <h1>Friends in Lambda Places</h1>
        <ul className="friend-container">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div>{friend.name}</div>
                <div>{`Age: ${friend.age}`}</div>
                <div>{`Email: ${friend.email}`}</div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default FriendsList;
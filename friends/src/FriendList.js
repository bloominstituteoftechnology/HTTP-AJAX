import React from 'react';
import axios from 'axios';

class FriendList extends React.Component {
  state={
    friends: [],
  }
  render() {
    return (
      <ul>
        {this.state.friends.map((friend) => {
          return ( 
          <li key={friend.id}>
            {friend.name}
          </li>
          );
        })}
      </ul>
    );

  }
  componentDidMount() {
    axios.get('http://localhost:5000/friends').then((response) => {
      this.setState({
        friends: response.data
      })
    }).catch(() => {
      console.error('error getting data');
    });
  }
}

export default FriendList;

// http://localhost:5000/friends

import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/friends`)
      .then(response => {
        const friends = response.data;
        this.setState({friends});
      });
  }

  render() {
    return (
      <ul>
        {this.state.friends.map(friend => <li key={friend.id}>{friend.name}</li>)}
      </ul>
    );
  }
}

export default FriendsList;
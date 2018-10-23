import React from 'react';
import axios from 'axios';
import Friend from './Friend';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends').then(data => {
      console.log(data.data);
      this.setState({ friends: data.data });
      console.log(this.state);
    });
  }
  render() {
    return (
      <div>
        <h1>Friends List</h1>
        {this.state.friends.map(friend => {
          return <Friend name={friend.name} />;
        })}
      </div>
    );
  }
}

export default FriendsList;

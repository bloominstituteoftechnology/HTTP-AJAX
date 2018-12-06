import React from 'react';
import axios from 'axios';

export default class FriendList extends React.Component {
  state = {
    friends: []
  }
  componentDidMount() {
    axios.get(`https://localhost:5000`)
      .then(res => {
        this.setState({ friends: res.data })
      })
  }
  render() {
    return (
      <div>
        {this.state.friends.map(friend => {friend.name})}
      </div>
    )
  }
}

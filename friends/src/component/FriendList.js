import React from 'react';
import axios from 'axios';

export default class FriendList extends React.Component {
  state = {
    friends: []
  }
  componentDidMount() {
    axios.get(`https://localhost:5000/friends`)
      .then(res => {
        console.log(res)
        this.setState({ friends: res.name })
        render() {
            <div>
              {this.state.friends.map(friend => <div>{friend.name}</div>)}
              {this.state.friends.map(friend => <div>{friend.id}</div>)}
              {this.state.friends.map(friend => <div>{friend.email}</div>)}
              {this.state.friends.map(friend => <div>{friend.age}</div>)}
            </div>
        }
      })
  }
}

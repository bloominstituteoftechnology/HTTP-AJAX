import React, { Component } from 'react';
import axios from 'axios';
import './FriendPage.css'

class FriendPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [{name: 'loading'}],
    }
    this.filterFriends = this.filterFriends.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(res => this.setState({ friends: res.data }))
    .then(this.filterFriends)
  }

  filterFriends() {
    let filteredFriend;
    this.state.friends.forEach(friend => {
      if (friend.id === parseInt(this.props.match.params.id)) {
        filteredFriend = friend;
      }
    })
    // const friend = this.state.friends.filter(friend => {
    //   friend.id === parseInt(id);
    // })
    this.setState({ friends: [filteredFriend] })

    console.log(this.state.friends)
    console.log(filteredFriend)
  }

  render() {
    return (
      <ul>
        {this.state.friends.map(friend => {
          return <li key={friend.id}>
            <h3>{friend.name}</h3>
            <h4>{friend.age}</h4>
            <h5>{friend.email}</h5>
          </li>
        })}
      </ul>
    )
  }
}
export default FriendPage;

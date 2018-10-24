import React from 'react';
import axios from 'axios';
import './FriendList.css';

export default class FriendList extends React.Component {
  state = {
    friends: []                             
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        const friends = res.data;
        this.setState({ friends })
      })
  }

  render() {
    return (
      <ul>
        {this.state.friends.map(friend => (
          <div key={friend.id}>
            <li><span>Name:</span> {friend.name}</li>
            <li><span>Age:</span> {friend.age}</li>
            <li><span>Email:</span> {friend.email}</li>
          </div>  
        ))}
    </ul>   
    )     
  }

}
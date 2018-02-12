import React, { Component } from 'react';
import axios from 'axios';
// import Friend from './friend';

class FriendsList extends Component {
  state = {
    friends: []
  }

  render() {
    return (
   <div>
     <ul>
       {this.state.friends.map((friend) => {
         return (
           <li key={friend.id}>
            <div>{friend.name}</div>
            <div>{friend.age}</div>
            <div>{friend.email}</div>
           </li>
         )
       })}
     </ul>

   </div>
    )
  }

  componentDidMount() {
    axios
    .get(`http://localhost:5000/friends`)
    .then((response) => {
      // console.log(response.data)
      this.setState({friends: response.data})
    })
    .catch((error) => {
      console.log('Error: ${error}')
    })
  }
}

export default FriendsList
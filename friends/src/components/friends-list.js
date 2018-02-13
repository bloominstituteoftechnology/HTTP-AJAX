import React, { Component } from 'react';
import axios from 'axios';
import Friend from './friend';
import Form from './form';

class FriendsList extends Component {
  state = {
    friends: [],
    nextId: undefined,
  }

  render() {
    return (
   <div>
     <ul className="FriendsList">
       {this.state.friends.map((friend) => {
         this.nextId = friend.id;
         return (
           <div key={friend.id} style={{ border: '1px solid black'}}>
           <Friend friend={friend}/>
           </div>
         )
       })}
     </ul>
     <Form nextId={this.state.nextID}/>
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
      console.log(`Error: ${error}`)
    })

  }
}

export default FriendsList
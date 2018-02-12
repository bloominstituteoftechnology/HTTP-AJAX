import React, { Component } from 'react';
import axios from 'axios';
import Friend from './friend';
// import Form from './form';

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
           <div key={friend.id} style={{ border: '1px solid black'}}>
           <Friend friend={friend}/>
           </div>
         )
       })}
     </ul>
     {/* <Form /> */}
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
import React, { Component } from 'react';
import axios from 'axios';
import Friend from './friend';
import Form from './form';

class FriendsList extends Component {
  state = {
    friends: [],
  }

  render() {
    return (
   <div className="FriendsList" style={{display: 'flex', flexFlow: 'column', alignItems: 'center', width: 'auto'}}>
     <ul className="FriendsList__current" style={{listStyleType: 'none', padding: '0'}}>
       {this.state.friends.map((friend) => {
         return (
           <li key={friend.id} style={{'border': '3px solid black', marginTop: '-3px'}}>
            <Friend friend={friend}/>
           </li>
         )
       })}
     </ul>
     <Form className="FriendsList__form" />
   </div>
    )
  }

  componentDidMount() {
    axios
    .get(`http://localhost:5000/friends`)
    .then((response) => {
      this.setState({friends: response.data})
    })
    .catch((error) => {
      console.log(`Error: ${error}`)
    })
  }
} // FriendsList component

export default FriendsList
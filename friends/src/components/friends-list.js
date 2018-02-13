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
   <div className="FriendsList" style={{display: 'flex', flexFlow: 'row', width: '30%'}}>
     <Form className="FriendsList__form" />
     <ul className="FriendsList__current" style={{
       listStyleType: 'none', 
       margin: '0', 
       padding: '0', 
       display: 'flex', 
       flexFlow: 'column wrap', 
       height: '700px',
       }}>
       {this.state.friends.map((friend) => {
         return (
           <li key={friend.id} style={{'border': '3px solid black', margin: '-3px 0 0 -3px'}}>
            <Friend friend={friend}/>
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
      this.setState({friends: response.data})
    })
    .catch((error) => {
      console.log(`Error: ${error}`)
    })
  }
} // FriendsList component

export default FriendsList
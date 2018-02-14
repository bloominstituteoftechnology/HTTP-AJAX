import React, { Component } from 'react';
import axios from 'axios';
import Friend from './friend';
import Form from './form';

class FriendsList extends Component {
  state = {
    friends: [],
    'name': '',
    'age': '',
    'email': ''
  }

  render() {
    return (
   <div className="FriendsList" style={{display: 'flex', flexFlow: 'row', width: '30%'}}>
     <Form className="FriendsList__form" handleChange={this.handleChange} onSubmit={this.onSubmit} />
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
            <Friend friend={friend} />
             <button onClick={ () => {this.deleteFriend(friend.id)} }>Delete</button>
           </li>
         )
       })}
     </ul>
   </div>
    ) // return
  } // render()

  componentDidMount() {
    this.loadFriends();
  }
  
  loadFriends = () => {
    axios
    .get(`http://localhost:5000/friends`)
    .then((response) => {
      this.setState({friends: response.data})
    })
    .catch((error) => {
      console.log(`Error: ${error}`)
    })
  }

  handleChange = (event) => {
    let {name, value} = event.target;
    if (event.target.type === 'number') value = Number(value);
    this.setState({ [name]: value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    let { name, age, email } = this.state;
    axios
    .post('http://localhost:5000/friends', {name, age, email})
    .then((response) => {
      console.log(`Response: ${response}`)
      this.loadFriends()
    })
    .catch((error) => {
      console.log(`Error: ${error}`)});
  }

  deleteFriend = (id) => {
    let friendUrl = `http://localhost:5000/friends/${id}`
    axios
    .delete(friendUrl)
    .then((response) => {
      console.log(`Reponse: ${response}`);
      this.setState({friends: response.data});
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    })
  }
} // FriendsList component

export default FriendsList
import React, { Component } from 'react';
import axios from 'axios';

import './friends.css';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name:'',
      age: null,
      email: ''
    };
  }

  componentDidMount() {
    const endpoint = 'http://localhost:5000/friends';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  }

  handleChange = (event) => {
     this.setState({
        [event.target.name]: event.target.value,
     });
  }

  addNewFriend= () => {
   

      const newFriendObj = {
         name: this.state.name,
         age: this.state.age,
         email: this.state.email
      }

      axios
      .post('http://localhost:5000/friends', newFriendObj)
      .then(response => {
         this.setState({ friends: response.data });
      })
      .catch(error => {
         console.log('Error: ', error);
      });
  }

  render() {
   return (
      <div className="container">
         <h1 className="custom-title">Submit your information!</h1>

         <form className="custom-form">
            <input onChange={this.handleChange} name="name" value={this.state.name} placeholder="name" type="text"/>
            <input onChange={this.handleChange} name="age" value={this.state.age} placeholder="age" type="number"/>
            <input onChange={this.handleChange} name="email" value={this.state.email} placeholder="email" type="email"/>
            <button onClick={this.addNewFriend}>Submit</button>
         </form>

         <ul className="friend-grid">
            {this.state.friends.map(friend => {
               return <li key={friend.id} className="friend">
                  <div className="friend-name">{`Name: ${friend.name}`}</div>
                  <div className="friend-age">{`Age: ${friend.age}`}</div>
                  <div className="friend-email">{`email: ${friend.email}`}</div>
               </li>;
            })}
         </ul>
      </div>
   )};
}
import React, { Component } from 'react';
import axios from 'axios';

import Friend from './Friend';
import Form from './Form';


class FriendsList extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: null,
        email: ''
      }
    }
  }

  componentDidMount(){
    axios
    .get('http://localhost:5000/friends')
    .then( response => {
      this.setState({ friends: response.data });
    })
    .catch( error => {
      console.error('Server Error', error);
    })
  }

  addFriend = event => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/friends', this.state.newFriend )
      .then( response => {
        this.setState(
          { friends: response.data,
          newFriend: {
            name: '',
            age: null,
            email: ''
          }}
        )
      })
      .catch( error => {
        console.error(error)
      })
  }

  handleChange = event => {
    this.setState({ 
      newFriend: {
        ...this.state.newFriend,
        [event.target.name]: event.target.value 
      }
    });
  }

  handleDelete = (event, id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then( response => this.setState({ 
        friends: response.data }))
      .catch( error => {
        console.error(error)
      })

  }

  render(){
    return (
      <div className="friend-wrapper">
        <div className="friend-list">
          {this.state.friends.map( friend => (
              <Friend 
                key={friend.id}  
                friend={friend} 
                handleDelete={this.handleDelete}
              />  
          ))}
        </div>
        <div className="form-wrapper">
            <Form>
              onSubmit={this.addFriend}
              handleChange={this.state.handleChange}
              friend={this.state.newFriend}
            </Form>
            <button onClick={this.addFriend}>Add Friend</button>
        </div>
      </div>
    );
  }
  
}

export default FriendsList;
import React, { Component } from 'react';
import axios from 'axios';
import './FriendList.css';
import AddFriend from './AddFriend';
import UpdateFriend from './UpdateFriend';

const blankFormValues = {
  name: '',
  age: '',
  email: ''
};

export default class FriendList extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: '',
        email: ''
      },
      updateID: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data })
      })
  }

  handleChange = event => {
    this.setState({ friend: { ...this.state.friend, [event.target.name]: event.target.value } })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.friend)
      .then(res => {
        this.setState({ friends: res.data, friend: blankFormValues })
      })
      event.target.reset();
  }

  handleUpdateChange = (event) => {
    this.setState({ updateID: event.target.value })
  }

  handleUpdateSubmit = event => {
    event.preventDefault();
    axios.put(`http://localhost:5000/friends/${this.state.updateID}`, this.state.friend)
      .then(res => {
        this.setState({ friends: res.data, friend: blankFormValues })
      })
      event.target.reset();
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data })
      })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.friends.map(friend => (
            <div className='friend' key={friend.id}>
              <li><span>ID:</span> {friend.id}</li>
              <li><span>Name:</span> {friend.name}</li>
              <li><span>Age:</span> {friend.age}</li>
              <li><span>Email:</span> {friend.email}</li>
              <button onClick={event => this.deleteFriend(event, friend.id)}>Delete</button>
            </div>  
          ))}
      </ul>
      <AddFriend handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      <UpdateFriend handleUpdateChange={this.handleUpdateChange} handleChange={this.handleChange} handleUpdateSubmit={this.handleUpdateSubmit}/>
    </div>   
    )     
  }

}
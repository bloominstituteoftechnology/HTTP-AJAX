import React, { Component } from 'react'
import axios from 'axios';

export default class FriendList extends Component {
  constructor() {
    super();
    this.state = {
      friend: [],
      name: '',
      age: '',
      email: '',
    }
  }

  componentDidMount(){
    this.fetchUsers()
  }

  fetchUsers = () => {
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({friend: response.data}))
    .catch( error => console.log(`${error}`))
  }

  render() {
    return(
      <div>
      <ul>
        {this.state.friend.map((friend) => {
          return(
            <li key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            </li>
          );
        })}
      </ul>
      </div>
    );
  }
}
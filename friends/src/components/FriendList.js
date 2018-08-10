import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import FriendCard from './FriendCard';
import FormInput from './FormInput';

 export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      loading: true,
      name: "",
      age: "",
      email: ""
    };
  }

   componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({
          friends: response.data,
          loading: false
        }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewFriend = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email:this.state.email
    })
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

   render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    } else if (!this.state.loading) {
      return (
        <div>
        {this.state.friends.map(friend => (
          <Link to={`/friends/${friend.id}`} key={friend.id}>
          <FriendCard friend={friend} />
          </Link>
        ))}
          <FormInput
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          handleChange={this.inputHandler}
        />
        <button onClick={this.addNewFriend}>Add Friend</button>
        </div>
    )}}
  
  }
 

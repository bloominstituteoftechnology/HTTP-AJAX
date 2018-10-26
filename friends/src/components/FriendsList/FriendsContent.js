import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import FriendsList from './FriendsList.js';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

class FriendsContent extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response);
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }

  inputChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  subNewFriend = (e) => {
    e.preventDefault();
    console.log(this.state);
    // const friend = {
    //   name: this.state.name,
    //   age: this.state.age,
    //   email: this.state.email
    // }
    axios
      .post('http://localhost:5000/friends', {name: this.state.name, age: this.state.age, email: this.state.email})
      .then(response => {
        this.setState({friends: response.data})
        console.log(response)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <ContentWrapper>
      <form onSubmit={this.subNewFriend}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={this.inputChangeHandler}
        />
        <input
          type='text'
          name='age'
          placeholder='Age'
          onChange={this.inputChangeHandler}
        />
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={this.inputChangeHandler}
        />
        <button type='submit'>Create Friend</button>
      </form>
        <FriendsList friends={this.state.friends} />
      </ContentWrapper>
    )
  }
}

export default FriendsContent;

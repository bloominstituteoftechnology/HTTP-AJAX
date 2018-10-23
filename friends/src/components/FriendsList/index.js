import React, { Component } from 'react';
import axios from 'axios';
import Styled from 'styled-components';

const FriendsList = Styled.section`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const Friend = Styled.section`
  align-items: flex-start;
    background-color: lightgray;
    border: 1px solid aqua;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    min-width: 300px;
`;

const Title = Styled.h1`
    font-size: 36px;
`;
const FriendHeader = Styled.h1`
    background-color: gray;
    border-top: 2px solid aqua;
    font-size: 24px;
    margin: 0;
    width: 100%;
`;

const FriendPara = Styled.p`
    padding: 0 10px;
`

export default class extends Component {
  constructor() {
    super();

    this.state = {
      friends: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3020/friends/')
         .then(response => {this.setState({friends: response.data})})
         .catch(err => console.log(err));
  }
  render() {
    return (
      <FriendsList>
        <Title>Friends</Title>
        {this.state.friends.map(friend => {
        return  (
          <Friend key={friend.id}>
            <FriendHeader>{friend.name}</FriendHeader>
            <FriendPara>Age: {friend.age}</FriendPara>
            <FriendPara>Email: <strong>{friend.email}</strong></FriendPara>
          </Friend>
        )
        })}
      </FriendsList>
    );
  }
}

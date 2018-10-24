import React, { Component } from 'react';
import Styled from 'styled-components';
import axios from 'axios';

import FriendForm from '..//FriendForm';

const FriendContainer = Styled.section`
    display:flex;
    justify-content: space-around;
    width: 100%;
`;

const Container = Styled.section`
    width: 100%;
`;

const FriendsList = Styled.section`
    display: flex;
    flex-direction: column;
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
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {}
  }
}
componentDidMount() {
  axios.get('http://localhost:3020/friends/')
       .then(response => {this.setState({friends: response.data})})
       .catch(err => console.log(err));
}
add = (obj) => {
  const friends = JSON.parse(JSON.stringify(this.state.friends));
  const index = this.state.friends.length+1;
  obj.id = index;
  this.setState({
  friends: friends.concat(obj)
});
}
  render() {
    return (
      <Container>
        <Title>Friends</Title>
      <FriendContainer >
        <FriendsList>
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
        <FriendForm addFriend={this.add}/>
      </FriendContainer>
    </Container>
    );
  }
}

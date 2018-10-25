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
const FriendHeader = Styled.section`
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: gray;
    border-top: 2px solid aqua;
    margin: 0;
    width: 100%;
`;
const FriendName = Styled.p`
    font-size: 24px;
    margin: 0;
    padding-left: 10px;
    width: auto;
`;

const FriendPara = Styled.p`
    padding: 0 10px;
`;

const Edit = Styled.p`
    &:hover {background-color: black; color: white; cursor: pointer;}
    border: 1px solid black;
    border-radius: 3px;
    padding: 2px;
    font-size: 16px;
    font-weight: bold;
    margin-right: 5px;
    width: 70px;
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      newFriend: {},
      editFriend: false
  }
}
componentDidMount() {
  axios.get('http://localhost:3020/friends/')
       .then(response => {this.setState({friends: response.data})})
       .catch(err => console.log(err));
}
add = (obj) => {
  axios.post('http://localhost:3020/friends/', obj)
    .then(response => {
      this.setState({friends: response.data})
    })
    .catch(function(error) {
      console.log(error);
    })
}
edit = (e) => {
  console.log(e);
}
delete = (e) => {
  console.log(e);
  const friendID = e.target.parentNode.parentNode.id;

  axios.delete(`http://localhost:3020/friends/${friendID}`)
        .then(response => {this.setState({friends: response.data})})
        .catch(err => console.log(err));
}

  render() {
    return (
      <Container>
        <Title>Friends</Title>
      <FriendContainer >
        <FriendsList>
        {this.state.friends.map(friend => {
          return  (
            <Friend key={friend.id} id={friend.id}>
              <FriendHeader>
                <FriendName>{friend.name}</FriendName>
                <Edit onClick={this.edit}>Edit</Edit>
              <button onClick={this.delete}>delete</button>
              </FriendHeader>
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

import React from 'react';
import styled from 'styled-components';
import {NavLink } from 'react-router-dom';

const FriendDiv = styled.div`
  background: #000010;
  width: 400px;
  height: 450px;
  margin: 10px 5px;
  `;

const FriendH1 = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #00BBC4;
  padding: 10px 5px;
  `;

const FriendSpan = styled.span`
  font-size: 1.5rem;
  color: #FFF`;

const Button = styled.button`
  width: 150px;
  color: #000;
  padding: 15px 10px;
  margin: 15px 15px;
  text-align: center;
  background: #00BBC4;
`;




class Friend extends React.Component{

  deleteFriend = (e, id) => {
    id = this.props.friend.id
    e.preventDefault();
    this.props.deleteFriend(id)
  }

  render(){
    return (
      <FriendDiv>
        <FriendH1>Name:<br/> <FriendSpan>{this.props.friend.name}</FriendSpan></FriendH1>
        <FriendH1>Email:<br/><FriendSpan>{this.props.friend.email}</FriendSpan></FriendH1>
        <FriendH1>Age:<br/><FriendSpan>{this.props.friend.age}</FriendSpan></FriendH1>
        <Button onClick={this.deleteFriend}>Delete</Button>
        <Button><NavLink to={`/friends/${this.props.friend.id}`}>Edit</NavLink></Button>


      </FriendDiv>
    )
  }
}


export default Friend

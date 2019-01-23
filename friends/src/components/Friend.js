import React from 'react';
import styled from 'styled-components';

const FriendDiv = styled.div`
  background: #000010;
  width: 400px;
  height: 350px;
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

const Friend = props => {
  return (
    <FriendDiv>
      <FriendH1>Name:<br/> <FriendSpan>{props.friend.name}</FriendSpan></FriendH1>
      <FriendH1>Email:<br/><FriendSpan>{props.friend.email}</FriendSpan></FriendH1>
      <FriendH1>Age:<br/><FriendSpan>{props.friend.age}</FriendSpan></FriendH1>
    </FriendDiv>
  )
}


export default Friend

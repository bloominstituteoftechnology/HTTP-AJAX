import React from 'react';
import styled from 'styled-components';

const FriendDiv = styled.div`
  width: 300px;
  margin-left: 40%;
  margin-bottom: 5px;
  border: 1px solid black;
  padding-left: 15px;
`;

const Friend = props => (
  <FriendDiv>
    <p>Name: {props.friend.name}</p>
    <p>Age: {props.friend.age}</p>
    <p>email: {props.friend.email}</p>
  </FriendDiv>
);

export default Friend;

import React from 'react';
import styled from 'styled-components';

const FriendCard = (props) => {
  return (
    <Card>
      <Name>{props.friend.name}</Name>
      <Data>Age: {props.friend.age}</Data>
      <Data>Email: {props.friend.email}</Data>
    </Card>
  );
};

export default FriendCard;

const Card = styled.div`
  text-align: center;
  margin: 30px 1%;
  width: 22%;
`;

const Name = styled.h1`
  font-size: 2rem;
  margin-bottom: 12px;
  font-weight: 500;
`;

const Data = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 12px;
`;

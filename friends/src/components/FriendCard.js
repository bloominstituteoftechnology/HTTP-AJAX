import React from 'react';
import styled from 'styled-components';

const FriendCard = (props) => {
  return (
    <Card>
      <h1>{props.friend.name}</h1>
      <h3>Age: {props.friend.age}</h3>
      <h3>Email: {props.friend.email}</h3>
    </Card>
  );
};

export default FriendCard;

const Card = styled.div`
  text-align: center;
  margin: 30px;
`;

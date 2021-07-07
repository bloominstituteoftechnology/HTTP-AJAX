import React from 'react';
import styled from 'styled-components';

const FriendCard = (props) => {
  function deleteFriend() {
    // console.log('test friend card delete friend');
    props.deleteFriend(props.friend.id);
  }

  return (
    <Card>
      <XButton onClick={deleteFriend}>X</XButton>
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
  position: relative;
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

const XButton = styled.button`
  border: none;
  position: absolute;
  left: 40px;
  top: 4px;
  font-size: 1rem;
  padding: 0px 2px;

  &:hover {
    background: #db1111;
    color: white;
  }
`;

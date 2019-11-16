import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FriendLiElement = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  border-bottom: 1px #e0e6e8 solid;
  background-color: #fff;
  transition: all .5s linear;

  &:hover {
    background-color: #edf8ff;
  }
`;

const FriendNameElement = styled.div`
  width: 15%;
`;

const FriendAgeElement = styled.div`
  width: 10%;
`;

const FriendEmailElement = styled.div`
  width: 35%;
`;

const FriendButtonContainerElement = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
`;

const UpdateButtonElement = styled.button`
  margin: 0 10px 0 0;
`;

const Friend = props => {
  return(
    <FriendLiElement key={`${props.friend.id}-${Math.random()}`}>
      <FriendNameElement>{props.friend.name}</FriendNameElement>
      <FriendAgeElement>{props.friend.age}</FriendAgeElement>
      <FriendEmailElement>{props.friend.email}</FriendEmailElement>
      <FriendButtonContainerElement>
        <Link to={`/update/${props.friend.id}`}>
          <UpdateButtonElement><div>Update</div></UpdateButtonElement>
        </Link>
        <button onClick={() => {props.onDeleteFriend(props.friend.id)}}><div>Delete</div></button>
      </FriendButtonContainerElement>
    </FriendLiElement>
  );
}

export default Friend;

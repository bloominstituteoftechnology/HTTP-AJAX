import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';

const FriendListContainer = styled.div`
  border: 1px solid red;
  max-width: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FriendsList = props => {
  return (
    <FriendListContainer>
      {props.friends.map(friend => <Friend friend={friend} deleteFromServer={props.deleteFromServer}/>)}
    </FriendListContainer>
  );
};

export default FriendsList;

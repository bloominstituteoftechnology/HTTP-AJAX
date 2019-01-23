import React from 'react';
import styled from 'styled-components';
import Friend from './Friend';

const FriendListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  align-items: center;
  justify-content: left;
  `;

const FriendList = props => {
  return (
    <FriendListDiv>
      { props.friends.map(friend => (
        <Friend key={friend.id} friend = {friend} />
      ))}
    </FriendListDiv>
  )
}

export default FriendList;

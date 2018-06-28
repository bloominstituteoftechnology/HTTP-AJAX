import React from 'react';
import Friend from './Friend';
import styled from 'styled-components';

const FriendsListUlElement = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 850px;
  width: 100%;
  border-top: 1px #e0e6e8 solid;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3);
`;

const FriendsList = props => {
  return(
    <FriendsListUlElement>
      {props.friends.map(friend => {
        return(
          <Friend key={`${friend.id}-${Math.random()}`} friend={friend} onDeleteFriend={props.onDeleteFriend} />
        )})
      }
    </FriendsListUlElement>
  )
}

export default FriendsList;

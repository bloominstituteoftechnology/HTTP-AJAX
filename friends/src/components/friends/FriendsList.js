import React from 'react';
import FriendCard from './FriendCard';
import styled from 'styled-components';

function FriendsList(props) {
  console.log(props.friends);
  return (
    <List>
      {props.friends.map((friend) => (
        <FriendCard friend={friend} key={friend.id} />
      ))}
    </List>
  );
}

export default FriendsList;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

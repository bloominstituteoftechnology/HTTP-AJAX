import React from 'react';
import styled from 'styled-components';

const FriendsWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const FriendsCardWrapper = styled.div`
  border: 1px solid white;
  padding: 30px;
`;

function FriendsList(props) {
  console.log('friends props are: ', props);
  return (
    <FriendsWrapper>
      {props.friends.map(friend => (
        <FriendsCardWrapper className="friend-card" key={friend.id}>
          <h2>{friend.name}</h2>
          <p>{friend.age}</p>
          <code>{friend.email}</code>
        </FriendsCardWrapper>
      ))}
    </FriendsWrapper>
  );
}

export default FriendsList;

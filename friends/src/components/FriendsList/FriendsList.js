import React from 'react';
import styled from 'styled-components';

import Friend from './Friend.js';

const ListWrapper = styled.div`

`;

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
          />
        )
      })}
    </div>
  );
}

export default FriendsList;

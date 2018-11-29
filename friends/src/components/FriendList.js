import React from 'react';
import { Segment, Card } from 'semantic-ui-react';

import FriendCard from './FriendCard';

const FriendList = ({ friends, deleteFriend }) => {
  return (
    <Segment>
      <Card.Group centered style={{padding: '40px 0'}}>
        {
          friends.map(friend => (
            <FriendCard
              key={friend.id}
              deleteFriend={deleteFriend}
              friend={friend}
              />
          ))
        }
      </Card.Group>
    </Segment>
  );
}

export default FriendList;
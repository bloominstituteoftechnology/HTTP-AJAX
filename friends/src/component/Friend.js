import React from 'react';
import { FriendWrapper } from '../styles/friendStyles';

const Friend = (props) => {
  return ( 
    <FriendWrapper>
      {props.friend.name}
    </FriendWrapper>
   );
}
 
export default Friend;
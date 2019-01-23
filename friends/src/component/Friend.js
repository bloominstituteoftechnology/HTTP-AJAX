import React from 'react';
import Roll from 'react-reveal/Roll';

import { FriendWrapper, Info } from '../styles/friendStyles';


const Friend = (props) => {
  return ( 
    <Roll cascade>
      <FriendWrapper>
        <label>Name: </label>
        <Info>{props.friend.name}</Info>
        <label>Age: </label>
        <Info>{props.friend.age}</Info>
        <label>Email: </label>
        <Info>{props.friend.email}</Info>
      </FriendWrapper>
    </Roll>
   );
}
 
export default Friend;
import React from 'react';
import Roll from 'react-reveal/Roll';

import { FriendWrapper, Info, Card } from '../styles/friendStyles';


const Friend = (props) => {
  return ( 
    <Roll cascade>
      <Card>
        <FriendWrapper>
          <label>Name: </label>
          <Info>{props.friend.name}</Info>
          <label>Age: </label>
          <Info>{props.friend.age}</Info>
          <label>Email: </label>
          <Info>{props.friend.email}</Info>
        </FriendWrapper>
        <i className="fas fa-minus-circle" onClick={() => props.delete(props.friend.id)}></i>
      </Card>
    </Roll>
   );
}
 
export default Friend;
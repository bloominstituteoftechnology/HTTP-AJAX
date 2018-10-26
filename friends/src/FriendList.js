import React, {Fragment} from 'react';
import Friend from './Friend';
 const FriendList = props => {
    return (
    <Fragment>
      {props.friend.map((friend, id) => (
        <Friend key={id} friend={friend} handleDelete={props.handleDelete} />
      ))}
    </Fragment>
    );
  };
  
  export default FriendList;
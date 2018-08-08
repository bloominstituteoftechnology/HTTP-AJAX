import React from 'react';
import { Link } from 'react-router-dom';

import FriendDisplay from './FriendDisplay';

const FriendList = props => {
  return (
    <div>
      {props.isLoading ?
        <h1>Loading Friends, please hold...</h1> :
        props.friends.map(friend => <FriendDisplay key={friend.id} {...friend} />)
      }
      <Link to="/new"><div className="btn add-friend-btn">Add New Friend</div></Link>
    </div>
  );
}

export default FriendList;

import React from 'react';
import { Link } from 'react-router-dom';
import './friend.css';

import FriendDisplay from './FriendDisplay';

const FriendList = props => {
  return (
    <div className="friend-list">
      {props.isLoading ?
        <h1>Loading Friends, please hold...</h1> :
        props.friends.map(friend => <FriendDisplay key={friend.id} {...friend} />)
      }
      <Link to="/new"><div className="add-friend-btn">Add New Friend</div></Link>
    </div>
  );
}

export default FriendList;

import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';

function FriendList(props) {

  return(
    <div className='friend-list'>
      {props.friend.map((f, i) => (
        <Friend key={i} friend={f} />
      ))}
    </div>
  );
  
}

FriendList.propTypes = {
  friend: PropTypes.array
}

export default FriendList;
import React from 'react';
import PropTypes from 'prop-types';

function DisplayFriends(props) {
  return (
    <div className="friends-list">
      <ul>
        {props.friends.map(friend => {
          return (
            <li key={friend.id} className="friend">
              <div className="friend-name">{friend.name}</div>
              <div className="friend-age">{friend.age}</div>
              <div className="friend-email">{friend.email}</div>
              <button onClick={() => {props.onDelete(friend.id)}}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

DisplayFriends.propTypes = {
  friends: PropTypes.array.isRequired,
}

export default DisplayFriends;
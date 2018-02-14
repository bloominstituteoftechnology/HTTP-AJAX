import React from 'react';
import PropTypes from 'prop-types';


function Friends(props) {
  return (
    <div>
    <div>
      <h1>Lambda Friends</h1>
    </div>
    <ul>
      {props.friendList.map(friend => { return(
        <li key = {friend.email}>
        <button>Delete Friend</button>
          <div>Name: {friend.name}</div>
          <div>Age: {friend.age}</div>
          <div>E-Mail: {friend.email}</div>
        </li>
    )  })}
    </ul>
    </div>
  );
}

Friends.proptype = {
  friends: PropTypes.array.isRequired,
}

export default Friends;

import React from 'react';
import PropTypes from 'prop-types';

import './FriendsList.css';

// import Form from './FormComponent';

function FriendsList(props) {

  return (
    <div>
      <div className="friend-title"><h1>Friends</h1></div>
      <ul className="friend-grid">
        {props.friends.map(friend => {
          return (
            <li key={friend.id} className="friend">
              <button onClick={ () => {props.onDelete(friend.id)} }>Delete</button>
              <div className="friend-name">{friend.name}</div>
              <div className="friend-age">{`Age: ${friend.age}`}</div>
              <div className="friend-email">{`Email: ${friend.email}`}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
}

FriendsList.defaultProps = {
  friends: [],
}

// client:3000 <==> api:5000 <==> <database

// http://localhost:5000/friends


export default FriendsList;
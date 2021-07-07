import React from 'react';
import PropTypes from 'prop-types';

function FriendsList ({ friend }) {
    const { name, age, email } = friend;
    return (
      <div className="friend-info">
        <div className="friend-name">
          Name: {name}
        </div>
        <div className="friend-age">
          Age: {age}
        </div>
        <div className="friend-email">
          Email: {email}        
        </div>
      </div>
    );
  }

  FriendsList.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  }
  
  export default FriendsList;
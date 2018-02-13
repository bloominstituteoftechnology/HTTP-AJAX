import React from 'react';
import PropTypes from 'prop-types';

function AllFriends(props) {
  return (
    <ul>
      {props.friends.map(friend => {
        return (
          <li key={friend.id}>
            <button
              onClick={() => {
                props.onDelete(friend.id);
              }}
            >
              Delete
            </button>
            {friend.name}
          </li>
        );
      })}
    </ul>
  );
}

AllFriends.propTypes = {
  friends: PropTypes.array.isRequired,
};

AllFriends.defaultProps = {
  friends: [],
};

export default AllFriends;

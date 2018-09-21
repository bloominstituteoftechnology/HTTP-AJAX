import React from 'react';
import PropTypes from 'prop-types';

const Friend = props => {
  const friend = props.friends.find(
    friend => friend.id === parseInt(props.match.params.id, 10)
  );

  const deleteFriend = () => {
    props.handleDelete(friend.id);
    props.history.push('/');
  };

  return (
    <div>
      <h3>Name: {friend.name}</h3>
      <h4>Age: {friend.age}</h4>
      <h5>Email: {friend.email}</h5>
      <button onClick={deleteFriend}>Delete Friend</button>
    </div>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  })
};

export default Friend;
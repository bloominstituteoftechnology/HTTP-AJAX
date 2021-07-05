// React Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const FriendCard = props => {
  // Destructures the name, age, and email from the friend props that was passed in
  const { name, age, email, id } = props.friend;
  return (
    <div className="friendCard">
      <img src="https://placebeard.it/320/320" alt="" />
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <form>
        <button onClick={e => props.removeFriend(e, id)} className="cardButton">
          Remove
        </button>
        <button
          onClick={e => props.isEditing(e, id, props.friend)}
          className="updateButton">
          <Link to="/form" className="updateLink">
            Update
          </Link>
        </button>
      </form>
    </div>
  );
};

FriendCard.propTypes = {
  friend: PropTypes.object.isRequired,
  removeFriend: PropTypes.func.isRequired,
  isEditing: PropTypes.func.isRequired
};

export default FriendCard;

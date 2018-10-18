import React from 'react';
import PropTypes from 'prop-types';

const FriendForm = props => {
  const { name, age, email } = props.friend;
  const { onChangeHandler, addFriend, updateFriend, editing } = props;
  return (
    // Form to add and update friends list
    <form className="friendInformationForm">
      <h2>{editing ? 'Update Friend' : 'Add Friend'}</h2>
      {/* Input for the name */}
      <input
        type="text"
        placeholder="Friend's Name..."
        name="name"
        autoComplete="off"
        value={name}
        onChange={onChangeHandler}
      />
      {/* Input for the age */}
      <input
        type="text"
        placeholder="Friend's Age..."
        name="age"
        autoComplete="off"
        value={age}
        onChange={onChangeHandler}
      />
      {/* Input for the email address */}
      <input
        type="text"
        placeholder="Friend's Email..."
        name="email"
        autoComplete="off"
        value={email}
        onChange={onChangeHandler}
      />
      {/* Button will currently will add a friend */}
      <button
        onClick={!editing ? addFriend : updateFriend}
        className="addFriendButton">
        {!editing ? 'Add Friend' : 'Update Friend'}
      </button>
    </form>
  );
};

FriendForm.propTypes = {
  editing: PropTypes.bool,
  friend: PropTypes.object,
  onChangeHandler: PropTypes.func,
  addFriend: PropTypes.func,
  updateFriend: PropTypes.func
};

export default FriendForm;

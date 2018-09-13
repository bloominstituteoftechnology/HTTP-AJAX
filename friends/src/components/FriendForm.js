import React from 'react';
import PropTypes from 'prop-types';

function FriendForm(props) {
  return (
    <div>
      <h2>Add a new friend!</h2>
      <form>
        <label>
          Name:
      <input
            type="text"
            name="name"
            value={props.newFriend.name}
            onChange={props.handleChange} 
          />
        </label>
        <label>
          Age:
      <input
            type="text"
            name="age"
            value={props.newFriend.age}
            onChange={props.handleChange} 
          />
        </label>
        <label>
          Email:
      <input
            type="text"
            name="email"
            value={props.newFriend.email}
            onChange={props.handleChange} 
          />
        </label>
        <input
          onClick={props.addNewFriend}
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

FriendForm.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
  newFriend: PropTypes.object,
  handleChange: PropTypes.func,
  addNewFriend: PropTypes.func
};

export default FriendForm;
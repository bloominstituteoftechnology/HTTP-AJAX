import React from 'react';
import PropTypes from 'prop-types';

function FriendForm(props) {
  //console.log(typeof props.newFriend.age);
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
            type="number"
            name="age"
            //value={props.newFriend.age}
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
  newFriend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  }),
  handleChange: PropTypes.func,
  addNewFriend: PropTypes.func
};

export default FriendForm;
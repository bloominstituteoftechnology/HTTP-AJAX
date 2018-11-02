import React from "react";
import PropTypes from 'prop-types';

const FriendForm = props => {
  return (
    <form>
      <input
        className="input"
        type="text"
        placeholder="name..."
        required
        value={props.friend.name}
        name="name"
        onChange={props.changeHandler}
      />
      <input
        className="input"
        type="text"
        placeholder="age..."
        required
        value={props.friend.age}
        name="age"
        onChange={props.changeHandler}
      />
      <input
        className="input"
        type="text"
        placeholder="email..."
        required
        value={props.friend.email}
        name="email"
        onChange={props.changeHandler}
      />
      <button onClick={props.submitHandler}>save</button>
    </form>
  );
};

FriendForm.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.string,
        email: PropTypes.string,
    }),
    onChangeHandler: PropTypes.func,
    submitHandler: PropTypes.func,
}

export default FriendForm;

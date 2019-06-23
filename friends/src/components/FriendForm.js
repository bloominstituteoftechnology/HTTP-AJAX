import React from "react";
import PropTypes from "prop-types";

const FriendForm = props => {
  function saveHandler(e) {
    e.preventDefault(); //keeps the page from jumping on refresh
    if (props.isUpdating) {
      props.updateHandler(props.friend.id);
    } else {
      props.submitHandler();
    }
  }
  return (
    <div>
      <h2>{props.isUpdating ? "Update Friend" : "Add Friend"}</h2>
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
        <button onClick={saveHandler}>save</button>
      </form>
    </div>
  );
};

FriendForm.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
  }),
  isUpdating: PropTypes.bool,
  changeHandler: PropTypes.func,
  submitHandler: PropTypes.func,
  updateHandler: PropTypes.func,
};

export default FriendForm;

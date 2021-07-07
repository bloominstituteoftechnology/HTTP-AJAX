import React, { Fragment } from "react";

const FriendForm = props => {
  const handleSubmit = event => {
    event.preventDefault();
    props.handleAddNewFriend();
  };
  return (
    <Fragment>
      <form>
        <div className="group">
          <input
            type="text"
            value={props.friend.name}
            name="name"
            onChange={props.handleChange}
          />
          <label>Name</label>
        </div>
        <div className="group">
          <input
            type="text"
            value={props.friend.age}
            name="age"
            onChange={props.handleChange}
          />
          <label>Age</label>
        </div>
        <div className="group">
          <input
            type="text"
            value={props.friend.email}
            name="email"
            onChange={props.handleChange}
          />
          <label>Email</label>
        </div>
        <button className="material-button-raised" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default FriendForm;

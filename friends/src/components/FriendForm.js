import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import '../index.css';

function FriendForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.handleAddNewFriend(event);
  }

  return (
    <Fragment>
      <h2>{'Please Be My Friend!'}</h2>
      <form>
        <div className="group">
          <input
            type="text"
            value={props.friend.name}
            name="name"
            onChange={props.handleChange}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Name</label>
        </div>
        <div className="group">
          <input
            type="text"
            value={props.friend.age}
            name="age"
            onChange={props.handleChange}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Age</label>
        </div>
        <div className="group">
          <input
            type="text"
            value={props.friend.email}
            name="email"
            onChange={props.handleChange}
          />
          <span className="highlight" />
          <span className="bar" />
          <label>Email Address</label>
        </div>
        <button className="material-button-raised" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </Fragment>
  );
}

FriendForm.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.string,
    email: PropTypes.string
  }),
  handleAddNewFriend: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default FriendForm;

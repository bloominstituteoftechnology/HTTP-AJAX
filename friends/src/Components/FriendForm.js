import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './ComponentsStyle.css';

function FriendForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.handleAddNewFriend(event);
  }

  return (
    <Fragment>
      <h2>{'Will you be my friend?'}</h2>
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
        <button className="button" onClick={handleSubmit}>
          <Link to="my-friends" className="button">
            Submit
          </Link>
        </button>
      </form>
    </Fragment>
  );
}

export default FriendForm;
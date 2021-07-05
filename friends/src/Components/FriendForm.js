import React, { Fragment } from 'react';

import './ComponentsStyle.css';

function FriendForm(props) {
  const handleClick = event => {
    event.preventDefault();
    if (props.isEditing) {
      props.updateFriend();
    } else {
      props.addNewFriend();
    }
    props.history.push('/my-friends');
  };

  return (
    <Fragment>
      <h2>{props.isEditing ? 'Edit Friend' : 'Will you be my friend?'}</h2>
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
        <button className="button" onClick={handleClick}>
          {props.isEditing ? 'Update Friend' : 'Add Friend'}
        </button>
      </form>
    </Fragment>
  );
}

export default FriendForm;

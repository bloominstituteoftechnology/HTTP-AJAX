import React from 'react';
import FriendsList from '..FriendsList';
import Form from '../Form';

import '../../App.css';

const FormWithFriendsList = props => {
  return (
    <div className="form-and-friends-wrapper">
      <Form name={props.name}
            age={props.age}
            email={props.email}
            handleChange={props.handleChange}
            handleFriendSubmit={props.handleFriendSubmit} />

      <FriendsList friends={props.friends} />
    </div>
  );
}

export default FormWithFriendsList;
import React from 'react';
import '../App.css';
import FriendsList from './FriendsList';
import Form from './Form';

const FormAndFriendsList = props => {
  return (
    <div className="form-and-friends-container">
      <Form name={props.name}
            age={props.age}
            email={props.email}
            handleChange={props.handleChange}
            handleFriendSubmit={props.handleFriendSubmit} />

      <FriendsList friends={props.friends} />
    </div>
  );
}

export default FormAndFriendsList;

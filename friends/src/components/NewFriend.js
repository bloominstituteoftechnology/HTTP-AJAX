import React from 'react';

export default function NewFriend(props) {
  return (
    <form onSubmit={props.addNewFriend}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter name..."
        value={props.nameInput}
        onChange={props.handleInput}
      />
      <input
        type="text"
        name="age"
        id="age"
        placeholder="Enter age..."
        value={props.ageInput} 
        onChange={props.handleInput}
        />     
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Enter email..."
        value={props.emailInput}
        onChange={props.handleInput}
      />
      <input type="submit" id="newFriendSubmit" value="Click here" />
    </form>
  );
}

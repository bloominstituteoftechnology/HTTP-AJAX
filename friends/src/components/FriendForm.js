import React from 'react';

const FriendForm = (props) => {

  return (
    <form>
      <input
         value = {props.input_name}
         name = 'name'
         onChange = {props.handleInput}
         placeholder = 'friend name'
      />

      <input
        value = {props.input_age}
        name = 'age'
        onChange = {props.handleInput}
        placeholder = 'friend age'
      />

      <input
        value = {props.input_email}
        name = 'email'
        onChange={props.handleInput}
        placeholder = 'friend_email'
      />

      <button onClick={props.addNewFriend}> Add new friend </button>

    </form>

  )

};

export default FriendForm;
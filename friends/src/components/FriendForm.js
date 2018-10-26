import React from 'react';

const FriendForm = (props) => {

  console.log(props);

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

      <button className = 'button_addNewFriend' onClick = {props.addNewFriend} > Add new friend </button>
      <button className = 'button_updateFriend' onClick = {props.updateFriend}> Update friend </button>

    </form>

  )

};


// <button className = 'button_updateFriend' > Update friend </button>
export default FriendForm;
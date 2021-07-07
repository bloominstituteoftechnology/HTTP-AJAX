import React from 'react';
import axios from 'axios';

const FriendsForm = props => {

  return (
    <form>
      <input
        name="name"
        onChange={props.changeHandler}
        placeholder="Name"
        type="text"
        value={props.name}
      />
      <input 
        name="age"
        onChange={props.changeHandler}
        placeholder="Age"
        type="text"
        value={props.age}  
      />
      <input 
        name="email"
        onChange={props.changeHandler}
        placeholder="Email"
        type="text"
        value={props.email}
      />
      <button onClick={props.addFriend} type="submit">Add Friend</button>
    </form>
  );
}

export default FriendsForm;
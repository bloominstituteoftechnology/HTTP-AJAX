import React from 'react';
import axios from 'axios';

const FriendsForm = props => {
  const { changeHandler, addFriend, name, age, email  } = props;

  return (
    <form>
      <input
        name="name"
        onChange={changeHandler}
        placeholder="Name"
        type="text"
        value={name}
      />
      <input 
        name="age"
        onChange={changeHandler}
        placeholder="Age"
        type="text"
        value={age}  
      />
      <input 
        name="email"
        onChange={changeHandler}
        placeholder="Email"
        type="text"
        value={email}
      />
      <button onClick={addFriend} type="submit">Add Friend</button>
    </form>
  );
}

export default FriendsForm;
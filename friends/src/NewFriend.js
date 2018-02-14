import React from 'react';
import './NewFriend.css';

const NewFriend = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <h2 id='form-header'>Add new friend:</h2>
      <input type="text" id="name" placeholder="Name" onChange={props.updateName} />
      <input type="number" id="age" placeholder="Age" onChange={props.updateAge} />
      <input type="text" id="email" placeholder="Email" onChange={props.updateEmail} />
      <input type="text" id="phone" placeholder="Phone number" onChange={props.updatePhone} />
      <input type="text" id="favorite-color" placeholder="Favorite color" onChange={props.updateFavoriteColor} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewFriend;
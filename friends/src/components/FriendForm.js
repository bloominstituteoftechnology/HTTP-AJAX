import React from 'react';

function FriendForm(props) {
  return (
    <form>
    Name
      <input
        type="text"
        name="name"
        value={props.friend.name}
        onChange={props.handleChange}
        />
        Age
      <input
        type="number"
        name="age"
        value={props.friend.age}
        onChange={props.handleChange}
        />
        E-mail address
      <input
        type="email"
        name="email"
        value={props.friend.email}
        onChange={props.handleChange}/>
      <button onClick={props.postNewFriend}>Save Friend</button>
      <button onClick={()=>window.reload()}>Clear All</button>
    </form>

)}

export default FriendForm;

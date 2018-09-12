import React from 'react';

function FriendForm(props) {
  return (
    <form>
    Name
      <input
        type="text"
        name="name"
        onChange={props.handleChange}
        />
        Age
      <input
        type="number"
        name="age"
        onChange={props.handleChange}
        />
        E-mail address
      <input
        type="email"
        name="email"
        onChange={props.handleChange}/>
      <button onClick={props.postNewFriend}>Save Friend</button>
      <button onClick={()=>window.reload()}>Clear All</button>
    </form>

)}

export default FriendForm;

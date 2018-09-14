import React from 'react';

function FriendForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form>
    <label>Name</label>
      <input
        type="text"
        name="name"
        value={props.friend.name}
        onChange={props.handleChange}
        />
        <label>Age</label>
      <input
        type="number"
        name="age"
        value={props.friend.age}
        onChange={props.handleChange}
        />
        <label>E-mail address</label>
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

import React from 'react';

function FriendForm(props) {
  return (
    <div>
    <form>
    Name
      <input
        type="text"
        name="name"
        onChange={props.handleChange}
        />
        Age
      <input
        type="text"
        name="age"
        onChange={props.handleChange}
        />
        E-mail address
      <input
        type="text"
        name="email"
        onChange={props.handleChange}/>
      <button onClick={props.postNewFriend}>Save Friend</button>
      <button onClick={()=>window.reload()}>Clear All</button>
    </form>
    </div>
)}

export default FriendForm;

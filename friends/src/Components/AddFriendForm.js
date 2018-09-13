import React from 'react';

 function AddFriendForm(props) {
  return (
    <form>
      Name
      <input
        type="text"
        name="name"
        onChange={props.handleInput}
        />
        Age
      <input
        type="number"
        name="age"
        onChange={props.handleInput}
        />
        E-mail address
      <input
        type="email"
        name="email"
        onChange={props.handleInput}/>
      <button onClick={props.addNewFriend}>Add Friend</button>
      <button onClick={()=>window.reload()}>Clear All</button>
    </form>
 )}

 export default AddFriendForm;
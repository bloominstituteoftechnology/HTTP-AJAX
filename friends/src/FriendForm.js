import React from 'react';

function FriendForm(props){
  
    return (
      <form>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={props.name}
          onChange={props.formChange}
        />
        <input
          name="age"
          type="number"
          placeholder="Age"
          value={props.age}
          onChange={props.formChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={props.email}
          onChange={props.formChange}
        />
        <button onClick={props.addNewFriend}>Submit</button>
      </form>
    );
  
}
 
 export default FriendForm;
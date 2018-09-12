import React from 'react';
import { prependOnceListener } from 'cluster';



function FriendZone(props) {

    return (
      <div className="FriendForm">
      <p> Have A Friend You'd Like To Add?</p>
      <form>
          <input onChange={props.handleNameChange} type="text" name="name" value= "+" placeholder="Name"> + </input>
          <input onChange={props.handleNameChange} type="text" name="age" value= "+" placeholder="Age"> + </input>
          <input onChange={props.handleNameChange} type="text" name="email" value= "+" placeholder="Email"> + </input>
          <button onClick={props.handleAddFriend}>Add A Friend</button>
      </form>
      
      </div>
    );
  }


export default FriendZone;
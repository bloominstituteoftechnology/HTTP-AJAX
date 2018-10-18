import React from 'react';
import { NavLink } from 'react-router-dom';

const NewFriend = props => {
  return (
      <form>
          <input onChange={props.changeHandler} name ="name" type = "text" placeholder = "Name"/>
          <input onChange={props.changeHandler} name = "age" type = "text" placeholder = "Age"/>
          <input onChange={props.changeHandler} name= "email" type = "text" placeholder = "Email"/>
          <button  onClick={props.addFriend}>Add New Friend</button>
        </form>
  );
};

export default NewFriend;
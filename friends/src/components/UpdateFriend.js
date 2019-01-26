import React from 'react';
import { Link } from 'react-router-dom';

const UpdateFriend = props => {
  return (
    <form onSubmit={props.updateFriend}>
      <label>
        Name: <input name="name" type="text" value={props.name} onChange={props.changeHandler} />
      </label>
      <label>
        Age: <input name="age" type="text" value={props.age} onChange={props.changeHandler} />
      </label>
      <label>
        Email: <input name="email" type="text" value={props.email} onChange={props.changeHandler} />
      </label>
      <Link to='/'><input type="submit" value="Submit"/></Link>
    </form>
  );
} 

export default UpdateFriend;
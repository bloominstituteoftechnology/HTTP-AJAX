import React from 'react';
import {Link} from 'react-router-dom';
const FormPage = props => {
  return (
      <div>
        <Link to='/'>Home</Link>
          <form>
            <input placeholder="name" onChange={props.changeHandler} type='text' name="name" value={props.newFriend.name}></input>
            <input placeholder="age" onChange={props.changeHandler}type='text' name='age' value={props.newFriend.age}></input>
            <input placeholder='email' onChange={props.changeHandler} type='text' name='email' value={props.newFriend.email}></input>
            <button onClick={props.inputNewFriend} >Submit</button>
          </form>
      </div>
      );
};

export default FormPage

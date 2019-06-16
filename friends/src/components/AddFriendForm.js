import React from 'react';

const AddFriendForm = (props) => {
  return (
    <div>
      <h3>Add a friend:</h3>
      <form>
        <input onChange={props.nameHandler} type="text" name="name" placeholder="name"/>
        <input onChange={props.ageHandler} type="text" name="age" placeholder="age"/>
        <input onChange={props.emailHandler} type="text" name="email" placeholder="email"/>
        <button onClick={props.addFriend}>Add</button>
      </form>
    </div>
  );
}
 
export default AddFriendForm;
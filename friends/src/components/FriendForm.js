import React from 'react';

const FriendForm = () => {
  return (
<form className="ui form">
  <div className="field">
    <label>Name</label>
    <input type="text" name="name" placeholder="Enter name" />
  </div>
  <div className="field">
    <label>Age</label>
    <input type="text" name="age" placeholder="Enter age" />
  </div>
  <div className="field">
    <label>Email</label>
    <input type="text" name="email" placeholder="Enter email" />
  </div>
  <button className="ui button" type="submit">Add Friend</button>
</form>
  );
}
 
export default FriendForm;
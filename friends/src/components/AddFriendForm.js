import React from 'react';

const AddFriendForm = (props) => {
  return (
    <div>
      <h3>Add a friend:</h3>
      <form>
        <input type="text" name="name" placeholder="name"/>
        <input type="text" name="age" placeholder="age"/>
        <input type="text" name="email" placeholder="email"/>
      </form>
    </div>
  );
}
 
export default AddFriendForm;
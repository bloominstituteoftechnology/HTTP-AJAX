import React from 'react';

const AddFriend = props => {
    return (
      <form>
        <label>
          Name:
          <input type="text" value={props.newFriend.name} name="name" />
        </label>
        <label>
          Age:
          <input type="text" value={props.newFriend.age} name="name" />
        </label>
        <label>
          Email:
          <input type="text" value={props.newFriend.email} name="name" />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
};

export default AddFriend;
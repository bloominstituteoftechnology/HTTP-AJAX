import React from 'react';

const EditFriend = props => {
  return (
    <div>
      <input 
        placeholder={props.friend.name}
        type="text"
        onChange={props.editHandler} 
      />
      <input 
        placeholder={props.friend.age}
        type="text"
        onChange={props.editHandler} 
      />
      <input 
        placeholder={props.friend.email}
        type="text"
        onChange={props.editHandler} 
      />
    </div>
  )
}
export default EditFriend;
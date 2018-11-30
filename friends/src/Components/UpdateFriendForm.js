import React from 'react';

const UpdateFriendForm = ({friend, updateFriend}) => {
  
  return (
    <div className='friend-update'>
      <form>
        <label>Name:</label>
        <input></input>
      </form>
      <div>Name: {friend.name}</div>
      <div>Age: {friend.age}</div>
      <div>Email: {friend.email}</div>
      <button onClick={() => deleteFriend(friend.id)} 
      className={'delete'}>DELETE</button>
      <button onClick={() => deleteFriend(friend.id)} 
      className={'delete'}>UPDATE</button>
    </div>
  );
}

export default UpdateFriendForm;
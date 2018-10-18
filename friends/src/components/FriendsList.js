import React from 'react';
import './FriendsList.css';

const FriendsList = ({
  friends,
  handleDeleteClick,
  handleUpdateClick,
  editMode
}) => {
  return (
    <div className="FriendList">
      {friends.map(friend => (
        <div className="card" key={friend.id} id={friend.id}>
          <h3>{friend.name}</h3>
          <p>Age: {friend.age}</p>
          <p>email: {friend.email}</p>
          <div onClick={handleDeleteClick} className="delete">
            X
          </div>
          <button onClick={handleUpdateClick} className="btn">
            {editMode ? 'Update' : 'Edit'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;

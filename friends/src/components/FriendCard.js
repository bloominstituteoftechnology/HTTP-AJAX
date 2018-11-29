import React from 'react';

const FriendCard = ({ friend, deleteFriend }) => {
  return (
    <div className="card">
      <div className="content">
        <h4 className="header">
         {friend.name}
        </h4>
      </div>
      <div className="content">
        <div className="summary">
          Age: {friend.age}
        </div>
      </div>
      <div className="content">
        <div className="summary">
          Location: {friend.location}
        </div>
      </div>
      <div className="content">
        <div className="summary">
          Email: {friend.email}
        </div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
        <div 
            onClick={(e) => {
              e.preventDefault();
              deleteFriend(friend.id)
            }}
            className="ui button"
          >Remove</div>
          <div className="ui primary button">Update</div>
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
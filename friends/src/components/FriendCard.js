import React from 'react';

const FriendCard = props => {
  const { name, age, email } = props.friend;
  return (
    <div className="save-wrapper">
      <div className="friend-card">
        <h2>{name}</h2>
        <div className="friend-age">
          Age: <em>{age}</em>
        </div>
        <div className="friend-email">
          Email: <strong>{email}</strong>
        </div>
      </div>
      <div className="save-button">Save</div>
    </div>
  );
};

export default FriendCard;
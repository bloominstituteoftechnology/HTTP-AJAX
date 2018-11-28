import React from 'react';

const FriendCard = ({ friend }) => {
  return (
    <div style={{'padding': '20px'}} className="ui friend-card items">
      <div className="friend item">
        <div className="content">
         Name: {friend.name}
        </div>
      </div>
      <div className="friend item">
        <div className="content">
          Age: {friend.age}
        </div>
      </div>
      <div className="friend item">
        <div className="content">
          Email: {friend.email}
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
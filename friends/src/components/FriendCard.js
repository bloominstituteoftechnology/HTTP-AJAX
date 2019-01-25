import React from 'react';

const FriendCard = props => {
    console.log(props);
  return (
    <div className="save-wrapper">
      <div className="friend-name">
        <h2>Name {props.name}</h2>
        <div className="friend-age">
          Age: <em>{props.age}</em>
        </div>
        <div className="friend-email">
          Email: <strong>{props.email}</strong>
        </div>
      </div>
    </div>
  )
};

export default FriendCard;

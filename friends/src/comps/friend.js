import React from 'react';

const Friend = props => {
  const singleFriendDir = () => {
    props.history.push(`/friends/${props.id}`);
  };
  return (
    <div className="friendWrapp">
      <h2 className="name">{props.name}</h2>
      <div className="age">{props.age}</div>
      <div className="email">{props.email}</div>
      <button onClick={singleFriendDir}>Profile</button>
    </div>
  );
};

export default Friend;

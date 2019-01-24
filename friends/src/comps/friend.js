import React from 'react';

const Friend = props => {
  const singleFriendDir = () => {
    props.history.push(`/friends/${props.id}`);
  };

  const editFriend = () => {
    props.history.push(`/friends/${props.id}/edit`);
  };
  console.log(props.location.pathname);
  return (
    <div className="friendWrapp">
      <h2 className="name">{props.name}</h2>
      <div className="age">{props.age}</div>
      <div className="email">{props.email}</div>
      {props.location.pathname === `/friends/${props.id}` ? (
        <button onClick={editFriend}>Edit</button>
      ) : (
        <button onClick={singleFriendDir}>Profile</button>
      )}
    </div>
  );
};

export default Friend;

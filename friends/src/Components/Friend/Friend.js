import React from 'react';

const Friend = (props) => {
  const {friends} = props;
  let friend = friends.find((friend) => friend.id === parseInt(props.match.params.id));
  return (
    <div>
      <h1>Your Friend: </h1>
      <h2>{friend.name}</h2>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
    </div>
  );
}
export default Friend;

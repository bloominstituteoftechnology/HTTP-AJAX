import React from 'react';

const Friend = (props) => {
  const friend = props.data.find(friend => friend.name === props.match.params.name);
  if (friend) {
    return (
      <div>
        <h1>Hello {friend.name}</h1>
        <h3>Your id is {friend.id}</h3>
      </div>
    );
  } else {
    return(<h2>Loading...</h2>);
  }
};

export default Friend;
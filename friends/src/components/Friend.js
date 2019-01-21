import React from 'react';

const Friend = props => {
  const { friend } = props;

  return (
    <p>
      {friend.name} | {friend.age} | {friend.email}
    </p>
  );
}

export default Friend;
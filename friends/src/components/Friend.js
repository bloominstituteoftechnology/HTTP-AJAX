import React from 'react';

const Friend = props => {
  return (
    <div>
      <div>
        {props.friend.name}
      </div>
      <div>
        {props.friend.age}
      </div>
      <div>
        {props.friend.email}
      </div>
      <h1>-</h1>
    </div>
  );
};

export default Friend;

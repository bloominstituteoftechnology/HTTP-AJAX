import React from 'react';

const Friend = props => {
  return (
    <p>
      {props.name} | {props.age} | {props.email}
    </p>
  );
}

export default Friend;
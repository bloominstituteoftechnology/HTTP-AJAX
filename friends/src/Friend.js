import React from 'react';

const Friend = (props) => {
  return (
    <div>
      <button className="edit">&#10084;</button>
      <div>{props.friend.name}</div>
      <div>{props.friend.age}</div>
      <div>{props.friend.email}</div>
      <button className="delete" onClick={() => props.handleDelete(props.friend.id)}>
        &#10008;
      </button>
    </div>
  );
};

export default Friend;

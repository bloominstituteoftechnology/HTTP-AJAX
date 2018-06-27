import React from 'react';

const Friend = props => {
  return(
    <div className="friend">
      <h4>{props.data.name}</h4>
      <h6>age: {props.data.age}</h6>
      <h6>email: {props.data.email}</h6>
    </div>
  )
}

export default Friend;

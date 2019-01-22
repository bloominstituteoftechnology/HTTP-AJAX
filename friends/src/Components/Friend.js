import React from 'react';


export default (props) => {
  return(
    <div className="friend">
      <h2>{props.name}</h2>
      <p>age: {props.age}</p>
      <p>email: {props.email}</p>
    </div>
  )
}

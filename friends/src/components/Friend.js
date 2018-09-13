import React from 'react';

export default function Friend(props) {
  const {name, age, email} = props.friend;
  return(
    <div className='friend-card'>
      <p>Name: {name} </p>
      <p>Age: {age} </p>
      <p>Email: {email} </p> 
    </div>
  );
}

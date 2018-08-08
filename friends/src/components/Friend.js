import React from 'react';

const Friend = (props) => {
  return (
    <div className='person-card'>
      <h2>Name: <p>{props.person.name}</p></h2>
      <h2>Age: <p>{props.person.age}</p></h2>
      <h2>Email: <p>{props.person.email}</p></h2>
    </div>
  )
}

export default Friend;

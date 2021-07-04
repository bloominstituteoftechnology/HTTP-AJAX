import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
  return (
    <Link to={`/${props.person.id}`}>
      <div className='person-card'>
        <h2>Name: <p>{props.person.name}</p></h2>
        <h2>Age: <p>{props.person.age}</p></h2>
        <h2>Email: <p>{props.person.email}</p></h2>
      </div>
    </Link>
  );
}

export default Friend;

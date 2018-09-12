import React from 'react';
import PropTypes from 'prop-types';

export default function Friend(props) {
  const {name, age, email} = props.friend;
  return(
    <div>
      <p>Name: {name} </p>
      <p>Age: {age} </p>
      <p>Email: {email} </p> 
    </div>
  );
}

Friend.propTypes = {

}
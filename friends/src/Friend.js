import React, {Fragment} from 'react';

const Friend = props => {
    const {name, age, email} = props.friend;
    return (
      <Fragment>
      <p>Name: {name} </p>
      <p>Age: {age} </p>
      <p>Email: {email} </p> 
      </Fragment>
    );
  };
  
  export default Friend;
  
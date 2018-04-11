import React, { Component } from 'react';

const Friend = props => {
  const {id, name, age, email} = props.friend;
  return (
    <div>
      {`${id} ${name} ${age} ${email}`}
    </div>
  );
}

export default Friend;

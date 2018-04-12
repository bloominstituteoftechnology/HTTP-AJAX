import React, { Component } from 'react';

const Friend = props => {
  const {id, name, age, email} = props.friend;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{email}</td>
    </tr>
  );
}

export default Friend;

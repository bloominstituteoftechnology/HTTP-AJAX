import React, { Component } from 'react';
import { Button } from 'reactstrap';

const Friend = props => {
  const {id, name, age, email} = props.friend;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td><Button onClick={() => props.deleteFromFriendsList(id)} color="danger" size="sm">Delete</Button></td>
    </tr>
  );
}

export default Friend;

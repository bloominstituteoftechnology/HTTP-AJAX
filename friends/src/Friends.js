import React from "react";
import { Table } from 'reactstrap';


export default function Friends(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.friendsList.map((friend, i) => (
          <tr key={friend.id}>
            <th scope="row">{++i}</th>
            <td>{friend.name}</td>
            <td>{friend.age}</td>
            <td>{friend.email}</td>
            <td><button onClick={() => props.delete(friend.id)}>Delete</button></td>
            <td><button onClick={() => props.edit(friend.id)}>Edit</button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}


import React from "react";
import { Table } from "reactstrap";

import Friend from './Friend';
import FriendForm from './FriendForm'



const Friends = props => {
  return (
    <div>
      <Table dark className="table-container">
<thead>
  <tr>
    <th>#</th>
    <th>Name</th>
    <th>Age</th>
    <th>Email</th>
  </tr>
</thead>

        {props.data.map(friend => (
          <Friend key={friend.id} friends={friend} />
        ))}
   
      </Table>

      <FriendForm />
    </div>
);
};

export default Friends;

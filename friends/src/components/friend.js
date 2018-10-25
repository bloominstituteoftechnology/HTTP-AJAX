import React, { Component } from 'react';
import { FriendCard } from "./style";
import { Table } from 'reactstrap';


class Friend extends Component {
  render() {
    const { id,name, age ,email } = this.props.friend
    return (
      <Table responsive>
        {/* <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{age}</td>
            <td className="action">Delete</td>
            <td className="action">Update</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

// class Friend extends Component {

//   render() { 
//     const { name, age ,email } = this.props.friend
//     return ( 
//       <FriendCard>
//       <h3>Name: {name}</h3>
//       <h3>age :{age}</h3>
//       <h3>Email :{email}</h3>
//       </FriendCard>
//     );
//   }
// }

export default Friend;
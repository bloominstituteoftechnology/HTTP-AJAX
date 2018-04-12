import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek'
import _ from 'lodash'
import axios from 'axios';

class Friend extends Component{
  constructor(props) {
    super(props);
  }

  updateFriend = data => {
    axios.put(`http://localhost:5000/friends/${this.props.friend.id}`, data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const {id, name, age, email} = this.props.friend;
    return (
      <tr>
        <td>{id}</td>
        <td>
          <RIEInput
            value={name}
            change={this.updateFriend}
            propName="name"
          />
        </td>
        <td>{age}</td>
        <td>{email}</td>
        {/* <td><Button onClick={() => update(id)} color="warning" size="sm">Update</Button></td> */}
        <td><Button onClick={this.props.deleteFromFriendsList} color="danger" size="sm">Delete</Button></td>
      </tr>
    );
  }
}

export default Friend;

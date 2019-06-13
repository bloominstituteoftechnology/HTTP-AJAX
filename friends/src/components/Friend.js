import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {  RIEInput } from 'riek'
import axios from 'axios';

class Friend extends Component{

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
        <td>
          <RIEInput
            value={age}
            change={this.updateFriend}
            propName="age"
          />
        </td>
        <td>
          <RIEInput
            value={email}
            change={this.updateFriend}
            propName="email"
          />
        </td>
        <td><Button onClick={() => this.props.deleteFromFriendsList(id)} color="danger" size="sm">Delete</Button></td>
      </tr>
    );
  }
}

export default Friend;

import React, { Component } from "react";
import { Table } from "reactstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";

import Friend from "./Friend";
import FriendForm from "./FriendForm";

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      loading: true
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(response => {
      this.setState({
        friends: response.data,
        loading: false
      });
    });
  }
  render() {
    return (
      <div>
        <Table dark className="table-container">
          <NavLink to={`/${this.state.friends.id}`} />
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>

          {this.state.friends.map(friend => (
            <Friend key={friend.id} friends={friend} />
          ))}
        </Table>
        <FriendForm />
      </div>
    );
  }
}

export default Friends;

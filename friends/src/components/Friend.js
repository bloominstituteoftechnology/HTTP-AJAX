import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: []
    };
  }
  // render data for each friend
  render() {
    return [
      <div><Link to={`/${this.props.friend.id}`}>
        {this.props.friend.name}
      </Link></div>,
      <div>{this.props.friend.age}</div>,
      <div>{this.props.friend.email}</div>
    ];
  }
}

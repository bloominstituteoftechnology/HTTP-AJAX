import React, { Component } from "react";

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
      <div>{this.props.friend.name}</div>,
      <div>{this.props.friend.age}</div>,
      <div>{this.props.friend.email}</div>
    ];
  }
}

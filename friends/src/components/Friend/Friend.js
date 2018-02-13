import React, { Component } from "react";
import "./Friend.css";
import { connect } from "react-redux";
// Need to import friends delete, but not yet

class Friend extends Component {
  constructor(props) {
    super(props);
  }
  deleteFriend = event => {
    event.preventDefault();
    this.props.deleteFriend(this.props.index);
    window.location.reload();
  };

  render() {
    return (
      <div className="Friend">
        <div>Name: {this.props.friend.name}</div>
        <div>Age: {this.props.friend.age}</div>
        <div>Email: {this.props.friend.email}</div>
        <button onClick={this.deleteFriend}>Delete</button>
      </div>
    );
  }
}

export default connect(null, { deleteFriend })(Friend);

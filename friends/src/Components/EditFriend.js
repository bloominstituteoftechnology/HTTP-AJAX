import React, { Component } from "react";

export default class AddFriend extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.props.handleTextInput}
          placeholder="name"
          name="name"
          value={this.props.name}
        />

        <input
          type="number"
          onChange={this.props.handleTextInput}
          placeholder="age"
          name="age"
          value={this.props.age}
        />

        <input
          type="text"
          onChange={this.props.handleTextInput}
          placeholder="email"
          name="email"
          value={this.props.email}
        />

        <button onClick={this.props.editFriend}>Save Edit</button>
      </div>
    );
  }
}

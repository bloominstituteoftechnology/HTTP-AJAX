import React, { Component } from "react";
// import axios from "axios";

class FriendForm extends Component {
  render() {
    console.log(this.props);
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          this.props.submitHandler();
        }}
      >
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={this.props.name}
          onChange={this.props.handleInputChange}
        />

        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={this.props.age}
          onChange={this.props.handleInputChange}
        />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={this.props.email}
          onChange={this.props.handleInputChange}
        />

        <button type="submit">Save Friend</button>
      </form>
    );
  }
}

export default FriendForm;

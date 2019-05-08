import React from "react";
import axios from "axios";

export default class MakeNewFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    const obj = { ...this.state };
    this.props.addFriend(obj)
    console.log(obj);
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label htmlFor="name">Name</label>
        <input
          required
          value={this.state.name}
          onChange={this.handleChange}
          type="text"
          placeholder=".."
          name={"name"}
        />

        <label htmlFor="age">Age</label>
        <input
          required
          value={this.state.age}
          onChange={this.handleChange}
          type="text"
          placeholder=".."
          name={"age"}
        />

        <label htmlFor="email">email</label>
        <input
          required
          value={this.state.email}
          onChange={this.handleChange}
          type="text"
          placeholder=".."
          name={"email"}
        />

        <button>ADD NEW FRIEND!!!!</button>
      </form>
    );
  }
}

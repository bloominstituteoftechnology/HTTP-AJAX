import React, { Component } from "react";
import axios from "axios";

class FriendInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { name, age, email } = this.state;

    axios
      .post(`http://localhost:5000/friends`, { name, age, email })
      .then(response => {
        console.log(response);
        console.log(response.data);
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
          />
          <button type="submit">Save Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendInput;

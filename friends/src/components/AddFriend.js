import React from "react";
import axios from "axios";

class AddFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleChangAge = e => {
    this.setState({
      age: e.target.value
    });
  };

  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = {
      name: this.state.name
    };

    const age = {
      age: this.state.age
    };

    const email = {
      email: this.state.email
    };

    axios
      .post("http://localhost:5000/friends", { name, age, email })
      .then(response => {
        console.log(response);
        console.log(response.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label>
          Add Friend:
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChangeName}
          />
          <input
            type="number"
            age="age"
            placeholder="Age"
            onChange={this.handleChangeAge}
          />
          <input
            type="text"
            email="email"
            placeholder="Email"
            onChange={this.handleChangeEmail}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddFriend;

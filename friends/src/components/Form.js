import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form
        className=""
        onSubmit={event => {
          event.preventDefault();
          this.props.addFriend(this.state);
          this.setState({
            name: "",
            age: "",
            email: ""
          });
        }}
      >
        <input
          onChange={this.onChangeHandler}
          value={this.state.name}
          name="name"
          placeholder="Enter your friends name"
          type="text"
        />
        <input
          onChange={this.onChangeHandler}
          value={this.state.age}
          name="age"
          placeholder="Enter your friends age"
          type="number"
        />
        <input
          onChange={this.onChangeHandler}
          value={this.state.email}
          name="email"
          placeholder="Enter your friends email"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;

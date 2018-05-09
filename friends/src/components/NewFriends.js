import React, { Component } from "react";

class NewFriends extends Component {
  state = {
    age: "",
    name: "",
    email: ""
  };

  handleChange = x => {
    this.setState({
      [x.target.name]: x.target.value
    });
  };

  handleSubmit = () => {
    this.props.handleSubmit(this.state);
  };

  render() {
    const { age, name, email } = this.state;

    return (
      <div>
        <form>
          <input
            type="number"
            placeholder="age"
            name="age"
            value={age}
            onChange={x => this.handleChange(x)}
          />
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={x => this.handleChange(x)}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={x => this.handleChange(x)}
          />
          <button onClick={this.handleSubmit}>Submit!</button>
        </form>
      </div>
    );
  }
}

export default NewFriends;

import React, { Component } from "react";

class NewFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: "",
      name: "",
      email: ""
    };
  }

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
        <input
          type="text"
          name="age"
          value={age}
          onChange={x => this.handleChange(x)}
        />
        <input
          type="number"
          name="name"
          value={name}
          onChange={x => this.handleChange(x)}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={x => this.handleChange(x)}
        />
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    );
  }
}

export default NewFriends;

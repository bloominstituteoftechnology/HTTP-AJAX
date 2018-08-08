import React from "react";

export default class AddFriend extends React.Component {
  state = {
    name: "",
    age: "",
    email: "",
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    console.log(this.state.name, this.state.age, this.state.email);
    if (this.state.name && this.state.age && this.state.email) {
      this.props.addFriend(this.state.name, this.state.age, this.state.email);
    }
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleOnChange}
          name="name"
          type="text"
          value={this.state.name}
          placeholder="Friends Name"
        />
        <input
          onChange={this.handleOnChange}
          type="number"
          name="age"
          value={this.state.age}
          placeholder="Friends Age"
        />
        <input
          onChange={this.handleOnChange}
          type="text"
          name="email"
          value={this.state.email}
          placeholder="Friends email"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

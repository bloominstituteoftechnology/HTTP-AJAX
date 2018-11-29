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

  id = () => {
    console.log(this.props);
    this.props.friends.forEach(item => {
      if (
        item.name === this.state.name ||
        item.age === this.state.age ||
        item.email === this.state.email
      ) {
        console.log(item.id);
        return item.id;
      }
    });
  };

  render() {
    return (
      <div>
        <form
          className=""
          onSubmit={event => {
            event.preventDefault();
            this.props.addFriend(this.state);
            this.setState({
              name: "",
              age: 0,
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
          <button
            onClick={event => {
              event.preventDefault();
              let id = this.id();
              console.log(id);
              this.props.modifyFriend(id, this.state);
              this.setState({
                name: "",
                age: "",
                email: ""
              });
            }}
          >
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

import React, { Component } from "react";
import axios from "axios";

class FriendsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: "",
        age: "",
        email: ""
      }
    };
    console.log(this.state.input);
  }
  handleInput = event => {
    console.log(event.target.name);
    this.setState({
      input: { ...this.state.input, [event.target.name]: event.target.value }
    });
  };

  postFriend = () => {       

    axios.post("http://localhost:5000/friends", {
        id: this.props.friends.length + 1,
        name: this.state.input.name,
        age: this.state.input.age,
        email: this.state.input.email
      })
      .then(response => {
        console.log(response);
        
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form>
        <input
          onChange={this.handleInput}
          value={this.state.input.name}
          name="name"
        />
        <input
          onChange={this.handleInput}
          value={this.state.input.age}
          name="age"
        />
        <input
          onChange={this.handleInput}
          value={this.state.input.email}
          name="email"
        />
        <button type="button" onClick={this.postFriend}>
          Post Friend
        </button>
      </form>
    );
  }
}

export default FriendsForm;

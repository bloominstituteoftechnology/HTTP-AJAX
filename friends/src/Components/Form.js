import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "./Form.css";
import axios from "axios";

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  handleChange = event => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  handleSubmit = event => {
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
      .then(response => {
        console.log("Eyy!");
        console.log(response);
      })
      .catch(error => {
        console.log("Oh noes something went wrong...");
        console.log(error);
      });
  };

  render() {
    return (
      <Form class="form" onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="friendName">Name: </Label>
          <Input
            class="input"
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="What's your name?"
          />
        </FormGroup>
        <FormGroup>
          <Label for="friendAge">Age: </Label>
          <Input
            class="input"
            type="text"
            name="age"
            id="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="How old are you?"
          />
        </FormGroup>
        <FormGroup>
          <Label for="friendEmail">E-mail: </Label>
          <Input
            class="input"
            type="text"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="What's your e-mail?"
          />
        </FormGroup>
        <input type="submit" value="Submit" />
      </Form>
    );
  }
}

export default AddFriend;

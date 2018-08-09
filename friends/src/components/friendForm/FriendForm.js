import React, { Fragment } from "react";
import axios from "axios";

import "./FriendForm.css";

export default class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      age: [],
      email: [],
      url: props.url
    };
  }

  handleSubmit = event => {
    console.log("name", this.state.name);
    // event.preventDefault();
    let addedfriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };

    axios
      .post(this.state.url, addedfriend)
      .then(response => {
        this.setState({ name: [], age: [], email: [] });
      })
      .catch(err => {
        console.log(err);
      });
  };
  inputChangeHandler = event => {
    console.log(this.state.url);
    console.log(`${this.state.url}`);
    this.setState({ [event.target.name]: event.target.value });
  };

  // removeInputText = value => {
  //   value.target.value = "";
  // };
  render() {
    return (
      <Fragment>
        <form className="friendForm" onSubmit={this.handleSubmit}>
          <div className="friendInputs">
            <input
              placeholder="name..."
              type="text"
              name="name"
              onChange={this.inputChangeHandler}
            />
            <input
              placeholder="age..."
              type="text"
              name="age"
              onChange={this.inputChangeHandler}
              onFocus={this.removeInputText}
            />
            <input
              placeholder="email..."
              type="text"
              name="email"
              onChange={this.inputChangeHandler}
              onFocus={this.removeInputText}
            />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </Fragment>
    );
  }
}

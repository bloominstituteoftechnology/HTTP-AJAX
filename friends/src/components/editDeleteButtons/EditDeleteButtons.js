import React, { Component } from "react";
import axios from "axios";
import "./EditDeleteButtons.css";

let friendUrl = "http://localhost:5000/friends/:name";

export default class EditDeleteButtons extends Component {
  constructor(props) {
    super(props);
    console.log("Data", props.data);
    this.state = {
      data: props.data
    };
  }
  updateChangeHandlerSubmit = event => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/friends/1`, {
        name: "fred",
        age: 5,
        email: "jklj@bal.com"
      })
      .then(repsonse => {
        this.setState({ data: this.state.data });
        console.log("Response", repsonse);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="editDeleteCardButtons">
        <form className="updateChangeForm">
          <input placeholder="name..." type="text" name="name" />
          <input placeholder="age..." type="text" name="age" />
          <input
            placeholder="email..."
            type="text"
            name="email"
            onFocus={this.removeInputText}
          />
          <button onClick={this.updateChangeHandlerSubmit}>Edit</button>
          <button onClick={this.updateChangeHandler}>Del</button>
        </form>
      </div>
    );
  }
}

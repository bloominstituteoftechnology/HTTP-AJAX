import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Form extends Component {
  render() {
    return (
      <>
        <form className="friends-list" onSubmit={this.props.addFriend}>
          <input
            autocomplete="off"
            className="input-section"
            type="text"
            name="name"
            placeholder="Name"
            value={this.props.state.inputText}
            onChange={this.props.handleChange}
          />
          <input
            autocomplete="off"
            className="input-section"
            type="text"
            name="age"
            placeholder="Age"
          />
          <input
            autocomplete="off"
            className="input-section"
            type="text"
            name="email"
            placeholder="Email"
          />
          <button className="add-button button" type="submit">Submit
          </button>
        </form>

        <Link to={'/'}>Go Back</Link>
      </>
    );
  }
}

export default Form;

import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Form extends Component {
  render() {
    return (
      <>
        <form className="friends-list" onSubmit={this.props.addFriend}>
          <input
            autoComplete="off"
            className="input-section"
            type="text"
            name="inputText"
            placeholder="Name"
            value={this.props.state.inputText}
            onChange={this.props.handleChange}
          />
          <input
            autoComplete="off"
            className="input-section"
            type="text"
            name="age"
            placeholder="Age"
            value={this.props.state.age}
            onChange={this.props.handleChange}
          />
          <input
            autoComplete="off"
            className="input-section"
            type="text"
            name="email"
            placeholder="Email"
            value={this.props.state.email}
            onChange={this.props.handleChange}
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

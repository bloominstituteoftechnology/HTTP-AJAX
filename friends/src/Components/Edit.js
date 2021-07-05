import React, { Component } from "react";
import { Link } from "react-router-dom";

class Edit extends Component {
  submitHandler = event => {
    event.preventDefault();
    this.props.editFriend(this.props.match.params.id,this.props.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <form className="friends-list" onSubmit={this.submitHandler}>
          <input
            autoComplete="off"
            className="input-section"
            type="text"
            name="name"
            placeholder="Name"
            value={this.props.state.name}
            onChange={this.props.handleChange}
          />
          <input
            autoComplete="off"
            className="input-section"
            type="number"
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
          <button className="add-button button" type="submit">
            Submit
          </button>
        </form>
        <br />
        <br />

        <Link to={"/"}>Go Back</Link>
      </>
    );
  }
}

export default Edit;

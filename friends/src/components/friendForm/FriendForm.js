import React, { Fragment } from "react";

export default class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: []
    };
  }
  inputChangeHandler = event => {
    console.log(event.target.value);
  };
  render() {
    return (
      <Fragment>
        <form>
          <input placeholder="name..." onChange={this.inputChangeHandler} />
          <input placeholder="age..." onChange={this.inputChangeHandler} />
          <input placeholder="email..." onChange={this.inputChangeHandler} />
          <button>Submit</button>
        </form>
      </Fragment>
    );
  }
}

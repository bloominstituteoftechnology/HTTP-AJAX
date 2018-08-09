import React, { Component } from "react";

export default class EditDeleteButtons extends Component {
  constructor(props) {
    super(props);
    console.log("Data", props.data);
    this.state = {
      data: props.data
    };
  }
  render() {
    return (
      <div className="editDeleteCardButtons">
        <button>Edit</button>
        <button>Del</button>
      </div>
    );
  }
}

import React, { Component } from 'react';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {...props.friend}
    }
  }

  render() {
    return (
      <div>{this.state.friend}</div>
    )
  }
}

export default Display;

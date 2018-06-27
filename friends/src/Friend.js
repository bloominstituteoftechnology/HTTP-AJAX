import React from "react";
import axios from "axios";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        {this.props.friend.name}
      </div>
    );
  }
}

export default Friend;

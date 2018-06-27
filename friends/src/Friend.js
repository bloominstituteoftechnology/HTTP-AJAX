import React from "react";

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

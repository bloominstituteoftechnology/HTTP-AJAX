import React from "react";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="friend-container">
        <p>{this.props.friend.name}</p>
        <p>{this.props.friend.age}</p>
        <p>{this.props.friend.email}</p>
      </div>
    );
  }
}

export default Friend;

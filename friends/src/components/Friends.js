import React, { Component } from "react";

class Friends extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.friends.map(friend => {
          return (
            <div className="friend" key={friend.id}>
              <p>{friend.name}</p>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Friends;

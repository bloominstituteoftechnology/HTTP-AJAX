import React from "react";

class FriendList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      friends: friends
    };
  }

  render() {
    return (
      <div>
        <h1>Look at all of your friends</h1>
        {this.state.friends.map(friend => (
          <h3>{friend.name}</h3>
        ))}
      </div>
    );
  }
}

export default FriendList;

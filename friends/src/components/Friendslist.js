import React from "react";

class Friendslist extends React.Component {
  render() {
    let props = this.props;
    return (
      <div>
        {props.friends.map(friend => (
          <div key={friend.id}>
            <h1>{friend.name}</h1>
            <p>email: {friend.email}</p>
            <p>age: {friend.age}</p>
            <button onClick={() => props.deleteFriend(friend.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Friendslist;

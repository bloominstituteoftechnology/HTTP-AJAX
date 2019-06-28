import React from "react";
import Form from "./Form";
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
            <Form
              editFriend={this.props.editFriend}
              name={friend.name}
              email={friend.email}
              age={friend.age}
              edit
              id={friend.id}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Friendslist;

import React from "react";
import Form from "./Form";
import axios from "axios";

updateFriend = ev => {
  ev.preventDefault();
  console.log("updateDfreind fired");
  axios
    .put(`http://localhost:5000/friends/${this.state.friends.id}`)
    .then(response => this.setState({ friends: response.data }));
};

const Friends = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <div>
            <h2>{friend.name}</h2>
            <h3>{friend.age}</h3>
            <h3>{friend.email}</h3>
            <button />
            <form onSubmit={this.updateFriend}>
              <input onChange={props.changeHandler} name="name" type="input" placeholder="name" />
              <input onChange={props.changeHandler} name="age" type="number" placeholder="age" />
              <input onChange={props.changeHandler} name="email" type="email" placeholder="email" />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};
export default Friends;

import React from "react";
import FriendCard from "./FriendCard";

export default class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: props.friendsData
    };
  }
  render() {
    console.log("Friend Data", this.state.friends);
    return <FriendCard />;
  }
}

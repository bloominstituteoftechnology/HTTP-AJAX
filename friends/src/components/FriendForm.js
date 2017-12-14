import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions";

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendValue: ""
    };
  }

  addFriend = event => {
    event.preventDefault();
    this.props.addFriend({
      friend: "",
      name: this.state.friendValue,
      age: "",
      email: ""
    });
    this.setState({
      friendValue: ""
    });
  };

  updateNewFriend = event => {
    this.setState({
      friendValue: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addFriend}>
          <input
            onChange={this.updateNewFriend}
            placeholder="Enter New Friend"
            value={this.state.friendValue}
          />
        </form>
      </div>
    );
  }
}

export default connect(null, { addFriend })(FriendForm);

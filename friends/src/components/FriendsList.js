import React, { Component } from "react";
import { connect } from "react-redux";
import Friends from "./Friends";
import { getFriends } from "../actions";

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map((friend, i) => (
            <Friends friend={friend} key={i} index={i} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);

import React, { Component } from "react";
import { connect } from "react-redux";
import { getFriends } from "../../actions/friends";
import Friend from "../Friend/Friend";
import FriendsInput from "../FriendsInput/FriendsInput";
import "./FriendsList.css";

class FriendsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="FriendsList">
        <div className="FriendsList__header">Friends</div>
        {this.props.friends.map((friend, i) => {
          return <Friend key={i} index={i} friend={friend} />;
        })}
        <FriendsInput friends={this.props.friends} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { friends: state.friends };
};

export default connect(mapStateToProps, { getFriends })(FriendsList);

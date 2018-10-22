import React, { Component, Fragment } from 'react';

import Friend from './friend';

class Friends extends Component {
  componentDidUpdate = prevProps => {
    return this.props.friends.length !== prevProps.friends.length ? this.scrollDown() : null;
  };

  scrollDown = () => this.refs.end.scrollIntoView({ behavior: 'smooth' });

  renderFriends = () => {
    return this.props.friends.map((friend, index) => (
      <Friend
        key={friend.id}
        friend={friend}
        index={index}
        deleteFriend={this.props.deleteFriend}
      />
    ));
  };

  render() {
    return (
      <Fragment>
        <ul>{this.renderFriends()}</ul>
        <div ref={'end'} className="blackhole" />
      </Fragment>
    );
  }
}

export default Friends;

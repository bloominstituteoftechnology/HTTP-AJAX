import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../../actions/friends';

class FriendsInput extends Component {

  addNewFriend = (event) => {
    event.preventDefault();
    const friend = {};
    Object.keys(this.refs).forEach((key) => {
      friend[key] = this.refs[key].value;
    });
    this.props.addFriend(friend);
    window.location.reload();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.addNewFriend}>
          <h2>Add a friend</h2>
          <p>Name: <input ref="name" /></p>
          <p>Age: <input ref="age" /></p>
          <p>Email: <input ref="email" /></p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default connect(null,  { addFriend })(FriendsInput);
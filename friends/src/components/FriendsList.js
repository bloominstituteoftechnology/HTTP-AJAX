import React, { Component } from 'react';
import Friend from './Friend';

export default class FriendsList extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="List">
        {this.props.friends.map(friend => (
            <Friend friend={friend} startUpdate={this.props.startUpdate} deleteItem={this.props.deleteItem} />
        ))}
      </div>
    );
  }
}

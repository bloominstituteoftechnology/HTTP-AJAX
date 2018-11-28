import React, { Component } from 'react';


export default class FriendsList extends Component {

  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="List">
        {this.props.friends.map(friend => (
            <p>{friend.name}</p>
        ))}
      </div>
    );
  }
}

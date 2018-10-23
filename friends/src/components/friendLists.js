import React, { Component } from 'react';
import Friend from './friend';


class FriendLists extends Component {
  render() { 
    console.log(this.props.friends)
    return ( 
      <>
      {this.props.friends.map(friend =>{
        return <Friend key={friend.id} friend={friend}/>
      })}
      </>
    );
  }
}
 
export default FriendLists ;
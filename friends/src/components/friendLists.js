import React, { Component } from 'react';
import Friend from './friend';
import { ListContainer } from "./style";


class FriendLists extends Component {
  render() { 
    console.log(this.props.friends)
    return ( 
      <ListContainer>
      {this.props.friends.map(friend =>{
        return <Friend key={friend.id} friend={friend}/>
      })}
      </ListContainer>
    );
  }
}
 
export default FriendLists ;
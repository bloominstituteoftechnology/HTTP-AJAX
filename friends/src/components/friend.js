import React, { Component } from 'react';
import { FriendCard } from "./style";


class Friend extends Component {

  render() { 
    const { name, age ,email } = this.props.friend
    return ( 
      <FriendCard>
      <h3>Name: {name}</h3>
      <h3>age :{age}</h3>
      <h3>Email :{email}</h3>
      </FriendCard>
    );
  }
}
 
export default Friend;
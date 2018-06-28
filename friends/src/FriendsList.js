import React, { Component } from 'react';
import { list } from 'postcss';

class FriendsList extends Component {
  constructor(props){
    super(props)
  }
  render() { 
    return ( 
      <ul>
        {this.props.friends.map(friend => <li key={Math.random()}>{friend[1].first_name}</li>)}
      </ul>
     )
  }
}
 
export default FriendsList;
import React, { Component } from 'react';

class AddFriend extends Component {
  constructor(props){
    super();

 this.state = {
   friendAdd:{},
   existingFriends:props.friends
  }
    
}
render () {
 return( <div><div>{this.props.existing.map(
   friend => {return <div key={friend.id}>{`${friend.name} ${friend.age} ${friend.email}`}</div>

   }
 )}</div>
 AddFriend is under development
 {console.log (this.props)}
 </div>)
}
}
// .map(friend => {
//   return <div key={friend.id}>{`${friend.name} ${friend.age} ${friend.email}`}</div>
export default AddFriend
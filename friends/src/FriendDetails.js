import React, { Component } from 'react'
import UpdateFriend from './UpdateFriend'

export default class FriendDetails extends Component {
  
    render() {
        return(
          <div className="friend-info">
            <div className="friend-name">
              Name: {this.props.friend.name}
            </div>
            <div className="friend-age">
              Age: {this.props.friend.age}
         </div>
         <div className="friend-email">
           Email: {this.props.friend.email}        
         </div>
         <UpdateFriend />
            <button onClick={this.props.deleteFriend(this.props.friend.id)}>Delete</button>
       </div>
    );
  }
}

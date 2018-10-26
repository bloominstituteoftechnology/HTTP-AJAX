import React, { Component } from 'react'
import FriendDetails from './FriendDetails'

class FriendsList extends Component {
    
    render() {
        return (
            <div>
                {this.props.friends.map(friend => (
                  <FriendDetails 
                    key={friend.id} 
                    friend={friend} 
                    deleteFriend={this.props.deleteFriend} 
                    updateFriend={this.props.updateFriend} />
                ))}
            </div>
        );
    }
}

  export default FriendsList
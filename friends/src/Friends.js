import React from 'react';
import FriendList from './FriendList.js'

class Friends extends React.Component {
    render() {
        return (
            <div>
                {this.props.friends.map(friend => {
                    return (
                        <FriendList 
                            key={friend.id} 
                            friend={friend}
                            updateFriends={this.props.updateFriend}
                            deleteFriend={this.props.deleteFriend}
                        />  
                    )
                })}
            </div>
        )
    }
}

export default Friends;
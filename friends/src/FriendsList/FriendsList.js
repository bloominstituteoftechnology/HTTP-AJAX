import React from 'react';
import Friend from './Friend.js'

class FriendsList extends React.Component {
    render() {
        return (
            <div>
                {this.props.friends.map(friend => {
                    return (
                        <Friend 
                            key={friend.id} 
                            friend={friend}
                            deleteFriend={this.props.deleteFriend}
                        />  
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;
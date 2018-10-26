import React from 'react';
import Friend from './Friend.js'

//component to map over and display list of friends

class FriendsList extends React.Component {
    render() {
        return (
            <div>
                {this.props.friends.map(friend => {
                    return (
                        <Friend 
                            key={friend.id} 
                            friend={friend}
                            // deleteFriend={this.props.deleteFriend}
                            updateFriendList={this.props.updateFriendList}
                            deleteFriendFromList={this.props.deleteFriendFromList}
                        />  
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;
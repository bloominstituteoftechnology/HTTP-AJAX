import React from 'react';
import friendList from './FriendList.js'

class Friends extends React.Component {
    render() {
        return (
            <div>
                {this.props.friends.map(friend => {
                    return (
                        <friendList 
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

export default Friends;
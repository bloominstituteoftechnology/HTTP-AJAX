import React from 'react';
import Friend from './Friend.js'

class FriendsList extends React.Component {
    render() {
        return (
            <div>
                {this.props.friends.map(friend => {
                    return (
                        <Friend key={friend.id} friend={friend}/>  
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;
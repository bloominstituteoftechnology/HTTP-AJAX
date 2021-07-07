import React from 'react';
import Friend from './Friend.js';

class FriendsList extends React.Component {

    render() {
        return (
            <div>
                {this.props.friends.map(friend => <Friend newFriend={friend}/>)}
            </div>
        );
    }
}

export default FriendsList;
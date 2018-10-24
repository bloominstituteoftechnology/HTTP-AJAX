import React, { Component } from 'react';

class FriendsList extends React.Component {
    render() {
        return (
            <div>
                {this.props.friends.map(friend => {
                    return (
                        <span>{friend.name}</span>   
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;
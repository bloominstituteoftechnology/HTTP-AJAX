import React, { Component } from 'react';

class FriendList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.friend.name}</p>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
                <button onClick={this.props.deleteFriend(this.props.friend.id)}>X</button>
                <button onClick={this.props.updateFriend}>Update Friend</button>
            </div>
        )
    }
}

export default FriendList;
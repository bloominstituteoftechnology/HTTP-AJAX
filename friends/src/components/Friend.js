import React from 'react';
import './Friends.css';


class Friend extends React.Component {

    deleteFriend = e => {
        e.preventDefault();
        this.props.deleteFriendHandler(this.props.friend.id);
    }

    updateFriend = e => {
        e.preventDefault();
        this.props.updateFriendHandler(this.props.friend.id);
    }

    render() {
        return (
            <tr className="friend-row">
                <td className="friend-name">{this.props.friend.name}</td>
                <td className="friend-age">{this.props.friend.age}</td>
                <td className="friend-email">{this.props.friend.email}</td>
                <td className="friend-controls">
                    <span className="friend-update" onClick={this.updateFriend}><i className="fas fa-pen-square"></i></span>
                    <span className="friend-delete" onClick={this.deleteFriend}><i className="fas fa-window-close"></i></span>
                </td>
            </tr>
        )
    }
}

export default Friend;
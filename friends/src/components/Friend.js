import React from 'react';
import './Friends.css';
import FriendForm from './FriendForm';


class Friend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            updateMode: false
        }
    }

    deleteFriend = e => {
        e.preventDefault();
        this.props.deleteFriendHandler(this.props.friend.id);
    }

    cancelForm = () => {
        this.setState({updateMode: false});
    }

    showForm = e => {
        e.preventDefault();
        this.setState({updateMode: true});
    }

    render() {
        if (this.state.updateMode === true) {
            return <FriendForm 
                        mode="update" 
                        updateFriendHandler={this.props.updateFriendHandler} 
                        cancelFormHandler={this.cancelForm}
                        friend={this.props.friend} />
        }
        return (
            <div className="friend-row">
                <span className="friend-name">{this.props.friend.name}</span>
                <span className="friend-age">{this.props.friend.age}</span>
                <span className="friend-email">{this.props.friend.email}</span>
                <span className="friend-controls">
                    <span className="friend-update" onClick={this.showForm}><i className="fas fa-pen-square"></i></span>
                    <span className="friend-delete" onClick={this.deleteFriend}><i className="fas fa-window-close"></i></span>
                </span>
            </div>
        )
    }
}

export default Friend;
import React from 'react';
import Friend from './Friend';

class Friends extends React.Component {
    state = {
        name: '',
        age: '',
        email: '',
        editing: false,
        beingEdited: null,
    };
    toggleEdit = (id) => {
        this.setState({ editing: !this.state.editing, beingEdited: id });
    }
    render() {
        return (
            <ul className="friends-container">
                {this.props.friends.map(friend => {
                    return (
                        <Friend
                            key={friend.id}
                            friend={friend}
                            editing={this.state.editing}
                            toggleEdit={this.toggleEdit}
                            beingEdited={this.state.beingEdited}
                            deleteFriend={this.props.deleteFriend}
                            updateFriends={this.props.updateFriends}
                            />
                    );
                })}
            </ul>
        );
    }
}

export default Friends;

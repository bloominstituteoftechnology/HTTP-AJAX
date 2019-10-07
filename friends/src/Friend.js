import React, { Component } from 'react';

class Friend extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <form>
                <input 
                    type="text"
                    placeholder="Friend's name"
                    onChange={this.props.handleFriendNameInput}
                    name="friend"
                    value={this.props.friendName}
                />
                <input 
                    type="number"
                    placeholder="Friend's age"
                    onChange={this.props.handleFriendAgeInput}
                    age="friend"
                    value={this.props.friendAge}
                />
                <input 
                    type="text"
                    placeholder="Friend's email"
                    onChange={this.props.handleFriendEmailInput}
                    email="friend"
                    value={this.props.friendEmail}
                />
                <button onClick={this.props.handleSubmitFriend}>Add friend</button>
            </form>
        )
    }
}

export default Friend;
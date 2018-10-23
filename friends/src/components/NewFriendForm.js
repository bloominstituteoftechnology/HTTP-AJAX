import React from 'react';

export default class NewFriendForm extends React.Component {
    render() {
        return (
            <form>
                <input placeholder='Name' onChange={this.props.inputChange} value={this.props.newFriend.name} name='name' />
                <input type='number' placeholder='Age' onChange={this.props.numberInputChange} value={this.props.newFriend.age} name='age' />
                <input placeholder='Email' onChange={this.props.inputChange} value={this.props.newFriend.email} name='email' />
                <button type='submit' onClick={this.props.addNewFriend}>Add New Friend</button>
            </form>
        )
    }
}
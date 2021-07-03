import React from 'react';

 export default class FriendForm extends React.Component {
    render() {
        return (
            <form>
              <input placeholder='Enter Name' onChange={this.props.inputChange} value={this.props.newFriend.name} name='name' />
              <input type='number' placeholder='Enter Age' onChange={this.props.numberInputChange} value={this.props.newFriend.age} name='age' />
              <input placeholder='Enter Email' onChange={this.props.inputChange} value={this.props.newFriend.email} name='email' />
              <button type='submit' onClick={this.props.addNewFriend}>Add Friend</button>
            </form>
        )
    }
}
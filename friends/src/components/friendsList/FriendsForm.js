import React, { Component } from 'react';

class FriendsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newFriend: {
                id: '',
                name: '',
                age: '',
                email: ''
            }
        }
    }

    handleChange = event => {
        this.setState({
            newFriend: {
                ...this.state.newFriend,
                [event.target.name]: event.target.value
            }
        })
    }
    postFriend = event => {
        event.preventDefault();
        this.props.postFriendToServer(this.state.newFriend);
        this.setState({
            newFriend: {
                id: '',
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render() {
        return (
            <div className='friendsForm'>
                <h2>Add new Friend</h2>
                <form onSubmit={this.postFriend}>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        onChange={this.handleChange}
                        value={this.state.newFriend.name}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='age'
                        onChange={this.handleChange}
                        value={this.state.newFriend.age}
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='email'
                        onChange={this.handleChange}
                        value={this.state.newFriend.email}
                    />
                    <button className='friendsButton'>Post New Friend</button>
                </form>
            </div>);
    }
}

export default FriendsForm;
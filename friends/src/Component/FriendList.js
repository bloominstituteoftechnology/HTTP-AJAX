import React, { Component } from 'react';

class FriendList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }
    
    inputHandler = (event) => {
        this.setState({
            [event.target.id]: (event.target.value)
        })

    }

    updateHandler = (event) => {
        event.preventDefault();
        const id = this.props.friend.id;
        this.props.updateFriend(id, this.state.name, this.state.age, this.state.email)
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.friend.name}</p>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
                <button onClick={this.props.deleteFriend(this.props.friend.id)}>X</button>
                <button onClick={this.updateHandler}>Update Friend</button>
                <form>
                    <input placeholder='Name' onChange={this.inputHandler} id='name'></input>
                    <input placeholder='Age' onChange={this.inputHandler} id='age'></input>
                    <input placeholder='Email' onChange={this.inputHandler} id='email'></input>
                </form>
            </div>
        )
    }
}

export default FriendList;
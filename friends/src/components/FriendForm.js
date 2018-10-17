import React from 'react';

import './FriendForm.css';

class FriendForm extends React.Component {
    constructor() {
        super();
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    addFriend = event => {
        event.preventDefault()
        console.log(this.state.friend)
    }

    changeHandler = event => {
        this.setState({
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value
            }
        })
    }

    render() { 
        return (
            <form className='addNameForm'>
                <input
                    name="name"
                    onChange={this.changeHandler}
                    placeholder="Name"
                    type="text"
                    value={this.state.friend.name}
                />
                <input
                    name="age"
                    onChange={this.changeHandler}
                    placeholder="Age"
                    type="text"
                    value={this.state.friend.age}
                />
                <input
                    name="email"
                    onChange={this.changeHandler}
                    placeholder="Email"
                    type="text"
                    value={this.state.friend.email}
                />
                <button onClick={this.addFriend} type="submit">ADD</button>
            </form>
        );
    }
}
 
export default FriendForm;

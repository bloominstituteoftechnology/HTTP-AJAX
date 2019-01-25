import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friend: {
                name: '',
                age: null,
                email: ''
            }
        }
    }

    changeHandler = event => {

        this.setState({ 
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value,
                [event.target.age]: event.target.value,
                [event.target.password]: event.target.value
            }
        });
    }


    addFriendHandler = event => {
        event.preventDefault();
        this.props.addFriend(this.state.friend);
    }

    render() {
        return (
            <form onSubmit={this.addFriendHandler}>
                <input
                    onChange={this.changeHandler}
                    type="text"
                    name="name"
                    placeholder="name"
                    input={this.state.name}
                >
                </input>
                <input
                    onChange={this.changeHandler}
                    type="number"
                    name="age"
                    placeholder="age"
                    input={this.state.age}
                >
                </input>
                <input
                    onChange={this.changeHandler}
                    type="email"
                    name="email"
                    placeholder="email"
                    input={this.state.email}
                >
                </input>
                <button onClick={this.addFriendHandler}>Add</button>
            </form>
        )
    }
}

export default FriendForm;
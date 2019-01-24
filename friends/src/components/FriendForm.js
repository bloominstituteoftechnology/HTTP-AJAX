import React from 'react';
import axios from 'axios';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: null,
            email: ''
        }
    }

    handleChange = event => {

        this.setState({ 
            [event.target.name]: event.target.value,
            [event.target.age]: event.target.value,
            [event.target.password]: event.target.value
        })
        console.log(this.state);

    }


  addFriend() {
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
    }

    render() {
        return (
            <form onSubmit={this.addFriend}>
                <input
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    placeholder="name"
                    input={this.state.name}
                >
                </input>
                <input
                    onChange={this.handleChange}
                    type="number"
                    name="age"
                    placeholder="age"
                    input={this.state.age}
                >
                </input>
                <input
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    placeholder="email"
                    input={this.state.email}
                >
                </input>
                
                <button>Add</button>
            </form>
        )
    }
}

export default FriendForm;
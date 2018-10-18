import React from 'react';
//import axios from 'axios';

class FriendForm extends React.Component {
    constructor(props) {
        super(...arguments);
        if(!props.friend){
            this.state = {
                id: null,
                name: '',
                email: '',
                age: null
            };
        } else{
            this.state = {
                id: props.friend.id,
                name: props.friend.name,
                email: props.friend.email,
                age: props.friend.age
            };
        }
    }
    //-- Rendering -----------------------------------
    render() {
        return (
            <form onSubmit={this.addFriend} className="friend-form">
                <label>Name
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.inputHandler}
                    />
                </label>
                <label>Email
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.inputHandler}
                    />
                </label>
                <label>Age
                    <input
                        name="age"
                        type="number"
                        value={''+this.state.age}
                        onChange={this.inputHandler}
                    />
                </label>
                <button>Submit</button>
            </form>
        );
    }

    //-- Interaction ---------------------------------
    inputHandler = changeEvent => {
        let stateKey = changeEvent.target.name;
        let newValue = changeEvent.target.value;
        let newState = {};
        newState[stateKey] = newValue
        this.setState(newState);
    }
    addFriend = submitEvent => {
        submitEvent.preventDefault();
        let newFriend = {
            name: this.state.name,
            email: this.state.email,
            age: this.state.age
        };
        if(this.state.id !== null){
            newFriend.id = this.state.id;
        }
        this.setState({
            name: '',
            email: '',
            age: null
        });
        this.props.onSubmit(newFriend);
    }
}

export default FriendForm;

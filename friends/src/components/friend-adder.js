import React from 'react';
import axios from 'axios';

class FriendAdder extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showForm: false,
            name: '',
            email: '',
            age: 0
        };
    }
    //-- Rendering -----------------------------------
    render() {
        let content;
        if(this.state.showForm){
            content = <form onSubmit={this.addFriend} className="add-card_form">
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
                        type="text"
                        value={this.state.email}
                        onChange={this.inputHandler}
                    />
                </label>
                <label>Age
                    <input
                        name="age"
                        type="number"
                        value={this.state.age}
                        onChange={this.inputHandler}
                    />
                </label>
                <button>Submit</button>
            </form>;
        } else{
            content = <div
                className="add-card_show"
                onClick={this.showForm}
                children="+"
            />;
        }
        return (
            <div className="card add-card">
                {content}
            </div>
        );
    }

    //-- Interaction ---------------------------------
    showForm = clickEvent => {
        this.setState({showForm: true});
    }
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
        }
        this.props.onSubmit(newFriend);
    }
}

export default FriendAdder;

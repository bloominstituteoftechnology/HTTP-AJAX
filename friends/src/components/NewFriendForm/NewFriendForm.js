import React from 'react';
import axios from 'axios';

import './NewFriendForm.css';

class NewFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: ""
        }
    }

    // stores input values in state
    changeHandler = event => {
        if (event.target.name === "age") {
            this.setState({
                [event.target.name]: Number(event.target.value)
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    //posts new friend to server on form "submit"
    newFriendFormSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (this.state.name && this.state.age && this.state.email) {
            const newFriend = this.state;
            axios.post('http://localhost:5000/friends', newFriend)
                .then(response => {
                    this.props.updateState(response.data);
                })
                .catch(err => console.log(err));
            this.setState({
                name: "",
                age: "",
                email: ""
            });
        } else {
            alert("One or more inputs is empty");
        }
    }

    render() {
        return (
            <div>
                <form className="new-friend-form" id="form">
                {/* NOT DRY, REFACTOR */}
                    <label for="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Name" onChange={this.changeHandler} value={this.state.name} />
                    <label for="age">Age:</label>
                    <input type="number" name="age" id="age" placeholder="Age" onChange={this.changeHandler} value={this.state.age} />
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Email" onChange={this.changeHandler} value={this.state.email} />
                    <button onClick={(event) => this.newFriendFormSubmit(event)}>Add new friend</button>
                </form>
            </div>
        );
    }
}

export default NewFriendForm;
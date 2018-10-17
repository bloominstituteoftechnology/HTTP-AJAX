import React from 'react';
import axios from 'axios';

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
        if (this.state.name && this.state.age && this.state.email) {
            const newFriend = this.state;
            axios.post('http://localhost:5000/friends', newFriend)
                .then(response => {
                    console.log(response);
                    console.log(response.data);
                    this.props.updateState();
                });
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
            <form className="new-friend-form">
                <input type="text" name="name" placeholder="Name" onChange={this.changeHandler} value={this.state.name} />
                <input type="number" name="age" placeholder="Age" onChange={this.changeHandler} value={this.state.age} />
                <input type="email" name="email" placeholder="Email" onChange={this.changeHandler} value={this.state.email} />
                <button onClick={(event) => this.newFriendFormSubmit(event)}>Submit</button>
            </form>
        );
    }
}

export default NewFriendForm;
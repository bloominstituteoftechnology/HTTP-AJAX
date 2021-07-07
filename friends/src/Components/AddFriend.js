import React, { Component } from 'react';
import './AddFriend.css';
import axios from 'axios';

class AddFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleChangeAge(event) {
        this.setState({
            age: event.target.value
        })
    }

    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit(event) {
        const id = this.state.match.params.id;
        axios.post('http://localhost:5000/friends/', {
            id: id,
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        });
    }

    render() {
        return (
            <div>
                <h2>Add Friend!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                    </label>
                    <label>
                        Age:
                        <input type="text" value={this.state.age} onChange={this.handleChangeAge} />
                    </label>
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddFriend;
import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component {
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
        const id = this.state.id;
        axios({
            method: 'DELETE',
            url: `http://localhost:5000/friends/${id}`,
            headers: { 'Content-Type': 'application/json' },
          });
        axios.post('http://localhost:5000/friends/', {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>Add a new friend, eh?</h2>
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

export default Update;
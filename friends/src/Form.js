import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            "firstName": '',
            "age": '',
            "email": ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        }) 
    }

    handleSubmit = () => {
        if (this.state.firstName === '' || this.state.age === '' || this.state.email === '') {
            return prompt("Please fill in all fields");
        }
        axios({
            method: 'post',
            url: 'http://localhost:5000/friends',
            data: {
                "name": `${this.state.firstName}`,
                "age": this.state.age,
                "email": `${this.state.email}`
            }
        })
        this.setState({
            firstName: '',
            age: '',
            email: ''
        })
    }

    render() {

        return (
            <form>
                <input name="firstName" placeholder="name" value={this.state.firstName} onChange={e => this.handleChange(e)} />
                <input name="age" placeholder="age" value={this.state.age} onChange={e => this.handleChange(e)} />
                <input name="email" placeholder="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                <button type="submit" onClick={this.handleSubmit}>Add Friend</button>
            </form>
        )
    }
}

export default Form;
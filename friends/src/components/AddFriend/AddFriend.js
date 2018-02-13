import React, { Component } from 'react';
import axios from 'axios';

class AddFriend extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    }
    render() {
        return (
            <form onSubmit={this.friendSubmitHandler} className="af">
                <label> Name: </label><input type="text" name="name" value={this.state.name} onChange={this.friendChangeHandler} placeholder="name" />
                <label> Age: </label><input type="number" name="age" value={this.state.age} onChange={this.friendChangeHandler} placeholder="age" />
                <label> Email: </label><input type="email" name="email" value={this.state.email} onChange={this.friendChangeHandler} placeholder="email" />
                <button type="submit" className="fs__button" >add friend</button>
            </form>
        )
    }
    
    friendChangeHandler = (event) => {
        let { name, value } = event.target;

        this.setState({ [name]: value });
        
        if (event.target.type === 'number') {
            value = Number('number')
        }
    }
    friendSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/friends', this.state)
        .then(result => this.props.onCreate())
        .then(response => this.setState({name: '', age: '', email: ''}))
        .catch(error => console.log(error))
        console.log('I am the new state after submit: ', this.state)
    }
}


export default AddFriend;

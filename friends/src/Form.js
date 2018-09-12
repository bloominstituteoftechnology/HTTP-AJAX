import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            email: '',
            newFriend: []
        }
    }
    

    formHandler = event => {
       event.preventDefault();
        this.setState({ newFriend: {
            age: this.state.age, 
            email: this.state.email, 
            name: this.state.name} 
        });

        this.props.updateFriends(this.state.newFriend);
        
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    
    render() {
        return (
            <form action="" >
                Name: <input type="text" name="name" value={this.state.name} onChange={this.handleInput}/>
                Age: <input type="text" name="age" value={this.state.age} onChange={this.handleInput}/>
                Email: <input type="text" name="email" value={this.state.email} onChange={this.handleInput}/>
                <input type="submit" value="Submit" onClick={this.formHandler}/>
            </form>
        )
    }
}



export default Form;
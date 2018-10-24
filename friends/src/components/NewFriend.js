import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class NewFriend extends Component {
    constructor() {
      super();

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleAgeChange = this.handleAgeChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
          name: '',
          age: 0,
          email: ''
      };
    }

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleAgeChange(e) {
        this.setState({age: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handleSubmit(e) {
        const self = this;
        const random = Math.floor((Math.random() * 1000000000000000) + 1);

        e.preventDefault();
        axios.post('http://localhost:5000/friends', {
            id: random,
            name: self.state.name,
            age: self.state.age,
            email: self.state.email
        })
        .then(function (response) {
            console.log(response);

            self.setState({
                name: '',
                age: 0,
                email: ''
            });

            
            self.props.history.push('/')
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Age:
                        <input type="number" value={this.state.age} onChange={this.handleAgeChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <input type='submit' value='Submit' />
                </form>
            </div>
        );
    }
}

export default NewFriend;
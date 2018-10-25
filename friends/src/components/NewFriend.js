import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewFriend extends Component {
    constructor() {
      super();

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleAgeChange = this.handleAgeChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);

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

    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <form onSubmit={(e) => this.props.handleSubmit(e, this.state.name, this.state.age, this.state.email)}>
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
import React, { Component } from 'react';

class InputForm extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state)
    }

    render() {
        const {
            name,
            age,
            email
        } = this.state
    return (
        <div>
            <input type='text' name='name' value={name} 
                onChange={e => this.handleChange(e) } />
            <input type='text' name='age' value={age} 
                onChange={e => this.handleChange(e) } />
            <input type='text' name='email' value={email} 
                onChange={e => this.handleChange(e) } />
            <button onClick={this.handleSubmit}>Submit</button>
        </div>
    )
    }
}

export default InputForm;
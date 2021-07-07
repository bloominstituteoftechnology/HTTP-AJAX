import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addFriend(this.state.name, this.state.age, this.state.email);
        this.setState({name: '', age: '', email: ''});
    }
    
    render() {
        if(!this.props.editing) {
            return (
                <>
                <h4>Add a Friend</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <label>Name:</label>
                        <input type="text" name="name" value={this.state.name} placeholder="John Smith" onChange={this.handleChange}/>
                    </div>
                    <div className="form-field">
                        <label>Age:</label>
                        <input type="text" name="age" value={this.state.age}placeholder="22" onChange={this.handleChange}/>
                    </div>
                    <div className="form-field">
                        <label>Email:</label>
                        <input type="email" name="email" value={this.state.email}placeholder="john@johnsmith.com" onChange={this.handleChange}/>
                    </div>
                    <button>Submit</button>
                </form>
                </>
            );
        }
        
    }
}

export default Form;
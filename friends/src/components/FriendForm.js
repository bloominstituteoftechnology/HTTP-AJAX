import React, { Component } from 'react';

class FriendForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            age: '',
            email:'',
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return (
            <div className="friend-form">
                <form>
                    <input
                        type="text"
                        placeholder="name..."
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="age..."
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        placeholder="email..."
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default FriendForm;
import React, { Component } from 'react';
import axios from 'axios';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            name: ''
        };
    }

    render() {
        // console.log('state name from render', this.state.name)
        return (
        <div>
            <form onSubmit={this.props.click}>
                <label>
                    Name:
                    <input type="text" name="name"
                    onChange={this.props.changeName} />
                </label>
                <label>
                    Age:
                    <input type="number" name="id" 
                    onChange={this.props.changeAge} />
                </label>
                <label>
                    ID:
                    <input type="text" name="id" 
                    onChange={this.props.changeID} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" 
                    onChange={this.props.changeEmail} />
                </label>
                <input type="submit" value="Add New"/>
                <button onClick={this.props.update}>Update</button>
                <button onClick={this.props.delete}>Delete</button>
            </form>
        </div>
        )
    }
}

export default MyForm;
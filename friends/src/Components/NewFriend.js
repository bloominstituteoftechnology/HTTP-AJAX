import React, { Component } from 'react';
class NewFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {    };
    }
    render() {
        return{
            <form onSubmit={this.handleSubmit}>
            <div> 
            Name: <input name='name' type='text' value={this.state.name} placeholde='Name Here' onChange={this.handleChange} />
            </div>
          </form> 
        }
    }
}

export default NewFriend;


// new friend form goes here
// name: should be a string,
//   age: should be a number,
//   email: should be a string,
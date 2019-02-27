import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {

    constructor() {
        super();
        this.state = {name: '',
                      age: 0,
                      email: ''}
    }

    inputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    update = id =>{

    }

    render() {
        return (
            <form onSubmit={''}>
                <input onChange={this.inputChange} name="name" type="text" placeholder="Name" />
                <input onChange={this.inputChange} name="age" type="text" placeholder="Age" />
                <input onChange={this.inputChange} name="email" type="text" placeholder="Email" />
                <input type="button" value="Save" />
            </form>
        )
    }
}

export default FriendsList;
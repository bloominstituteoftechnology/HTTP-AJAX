import React, { Component } from 'react';
import axios from 'axios';

class AddFriend extends Component {
    state = {friends: []}
    render() {
        return (
            <form action={axios
            .post('http://localhost:3000/friends')
            .then(response => console.log('what is this?', response))
            .catch()} method="post" className="fs">
                <input type="text" placeholder="name" label="name" />
                <input type="text" placeholder="age" label="age" />
                <input type="email" placeholder="email" label="email"/>
                <button className="fs__button">add friend</button>
            </form>
        )
    }

    componentDidMount() {
        axios.post('')
        .then(response => this.setState({friends: response.data}))
        .catch(error => console.log('error message: ', error));
    }

    
}


export default AddFriend;
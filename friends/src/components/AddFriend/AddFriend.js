import React, { Component } from 'react';
import axios from 'axios';
import FriendsList, { state } from '../FriendsList/FriendsList';

class AddFriend extends Component {
    state = {
        name: '',
        age: '',
        email: '',
    }

    onChange = (fc) => {
        const tempFriendslist = this.state;
        tempFriendslist[fc.target.name] = fc.target.value;
        this.setState(tempFriendslist);
    }

    onSubmit = (fc) => {
        fc.preventDefault();
        const { name, age, email } = this.state; 
        axios.post('http://localhost:5000/friends', { name, age, email })
        .then(result => this.setState({name: '', age: '', email: ''}))
        .catch(error => console.log(error))
    }

    render() {
        const { name, age, email } = this.state;
        return (
            <form onSubmit={this.onSubmit} className="af">
                <input name="name" value={name} onChange={this.onChange} placeholder="name" label="name" />
                <input name="age" value={age} onChange={this.onChange} placeholder="age" label="age" />
                <input name="email" value={email} onChange={this.onChange} placeholder="email" label="email"/>
                <button className="fs__button" >add friend</button>
            </form>
        )
    }
}


export default AddFriend;

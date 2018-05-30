import React, { Component } from 'react';
import axios from 'axios';
import './Friends.css';
import AddFriend from './AddFriend';
import OriginalFriends from './OriginalFriends';

export default class FriendsList extends Component {
    constructor(){
        super();
        this.state = {
            friends: [],
            // name: '',
            // age: '',
            // email: ''
        };
    }

    componentDidMount(){
    // this.fetchUsers()
        axios.get('http://localhost:5000/friends')
            .then(response => {
                this.setState({ friends: response.data });
            })
            .catch(error => console.log(error));
    }

    //   fetchUsers = () => {
    //     axios.get('http://localhost:5000/friends')
    //       .then(response => {
    //         this.setState({ friends: response.data })
    //       })
    //       .catch(err => console.log(err))
    //   }

    // handleChange = (e) => { this.setState({[e.target.name]: e.target.value}) }
    // buttonSubmit = () => {
    //   const { name, age, email } = this.state
    //   axios.post('http://localhost:5000/friends', { name, age, email})
    //     .then( (response) => {
    //       this.setState({ friends: response.data, name: '', age: '', email: ''})
    //     })
    // }
    render() {
        return <div>
            <AddFriend/>
            {/* <h3>Add Friend</h3>
        <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name} />
        <input type="number" placeholder="Age" name="age" onChange={this.handleChange} value={this.state.age} />
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
        <button onClick={this.buttonSubmit}>Submit</button> */}
            <OriginalFriends originalState={this.state} />
            {/* <h1>Friends:</h1>
        <ul className="friends">
          {this.state.friends.map(friend => {
            return <li key={friend.id} className="friend">
                <p>Name: {friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
              </li>;
          })}
        </ul> */}
        </div>;
    }
}
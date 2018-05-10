import React, { Component } from 'react';
import axios from 'axios';
import './Friends.css';
import Update from './Update';


export default class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: '',
            showUpdateFriend: false
        };
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axios
            .get('http://localhost:5000/friends/')
            .then(response => {
               this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    deleteFriend(friendID) {
        // alert(friendID);
        axios.delete(`http://localhost:5000/friends/${friendID}`)
            .then(response => {
                this.getFriends();
            })
            .catch(err => {
                console.log(err); 
            })
    }

    handleFriendInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    showUpdateFriend = () => {
        this.setState({showUpdateFriend: !this.state.showUpdateFriend})
    }

    updateFriend = friendID => {
        const friend = {};
        if(this.state.name !== '') {
            friend.name = this.state.name;
        }
        if(this.state.age !== '') {
            friend.age = this.state.age;
        }
        if(this.state.email !== '') {
            friend.email = this.state.email;
        }
        
        axios.put(`http://localhost:5000/friends/${friendID}`, friend)
            .then(response => {
                this.setState({ showUpdateFriend: false, name: '', age: '', email: '' })
                this.getFriends();
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        // console.log(this.state.friends)
        return (
            <div>
                {this.state.friends.map(friend => (
                    
                    <div className="container" key={friend.id} friend={friend}>
                        <div className="friend-card">
                            <h2>{ friend.name }</h2>
                            <h3>{ friend.age }</h3>
                            <h3>{ friend.email }</h3>
                            <button onClick={() => this.deleteFriend(friend.id) }>
                                Delete Friend
                            </button>
                            <button onClick={this.showUpdateFriend}>Edit</button>

                            {this.state.showUpdateFriend ? (
                                <div>
                                    <input 
                                        type="text" 
                                        onChange={this.handleFriendInput} 
                                        name='name' 
                                        value={this.state.name} 
                                        placeholder="First Name" 
                                    />
                                    <input 
                                        type="number" 
                                        onChange={this.handleFriendInput} 
                                        name='age' 
                                        value={this.state.age} 
                                        placeholder="Your Age" 
                                    />
                                    <input 
                                        type="email" 
                                        onChange={this.handleFriendInput} 
                                        name='email' 
                                        value={this.state.email} 
                                        placeholder="Your Email" 
                                    />
                                    <button onClick={() => this.updateFriend(friend.id)} >Update Friend</button>
                                </div>
                            ) : null }

                            {/* <Update /> */}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

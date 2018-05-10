import React, { Component } from 'react';
import axios from 'axios';
import './Friends.css';
import Update from './Update';


export default class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
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

    showUpdateFriend = () => {
        this.setState({showUpdateFriend: !this.state.showUpdateFriend})
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
                                    <button onClick={this.saveNewFriend} >Save Friend</button>
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

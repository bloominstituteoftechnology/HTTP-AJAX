import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, CardHeader, CardBody, CardText } from 'reactstrap'

import FriendCard from './FriendCard';

export default class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: null,
            newFriendId: null,
            newFriendName: '',
            newFriendAge: '',
            newFriendEmail: '',
        }
    }

    componentDidMount = () => {
        this.getFriends();
    }

    getFriends = () => {
        console.log('friends gotten')
        axios
        .get('http://localhost:5000/friends')
        .then(response => {
            this.setState(() => ({ friends: response.data }));
        })
        .catch(error => {
            console.error('Server Error', error);
        });
    }

    handleDeleteFriend = (id) => {
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                   this.setState(() => ({ friends: response.data }));
                })
            .catch(error => {
                console.log(error);
            })
        this.getFriends();
    };

    handleNewFriendInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleAddNewFriend = () => {
        const newFriend = { id: this.state.friends[this.state.friends.length - 1].id + 1, name: this.state.newFriendName, age: this.state.newFriendAge, email: this.state.newFriendEmail };
        if (newFriend.id !== '' && newFriend.name !== '' && newFriend.age !== '' && newFriend.email !== '') {
            axios
                .post('http://localhost:5000/friends', newFriend)
                .then(response => {
                    this.setState(() => ({ friends: response.data }));
                })
                .catch(error => {
                    console.log(error);
                })
            this.setState({ newFriendName: '', newFriendAge: '', newFriendEmail: '' });
        } else {
            alert('Fill out all inputs to submit');
        }
    }

    // RemoveButton = (id) => {
    //     return (
    //         <button onClick={() => this.handleDeleteFriend(id)}>Remove Friend</button>
    //     )
    // }

    render() {
        if(!this.state.friends) {
            return <div>Loading friends...</div>;
        }
        return (
            <div className="App mt-5">
                <h1>Friendslist</h1>
                <Container className="mb-5">
                    {this.state.friends.map((friend) => {
                        return (
                            <div key={friend.id}>
                            <button onClick={() => this.handleDeleteFriend(friend.id)}>Remove Friend</button>
                            <FriendCard key={friend.id} friend={friend}
                            // RemoveButton={() => this.RemoveButton(friend.id)}
                            // haven't figured out how to transfer this function to FriendCard.js
                            // getFriends={function getFriends(){this.getFriends}} 
                            />
                            </div>
                        )
                    })}
                    <Card>
                        <CardHeader>{`Name:  `}
                            <input
                                type="text"
                                name='newFriendName'
                                value={this.state.newFriendName}
                                placeholder="Add name..."
                                onChange={this.handleNewFriendInput}
                            />
                        </CardHeader>
                        <CardBody className="text-left">
                            <CardText>{`Age:  `}
                            <input
                                type="text"
                                name='newFriendAge'
                                value={this.state.newFriendAge}
                                placeholder="Add age..."
                                onChange={this.handleNewFriendInput}
                            />
                            </CardText>
                            <CardText>{`Email:  `}
                            <input
                                type="text"
                                name='newFriendEmail'
                                value={this.state.newFriendEmail}
                                placeholder="Add email..."
                                onChange={this.handleNewFriendInput}
                            />
                            </CardText>
                            <CardText>{`Id:  `} {this.state.friends[this.state.friends.length - 1].id + 1}</CardText>
                        </CardBody>
                        <button onClick={this.handleAddNewFriend}>Submit</button>
                    </Card>
                </Container>
            </div>
        )
    }
}
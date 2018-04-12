import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, CardHeader, CardBody, CardText, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom';

import FriendCard from './FriendCard';

export default class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            newFriendId: null,
            newFriendName: '',
            newFriendAge: '',
            newFriendEmail: '',
        }
    }

    componentDidMount = () => {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    handleAddFriend = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmitFriend = () => {
        const newFriend = { id: this.state.friends.length + 1, name: this.state.newFriendName, age: this.state.newFriendAge, email: this.state.newFriendEmail };
        if (newFriend.id != '' && newFriend.name != '' && newFriend.age != '' && newFriend.email != '') {
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

    render() {
        return (
            <div className="App mt-5">
                <h1>Friendslist</h1>
                <Container className="mt-5">
                    {this.state.friends.map((friend, index) => {
                        return (
                            <Link to={`/friends/${friend.id}`}>
                                <FriendCard key={index} friend={friend} />
                            </Link>
                        )
                    })}
                    <Card>
                        <CardHeader>{`Name:  `}
                            <input
                                type="text"
                                name='newFriendName'
                                value={this.state.newFriendName}
                                placeholder="Add name..."
                                onChange={this.handleAddFriend}
                            />
                        </CardHeader>
                        <CardBody className="text-left">
                            <CardText>{`Age:  `}
                            <   input
                                    type="text"
                                    name='newFriendAge'
                                    value={this.state.newFriendAge}
                                    placeholder="Add age..."
                                    onChange={this.handleAddFriend}
                                />
                            </CardText>
                            <CardText>{`Email:  `}
                                <input
                                    type="text"
                                    name='newFriendEmail'
                                    value={this.state.newFriendEmail}
                                    placeholder="Add email..."
                                    onChange={this.handleAddFriend}
                                />
                            </CardText>
                            <CardText>{`Id:  `} {this.state.friends.length + 1}</CardText>
                        </CardBody>
                        <button onClick={this.handleSubmitFriend}>Submit</button>
                    </Card>
                </Container>
            </div>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, CardHeader, CardBody, CardText, Col, Row } from 'reactstrap'

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    render() {
        return (
            <div className="App mt-5">
            <h1>Friendslist</h1>
                <Container className="mt-5">
                    {this.state.friends.map((friend, index) => {
                        const { id, name, age, email } = friend;
                        return (
                            <Card key={index}>
                                <CardHeader>{friend.name}</CardHeader>
                                <CardBody className="text-left">
                                    <CardText>Age: {friend.age}</CardText>
                                    <CardText>Email: {friend.email}</CardText>
                                    <CardText>Id: {friend.id}</CardText>
                                </CardBody>
                            </Card>
                        )
                    })}
                </Container>
            </div>
        )
    }
}

// function FriendDetails({ friend }) {
//     const { id, name, age, email } = friend;
// }
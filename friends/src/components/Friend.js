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

    componentDidMount = () => {
        let id = this.props.match.params.id;
        axios
            .get(`http://localhost:5000/friends/${id}`)
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
                <h1>Single Friend Display</h1>
                <Container>
                    <Card>
                        <CardHeader>{this.state.friends.name}</CardHeader>
                        <CardBody className="text-left">
                            <CardText>Age: {this.state.friends.age}</CardText>
                            <CardText>Email: {this.state.friends.email}</CardText>
                            <CardText>Id: {this.state.friends.id}</CardText>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        )
    }
}
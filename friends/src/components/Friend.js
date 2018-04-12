import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, CardHeader, CardBody, CardText, Col, Row } from 'reactstrap'

import FriendCard from './FriendCard';

export default class Friend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: null,
        }
    }

    componentDidMount = () => {
        let id = this.props.match.params.id;
        axios
            .get(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState(() => ({ friend: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    render() {
        if(!this.state.friend) {
            return <div>Loading friend...</div>;
        }
        return (
            <Container className="mt-5 mb-5">
                <h1>Single Friend Display</h1>
                <FriendCard friend={this.state.friend} />
            </Container>
        )
    }
}
import React from "react";
//import { Link, NavLink, Route } from "react-router-dom";//
import axios from "axios";
import { Row, Container, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './FriendsPage.css';
import Friend from './Friend';

class FriendsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            friends: [],
            loading: true
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                this.setState({
                    friends: response.data,
                    loading: false
                })
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    render() {
        return (
            <Container fluid>
                <Row >
                    {this.state.friends.map(friend => (
                        <Col sm="4" key={friend.id} >
                            <Friend friend={friend} />
                        </Col>
                    ))}
                </Row>

                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                </Form>

            </Container>
        )
    }

}




export default FriendsPage;
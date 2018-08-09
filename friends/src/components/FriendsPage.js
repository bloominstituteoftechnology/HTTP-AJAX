import React from "react";
//import { Link, NavLink, Route } from "react-router-dom";//
import axios from "axios";
import { Row, Container, Col } from 'reactstrap';

import './FriendsPage.css';
import Friend from './Friend';
import FriendForm from './FriendForm';

class FriendsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            friends: [],
            name: '',
            age: '',
            email: '',
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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    handleSubmit = event => {
        event.preventDefault();


        axios.post(`http://localhost:5000/friends`, { 
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
         })
            .then(response => {
                this.setState({
                    friends: response.data,
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
                <Row className="custom-display">
                    <Col sm="6">
                        <FriendForm name={this.state.name} age={this.state.age} email={this.state.email} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                    </Col>
                </Row>
            </Container>
        )
    }

}




export default FriendsPage;
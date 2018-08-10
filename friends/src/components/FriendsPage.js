import React from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { Row, Container, Col } from 'reactstrap';

import './FriendsPage.css';
import Friend from './Friend';
import FriendForm from './FriendForm';
import FriendDetails from './FriendDetails';

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


    handleEdit = (id) => {
        const updatedFriendObj = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        axios.put(`http://localhost:5000/friends/${id}`, updatedFriendObj)
            .then(response => {
                this.setState({
                    friends: response.data
                })
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }


    handleDelete = (id) => {
        axios.delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState({
                    friends: response.data
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
                            <Link to={`/${friend.id}`}>
                                <Friend friend={friend} />
                            </Link>
                        </Col>

                    ))}
                </Row>
                <Row className="custom-display">
                    <Col sm="6">
                        <FriendForm name={this.state.name} age={this.state.age} email={this.state.email} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Route exact path="/:id" render={(props) => <FriendDetails {...props} friends={this.state.friends} />} ></Route>
                    </Col>
                </Row>
            </Container>
        )
    }

}

{/* <Route exact path="/" component={MovieList}></Route>
<Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} />} ></Route> */}




export default FriendsPage;
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap'

export default class FriendCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            friend: this.props.friend,
            editable: false,
            editFriendName: this.props.friend.name,
            editFriendAge: this.props.friend.age,
            editFriendEmail: this.props.friend.email,
        }
    }

    componentDidMount = () => {
        this.displayFriend();
    }

    displayFriend = () => {
        let id = this.props.friend.id;
        axios
            .get(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState(() => ({ friend: response.data }));
            })
            .catch(error => {
                console.error(error);
            })
    }

    handleDeleteFriend = (id) => {
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState(() => ({ friend: null }));
                this.props.getFriends();
            })
            .catch(error => {
                console.log(error);
            })
    };

    displayEditForm = () => {
        this.setState({ editable: true });
    }

    handleEditFriendInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    updateFriend = (id) => {
        if (this.state.editFriendName !== '' && this.state.editFriendAge !== '' && this.state.editFriendEmail !== '') {
            const friend = { id: this.state.friend.id, name: this.state.editFriendName, age: this.state.editFriendAge, email: this.state.editFriendEmail }
            axios
                .put(`http://localhost:5000/friends/${id}`, friend)
                .then(response => {
                    this.setState(() => ({ editable: false }));
                    this.displayFriend();
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            alert('Fill out all inputs to submit');
        }
    }

    render() {
        if (this.state.friend === undefined) {
            return 'Loading friends...';
        }
        else if (this.state.friend !== null && this.state.editable === true) {
            return (
                <Card>
                    <CardHeader>{`Name:  `}
                        <input
                            type="text"
                            name='editFriendName'
                            value={this.state.editFriendName}
                            placeholder="Add name..."
                            onChange={this.handleEditFriendInput}
                        />
                    </CardHeader>
                    <CardBody className="text-left">
                        <CardText>{`Age:  `}
                            <input
                                type="number"
                                name='editFriendAge'
                                value={this.state.editFriendAge}
                                placeholder="Add age..."
                                onChange={this.handleEditFriendInput}
                            />
                        </CardText>
                        <CardText>{`Email:  `}
                            <input
                                type="text"
                                name='editFriendEmail'
                                value={this.state.editFriendEmail}
                                placeholder="Add email..."
                                onChange={this.handleEditFriendInput}
                            />
                        </CardText>
                        <CardText>{`Id:  `} {this.state.friend.id}</CardText>
                    </CardBody>
                    <button onClick={() => {
                        this.updateFriend(this.state.friend.id)}}>
                        Submit
                    </button>
                </Card>
            )
        } else if (this.state.friend !== null) {
            const { id, name, age, email } = this.state.friend;
            return (
                <Card>
                    <CardHeader>
                        <Link to={`/friends/${id}`}>
                            {name}
                        </Link>
                        <br />
                        <button onClick={(e) => {
                            e.preventDefault();
                            this.handleDeleteFriend(id)}}>
                            Remove Friend
                        </button>
                        <br />
                        <button onClick={(e) => {
                            e.preventDefault();
                            this.displayEditForm(id)}}>
                            Edit Friend
                        </button>
                    </CardHeader>
                    <CardBody className="text-left">
                        <CardText>Age: {age}</CardText>
                        <CardText>Email: {email}</CardText>
                        <CardText>Id: {id}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else return null;
    }
}